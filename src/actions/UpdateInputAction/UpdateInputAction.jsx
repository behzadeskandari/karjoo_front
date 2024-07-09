import {
  UPDATE_INPUT,
  UPDATE_INPUTEMAIL,
  UPDATE_INPUTCOUNTRY,
} from "../../constants/UPDATE_INPUT";
import { Action } from "redux";

function UpdateInput(value) {
  return {
    type: UPDATE_INPUT,
    payload: value,
  };
}

export function UpdateInputEmail(value) {
  return {
    type: UPDATE_INPUTEMAIL,
    payload: value,
  };
}

export function UpdateInputCountry(value) {
  return {
    type: UPDATE_INPUTCOUNTRY,
    payload: value,
  };
}

export default UpdateInput;
