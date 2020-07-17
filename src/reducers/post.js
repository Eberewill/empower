import {
  POST_LOADED,
  POSTS_LOADED,
  SET_LOADING,
  POST_ERROR,
} from "../actions/types";

const initialState = {
  loading: false,
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
        loading: false,
        post: payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case POSTS_LOADED:
      return {
        ...state,
        posts: payload,
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
