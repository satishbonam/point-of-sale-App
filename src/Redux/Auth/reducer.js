import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  CHECK_AUTH_FAILURE,
  CHECK_AUTH_REQUEST,
  CHECK_AUTH_SUCCESS,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_FAILURE,
} from "./actionTypes";
import { loadData } from "./localStorage";

const initialState = loadData("auth") || {
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
        isAuth: true,
        token: payload.auth_token,
        role: payload.role,
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
        isAuth: payload.auth_token == "valid" ? true : false,
        isloading: false,
      };

    case CHECK_AUTH_FAILURE:
      return {
        ...state,
        isloading: false,
      };
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
        token: "",
        role: "",
        isloading: false,
      };
    // case LOGOUT_REQUEST:
    //   return {
    //     ...state,
    //     isloading: true,
    //   };

    // case LOGOUT_SUCCESS:
    //   return {
    //     ...state,
    //     isAuth: false,
    //     token: "",
    //     isloading: false,
    //   };

    // case LOGOUT_FAILURE:
    //   return {
    //     ...state,
    //     isloading: false,
    //   };
    default:
      return state;
  }
};
