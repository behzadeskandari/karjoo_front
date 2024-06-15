import { combineReducers } from "redux";

import InputReducer from "./InputReducer/InputReducer";
import LoginReducer from "./LoginReducers/LoginReducers";

const rootReducer = combineReducers({
  Inputed: InputReducer,
  Login: LoginReducer,
});

export default rootReducer;
