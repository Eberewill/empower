import {
  POST_LOADED,
  POSTS_LOADED,
  SET_LOADING,
  POST_ERROR,
} from "../actions/types";

const initialState = {
  loading: true,
  posts: {},
  post: {},
  error: {},
};
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case POST_LOADED:
      return {
        ...state,
        post: payload,
        loading: false,
      };

    case POSTS_LOADED:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    case POST_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}
