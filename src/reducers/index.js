import { combineReducers } from "redux";
import exchangeReducer from "./exchange-rate";

const rootReducer = combineReducers({
  rates: exchangeReducer
});

export default rootReducer;
