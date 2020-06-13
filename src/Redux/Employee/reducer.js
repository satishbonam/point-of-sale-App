import {
  GET_DATA_SUCCESS,
  GET_DATA_REQUEST,
  GET_DATA_FAILURE,
  ADD_TO_BILL,
  CHANGE_QUANTITY,
  CAL_TOTAL,
  GENERATE_BILL_FAILURE,
  GENERATE_BILL_REQUEST,
  GENERATE_BILL_SUCCESS,
  BILL_STATUS,
  GET_ORDER_DATA_SUCCESS,
  GET_ORDER_DATA_REQUEST,
  GET_ORDER_DATA_FAILURE,
  GET_BILLS_FAILURE,
  GET_BILLS_REQUEST,
  GET_BILLS_SUCCESS,
} from "./actionTypes";

const initialState = {
  data: [],
  billItems: [],
  totalBill: 0,
  isBill: false,
  isloading: false,
  orderData: [],
  billData: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DATA_REQUEST:
      return {
        ...state,
        isloading: true,
      };

    case GET_DATA_SUCCESS:
      return {
        ...state,
        data: payload,
        isloading: false,
      };

    case GET_DATA_FAILURE:
      return {
        ...state,
        isloading: false,
      };
    case ADD_TO_BILL:
      return {
        ...state,

        billItems: [...state.billItems, payload],
      };
    case CHANGE_QUANTITY:
      return {
        ...state,
        billItems: state.billItems.map((item) => {
          if (item[1] === payload[0]) {
            item[5] = payload[1];
            item[6] = item[5] * item[2];
            item[3] -= item[5];
          }
          return item;
        }),
      };
    case CAL_TOTAL:
      return {
        ...state,
        totalBill: state.billItems.reduce((a, c) => (a += c[6]), 0),
      };
    case GENERATE_BILL_REQUEST:
      return {
        ...state,
        isloading: true,
      };

    case GENERATE_BILL_SUCCESS:
      return {
        ...state,
        billItems: [],
        totalBill: 0,
        isloading: false,
      };

    case GENERATE_BILL_FAILURE:
      return {
        ...state,
        isloading: false,
      };
    case BILL_STATUS:
      return {
        ...state,
        isBill: !state.isBill,
      };
    case GET_ORDER_DATA_REQUEST:
      return {
        ...state,
        isloading: true,
      };

    case GET_ORDER_DATA_SUCCESS:
      return {
        ...state,
        orderData: payload,
        isloading: false,
      };

    case GET_ORDER_DATA_FAILURE:
      return {
        ...state,
        isloading: false,
      };
    case GET_BILLS_REQUEST:
      return {
        ...state,
        isloading: true,
      };

    case GET_BILLS_SUCCESS:
      return {
        ...state,
        billData: payload,
        isloading: false,
      };

    case GET_BILLS_FAILURE:
      return {
        ...state,
        isloading: false,
      };
    default:
      return state;
  }
};
