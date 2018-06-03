import axios from "axios";

import { AUTH_USER, AUTH_ERROR } from "./types";

/**
 * [signup action creator]
 * @param  {Object} formProps [form object from redux-form (contains email and password)]
 * @return {[type]}           [promise]
 */
export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      "http://localhost:4222/signup",
      formProps
    );
    dispatch({
      type: AUTH_USER,
      payload: response.data.token
    });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: "Email already in use"
    });
  }
};
