import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  ADD_TO_BILL,
  CHANGE_QUANTITY,
  CAL_TOTAL,
  GENERATE_BILL_FAILURE,
  GENERATE_BILL_REQUEST,
  GENERATE_BILL_SUCCESS,
  BILL_STATUS,
} from "./actionTypes";
import axios from "axios";

export const getDataRequest = (payload) => ({
  type: GET_DATA_REQUEST,
  payload,
});

export const getDataSuccess = (payload) => ({
  type: GET_DATA_SUCCESS,
  payload,
});

export const getDataFailure = (payload) => ({
  type: GET_DATA_FAILURE,
  payload,
});

export const getData = (payload) => (dispatch) => {
  dispatch(getDataRequest());
  return axios({
    url: "http://127.0.0.1:5000/home",
    method: "get",
  })
    .then((res) => dispatch(getDataSuccess(res.data)))
    .catch((err) => dispatch(getDataFailure(err)));
};
export const addToBill = (payload) => ({
  type: ADD_TO_BILL,
  payload,
});

export const changeQuantity = (payload) => ({
  type: CHANGE_QUANTITY,
  payload,
});
export const calTotalBill = (payload) => ({
  type: CAL_TOTAL,
  payload,
});
export const generateBillRequest = (payload) => ({
  type: GENERATE_BILL_REQUEST,
  payload,
});

export const generateBillSuccess = (payload) => ({
  type: GENERATE_BILL_SUCCESS,
  payload,
});

export const generateBillFailure = (payload) => ({
  type: GENERATE_BILL_FAILURE,
  payload,
});

export const generateBill = (payload) => (dispatch) => {
  dispatch(generateBillRequest());
  return axios({
    url: "http://127.0.0.1:5000/generatebill",
    method: "post",
    data: payload,
  })
    .then((res) => dispatch(generateBillSuccess(res)))
    .catch((err) => dispatch(generateBillFailure(err)));
};

export const changeBillStatus = (payload) => ({
  type: BILL_STATUS,
  payload,
});
