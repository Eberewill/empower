import axios from "axios";
import { SET_LOADING, POST_LOADED, POST_ERROR } from "./types";

// Load ALL POST
export const loadPosts = () => async (dispatch) => {
  dispatch(SET_LOADING);
  try {
    const res = await axios.get("url");
    dispatch({
      type: POSTS_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
    });
  }
};

// Load SinglePost By Slog
export const loadPost = (slog) => async (dispatch) => {
  dispatch(SET_LOADING);
  try {
    const res = await axios.get(`url/${slog}`);
    dispatch({
      type: POST_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
    });
  }
};
