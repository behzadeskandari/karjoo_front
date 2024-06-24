import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import configureStore from "./store/store.js";
import { theme } from "./themes/theme.js";
// import { ThemeProvider } from "@mui/material/styles";
// import { CssBaseline } from "@mui/material";
import ThemeProviderWrapper from "./wrapper/ThemeProviderWrapper.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Provider store={configureStore}>
//     <ThemeProviderWrapper theme={theme}>
//       {/* <CssBaseline enableColorSchem={false} /> */}
//       <React.StrictMode>
//         <App />
//       </React.StrictMode>
//     </ThemeProviderWrapper>
//   </Provider>
// );
// index.js or App.js

(async () => {
  const store = await configureStore();
  ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <ThemeProviderWrapper theme={theme}>
        {/* <CssBaseline enableColorSchem={false} /> */}
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ThemeProviderWrapper>
    </Provider>
  );
})();
