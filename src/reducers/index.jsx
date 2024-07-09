import { combineReducers } from "redux";

import InputReducer from "./InputReducer/InputReducer";
import LoginReducer from "./LoginReducers/LoginReducers";
import dbReducers from "./dbReducers/dbReducers";

const rootReducer = combineReducers({
  Inputed: InputReducer,
  Login: LoginReducer,
  Db: dbReducers,
});

export default rootReducer;
