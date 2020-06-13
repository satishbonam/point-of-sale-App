import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import employee from "./Employee/reducer";
import auth from "./Auth/reducer";
import { saveData } from "./Auth/localStorage";
import throttle from "lodash/throttle";

const rootReducer = combineReducers({ employee, auth });

let composeEnhancers = compose;

if (process.env.NODE_ENV !== "production") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
}

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);

store.subscribe(throttle(() => saveData("auth", store.getState().auth), 1000));

export default store;
