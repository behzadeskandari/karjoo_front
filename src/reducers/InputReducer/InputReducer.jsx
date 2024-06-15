import {
  UPDATE_INPUT,
  UPDATE_INPUTCOUNTRY,
  UPDATE_INPUTEMAIL,
} from "../../constant/UPDATE_INPUT";

export const inputState = {
  inputValue: null,
  EmailValue: null,
  COUNTRYValue: null,
};

const initialState = {
  inputValue: "",
  EmailValue: "",
  COUNTRYValue: "",
};

function InputReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_INPUT:
      return {
        ...state,
        inputValue: action.payload,
      };
    case UPDATE_INPUTEMAIL:
      return {
        ...state,
        EmailValue: action.payload,
      };

    case UPDATE_INPUTCOUNTRY:
      return {
        ...state,
        COUNTRYValue: action.payload,
      };
    default:
      return state;
  }
}

export default InputReducer;
