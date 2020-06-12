import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  CHECK_AUTH_FAILURE,
  CHECK_AUTH_REQUEST,
  CHECK_AUTH_SUCCESS,
} from "./actionTypes";

const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  role: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        isloading: true,
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isloading: false,
      };

    case LOGIN_USER_FAILURE:
      return {
        ...state,
        isloading: false,
      };
    case CHECK_AUTH_REQUEST:
      return {
        ...state,
        isloading: true,
      };

    case CHECK_AUTH_SUCCESS:
      return {
        ...state,
        isloading: false,
      };

    case CHECK_AUTH_FAILURE:
      return {
        ...state,
        isloading: false,
      };
    default:
      return state;
  }
};
