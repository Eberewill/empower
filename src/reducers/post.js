import { POST_LOADED, SET_LOADING, POST_ERROR } from "../actions/types";

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

    default:
      return state;
  }
}
