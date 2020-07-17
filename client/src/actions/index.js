import axios from "axios";
import { push } from "react-router-redux";

const AUTH_REQUEST = "AUTH_REQUEST";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAILURE = "AUTH_FAILURE";

const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const authenticate = (email, password) => (dispatch) => {
  dispatch({ type: AUTH_REQUEST });

  return axios
    .post("http://localhost:3001/api/user/login", {
      email,
      password,
    })
    .then((payload) => {
      dispatch({
        type: AUTH_SUCCESS,
        payload,
      });
    })

    .catch((err) => {
      console.log(err);
      dispatch({
        type: AUTH_FAILURE,
      });
    });
};

export const register = (name, email, password) => (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });

  return axios
    .post("http://localhost:3001/api/user/register", {
      name,
      email,
      password,
    })
    .then((payload) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: REGISTER_FAILURE,
      });
    });
};
