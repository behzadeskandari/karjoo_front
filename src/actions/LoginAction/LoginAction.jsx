// login: (state, action) => {
//     //       state.isAuthenticated = true;
//     //       state.user = action.payload;
//     //     },
//     //     logout: (state) => {
//     //       state.isAuthenticated = false;
//     //       state.user = null;
//     //     },

function login(value) {
  return {
    type: UPDATE_INPUT,
    payload: value,
  };
}

function logout(value) {
  return {
    type: UPDATE_INPUTEMAIL,
    payload: value,
  };
}

export default { logout, login };
