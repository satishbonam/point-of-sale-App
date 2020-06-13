import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  CHECK_AUTH_FAILURE,
  CHECK_AUTH_REQUEST,
  CHECK_AUTH_SUCCESS,
} from "./actionTypes";
import axios from "axios";

export const loginUserRequest = (payload) => ({
  type: LOGIN_USER_REQUEST,
  payload,
});

export const loginUserSuccess = (payload) => ({
  type: LOGIN_USER_SUCCESS,
  payload,
});

export const loginUserFailure = (payload) => ({
  type: LOGIN_USER_FAILURE,
  payload,
});

export const loginUser = (payload) => (dispatch) => {
  dispatch(loginUserRequest());
  return axios({
    url: "",
    method: "",
  })
    .then((res) => dispatch(loginUserSuccess(res)))
    .catch((err) => dispatch(loginUserFailure(err)));
};

export const checkAuthRequest = (payload) => ({
  type: CHECK_AUTH_REQUEST,
  payload,
});

export const checkAuthSuccess = (payload) => ({
  type: CHECK_AUTH_SUCCESS,
  payload,
});

export const checkAuthFailure = (payload) => ({
  type: CHECK_AUTH_FAILURE,
  payload,
});

export const checkAuth = (payload) => (dispatch) => {
  dispatch(checkAuthRequest());
  return axios({
    url: "",
    method: "",
  })
    .then((res) => dispatch(checkAuthSuccess(res)))
    .catch((err) => dispatch(checkAuthFailure(err)));
};