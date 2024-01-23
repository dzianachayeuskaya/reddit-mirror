import { ThunkAction } from 'redux-thunk';
import { RootState } from './reducer';
import { Action, ActionCreator } from 'redux';

export const SET_TOKEN = 'SET_TOKEN';
export type SetTokenAction = {
  type: typeof SET_TOKEN;
  token: string;
};
export const setToken: ActionCreator<SetTokenAction> = (token: string) => ({
  type: SET_TOKEN,
  token,
});

export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export type UpdateCommentAction = {
  type: typeof UPDATE_COMMENT;
  text: string;
};
export const updateComment: ActionCreator<UpdateCommentAction> = (
  text: string
) => ({
  type: UPDATE_COMMENT,
  text,
});

export const saveToken =
  (): ThunkAction<void, RootState, unknown, Action<string>> =>
  (dispatch, _getState) => {
    if (window.__token__) {
      dispatch(setToken(window.__token__));
    }
  };
