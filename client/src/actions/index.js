import axios from "axios";

import { AUTH_USER, AUTH_ERROR } from "./types";

/**
 * [signup action creator]
 * @param  {Object} formProps [form object from redux-form (contains email and password)]
 * @return {Object}           [description]
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

/**
 * [signout action creator]
 * @return {Object} [description]
 */
export const signout = () => {
  localStorage.removeItem("token");

  return {
    type: AUTH_USER,
    payload: ""
  };
};

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      "http://localhost:4222/signin",
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
      payload: "Invalid login credential"
    });
  }
};
