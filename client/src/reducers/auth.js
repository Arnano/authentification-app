import { AUTH_USER, AUTH_ERROR } from "../actions/types";

const initialState = {
  authenticated: "",
  errorMessage: ""
};

/**
 * [authentification reducer]
 * @param  {Object} [state=initialState] [initial state]
 * @param  {Object} action               [action]
 * @return {Object}                      [return the action payload]
 */
export const auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: action.payload };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
