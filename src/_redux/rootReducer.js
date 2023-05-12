import { combineReducers } from "redux";
import { authReducer, roleReducer } from "./reducers";

const rootReducer = combineReducers({
  authReducer,
  roleReducer
});

export default rootReducer;