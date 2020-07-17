import axios from "axios";
import { SET_LOADING, POST_LOADED, POST_ERROR } from "./types";

// Load User
export const loadPost = () => async (dispatch) => {
  dispatch(SET_LOADING);
  try {
    const res = await axios.get("url");
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
