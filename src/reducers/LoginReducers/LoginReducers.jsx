const initialState = {
  isAuthenticated: false,
  user: null,
};

function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_USER":
      return {
        ...state,
        inputValue: action.payload,
      };
    case "Login":
      return {
        ...state,
        EmailValue: action.payload,
      };

    case "LogOut":
      return {
        ...state,
        COUNTRYValue: action.payload,
      };

    case "Profile":
      return {
        ...state,
        ProfileValue: action.payload,
      };

    case "CheckUserToken":
      return {
        ...state,
        UserToken: action.payload,
      };
    default:
      return state;
  }
}

export default LoginReducer;

// // Example slice
// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     isAuthenticated: false,
//     user: null,
//   },
//   reducers: {
//     login: (state, action) => {
//       state.isAuthenticated = true;
//       state.user = action.payload;
//     },
//     logout: (state) => {
//       state.isAuthenticated = false;
//       state.user = null;
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;

// const store = configureStore({
//   reducer: {
//     auth: authSlice.reducer,
//   },
// });

// export default store;
