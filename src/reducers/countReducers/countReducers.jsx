export const countReducer = function (state = 0, action) {
  switch (action.type) {
    case "INCREMEANT":
      return state + 1;
      break;
    case "DECREMEANT":
      return state + 1;
      break;
    default:
      return state;
  }
};
