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
  GET_ORDER_DATA_FAILURE,
  GET_ORDER_DATA_REQUEST,
  GET_ORDER_DATA_SUCCESS,
  GET_BILLS_FAILURE,
  GET_BILLS_REQUEST,
  GET_BILLS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
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
  console.log(payload);
  dispatch(getDataRequest());
  return axios({
    url: "http://127.0.0.1:5000/employee/get_stocks",
    method: "get",
    params: {
      per_page: payload.per_page,
      page: payload.page,
    },
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
    url: "http://127.0.0.1:5000/employee/generate_bill",
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
export const getOrderDataRequest = (payload) => ({
  type: GET_ORDER_DATA_REQUEST,
  payload,
});

export const getOrderDataSuccess = (payload) => ({
  type: GET_ORDER_DATA_SUCCESS,
  payload,
});

export const getOrderDataFailure = (payload) => ({
  type: GET_ORDER_DATA_FAILURE,
  payload,
});

export const getOrderData = (payload) => (dispatch) => {
  dispatch(getOrderDataRequest());
  return axios({
    url: "http://127.0.0.1:5000/employee/get_orders",
    method: "get",
    params: {
      per_page: payload.per_page,
      page: payload.page,
    },
  })
    .then((res) => dispatch(getOrderDataSuccess(res.data)))
    .catch((err) => dispatch(getOrderDataFailure(err)));
};
export const getBillsRequest = (payload) => ({
  type: GET_BILLS_REQUEST,
  payload,
});

export const getBillsSuccess = (payload) => ({
  type: GET_BILLS_SUCCESS,
  payload,
});

export const getBillsFailure = (payload) => ({
  type: GET_BILLS_FAILURE,
  payload,
});

export const getBills = (payload) => (dispatch) => {
  dispatch(getBillsRequest());
  return axios({
    url: "http://127.0.0.1:5000/bills",
    method: "get",
  })
    .then((res) => dispatch(getBillsSuccess(res.data)))
    .catch((err) => dispatch(getBillsFailure(err)));
};

export const getProductsRequest = (payload) => ({
  type: GET_PRODUCTS_REQUEST,
  payload,
});

export const getProductsSuccess = (payload) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload,
});

export const getProductsFailure = (payload) => ({
  type: GET_PRODUCTS_FAILURE,
  payload,
});

export const getProducts = (payload) => (dispatch) => {
  dispatch(getProductsRequest());
  return axios({
    url: "http://127.0.0.1:5000/employee/get_products",
    method: "get",
    params: {
      per_page: payload.per_page,
      page: payload.page,
    },
  })
    .then((res) => dispatch(getProductsSuccess(res.data)))
    .catch((err) => dispatch(getProductsFailure(err)));
};
