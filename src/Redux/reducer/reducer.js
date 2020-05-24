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
} from "./actionTypes";

const initialState = {
  data: [],
  billItems: [],
  totalBill: 0,
  isBill: false,
  isloading: false,
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
        billItems: state.billItems.map((item) =>
          item.item === payload.item
            ? {
                ...item,
                quantity: payload.quantity,
                total: Number(item.price) * Number(payload.quantity),
              }
            : item
        ),
      };
    case CAL_TOTAL:
      return {
        ...state,
        totalBill: state.billItems.reduce((a, c) => (a += c.total), 0),
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
    default:
      return state;
  }
};
