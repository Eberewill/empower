import axios from "axios";
import { SET_LOADING, POST_LOADED, POST_ERROR, POSTS_LOADED } from "./types";

const api = "https://epower.ng/wp-json/wp/v2/posts";

//Get Posts

export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("https://epower.ng/wp-json/wp/v2/posts");

    dispatch({
      type: POSTS_LOADED,
      payload: res.data,
    });
  } catch (err) {
    alert(err.message);
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Load SinglePost By Slog
export const loadPost = (slug) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://epower.ng/wp-json/wp/v2/posts?slug=/${slug}`
    );
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
