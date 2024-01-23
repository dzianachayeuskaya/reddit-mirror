import { Action, ActionCreator } from 'redux';
import { IPostObject } from '../../CardsList';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducer';
import axios from 'axios';

export const POSTS_REQUEST = 'POSTS_REQUEST';
export type PostsRequestAction = {
  type: typeof POSTS_REQUEST;
};
export const postsRequest: ActionCreator<PostsRequestAction> = () => ({
  type: POSTS_REQUEST,
});

export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';
export type PostsRequestSuccessAction = {
  type: typeof POSTS_REQUEST_SUCCESS;
  data: { children: IPostObject[]; nextAfter: string };
};
export const postsRequestSuccess: ActionCreator<
  PostsRequestSuccessAction
> = (data: { children: IPostObject[]; nextAfter: string }) => ({
  type: POSTS_REQUEST_SUCCESS,
  data,
});

export const POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';
export type PostsRequestErrorAction = {
  type: typeof POSTS_REQUEST_ERROR;
  error: string;
};
export const postsRequestError: ActionCreator<PostsRequestErrorAction> = (
  error: string
) => ({
  type: POSTS_REQUEST_ERROR,
  error,
});

export const postsRequestAsync =
  (): ThunkAction<void, RootState, unknown, Action<string>> =>
  (dispatch, getState) => {
    dispatch(postsRequest());

    axios
      .get('https://oauth.reddit.com/best.json?sr_detail=true', {
        headers: { Authorization: `Bearer  ${getState().token}` },
        params: {
          limit: 10,
          after: getState().posts.data.nextAfter,
        },
      })
      .then((resp) => {
        const {
          data: { after, children },
        } = resp.data;

        dispatch(postsRequestSuccess({ children, nextAfter: after }));
      })
      .catch((err) => {
        console.log(err);
        dispatch(postsRequestError(String(err)));
      });
  };
