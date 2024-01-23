import { Reducer } from 'react';
import {
  PostsRequestAction,
  PostsRequestSuccessAction,
  PostsRequestErrorAction,
  POSTS_REQUEST,
  POSTS_REQUEST_SUCCESS,
  POSTS_REQUEST_ERROR,
} from './actions';
import { IPostObject } from '../../CardsList';

export type PostsState = {
  loading: boolean;
  loadCount: number;
  error: string;
  data: { children: IPostObject[]; nextAfter: string };
};

export type PostsActions =
  | PostsRequestAction
  | PostsRequestSuccessAction
  | PostsRequestErrorAction;

export const postsReducer: Reducer<PostsState, PostsActions> = (
  state,
  action
) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return { ...state, loading: true, error: '' };
    case POSTS_REQUEST_SUCCESS:
      return {
        ...state,
        data: {
          children: [...state.data.children, ...action.data.children],
          nextAfter: action.data.nextAfter,
        },
        loading: false,
        loadCount: state.loadCount + 1,
      };
    case POSTS_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
        loadCount: state.loadCount + 1,
      };
    default:
      return state;
  }
};
