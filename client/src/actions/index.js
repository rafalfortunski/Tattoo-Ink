import axios from "axios";

const AUTH_REQUEST = "AUTH_REQUEST";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAILURE = "AUTH_FAILURE";

const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const authenticate = (email, password, history) => (dispatch) => {
  dispatch({ type: AUTH_REQUEST });

  return axios
    .post("http://localhost:3001/api/user/login", {
      email,
      password,
    })
    .then((payload) => {
      history.push("/");
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

export const register = (fullName, email, password, history) => (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });

  return axios
    .post("http://localhost:3001/api/user/register", {
      fullName,
      email,
      password,
    })
    .then((payload) => {
      history.push("/login");
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

export const logout = (history) => (dispatch) => {
  dispatch({ type: LOGOUT_REQUEST });

  return axios
    .post("http://localhost:3001/api/user/logout")
    .then((payload) => {
      sessionStorage.clear();
      dispatch({
        type: LOGOUT_SUCCESS,
        payload,
      });
    })
    .then(history.push("/"))
    .catch((err) => {
      console.log(err);
      dispatch({
        type: LOGOUT_FAILURE,
      });
    });
};
