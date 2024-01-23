import { Reducer } from '@reduxjs/toolkit';
import { MeActions, MeState, meReducer } from './me/reducer';
import { ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from './me/actions';
import {
  SET_TOKEN,
  SetTokenAction,
  UPDATE_COMMENT,
  UpdateCommentAction,
} from './actions';
import { PostsActions, PostsState, postsReducer } from './posts/reducer';
import {
  POSTS_REQUEST,
  POSTS_REQUEST_ERROR,
  POSTS_REQUEST_SUCCESS,
} from './posts/actions';

export type RootState = {
  token: string;
  commentText: string;
  me: MeState;
  posts: PostsState;
};

const initialState: RootState = {
  token: '',
  commentText: '',
  me: {
    loading: false,
    error: '',
    data: null,
  },
  posts: {
    loading: false,
    loadCount: 0,
    error: '',
    data: { children: [], nextAfter: '' },
  },
};

type Actions = SetTokenAction | UpdateCommentAction | MeActions | PostsActions;
export const rootReducer: Reducer<RootState, Actions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return { ...state, commentText: action.text };
    case SET_TOKEN:
      return { ...state, token: action.token };
    case ME_REQUEST:
    case ME_REQUEST_SUCCESS:
    case ME_REQUEST_ERROR:
      return { ...state, me: meReducer(state.me, action) };
    case POSTS_REQUEST:
    case POSTS_REQUEST_SUCCESS:
    case POSTS_REQUEST_ERROR:
      return { ...state, posts: postsReducer(state.posts, action) };
    default:
      return state;
  }
};
