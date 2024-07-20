import { Box } from "@mui/material";
import { createTheme, styled } from "@mui/material/styles";

// const theme = createTheme({
//   palette: {
//     mode: "light",
//     primary: {
//       main: "#1976d2",
//     },
//     secondary: {
//       main: "#dc004e",
//     },
//   },

//   typography: {
//     allVariants: {
//       fontFamily: "IRANSans",
//     },
//     fontFamily: ["IRANSans"].join(","),
//     button: {
//       fontFamily: "IRANSans",
//     },
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {},
//       variants: [
//         {
//           props: { variant: "contained" },
//           style: {
//             fontFamily: "IRANSans",
//           },
//         },
//       ],
//     },
//     MuiListItemText: {
//       variants: [
//         {
//           style: {
//             marginLeft: "10px",
//             fontFamily: "IRANSans",
//           },
//         },
//       ],
//     },
//   },
// });
// // Dark theme
// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//     primary: {
//       main: "#90caf9",
//     },
//     secondary: {
//       main: "#f48fb1",
//     },
//   },
//   typography: {
//     allVariants: {
//       fontFamily: "IRANSans",
//     },
//     fontFamily: ["IRANSans"].join(","),
//     button: {
//       fontFamily: "IRANSans",
//     },
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {},
//       variants: [
//         {
//           props: { variant: "contained" },
//           style: {
//             fontFamily: "IRANSans",
//           },
//         },
//       ],
//     },
//     MuiListItemText: {
//       variants: [
//         {
//           style: {
//             marginLeft: "10px",
//             fontFamily: "IRANSans",
//           },
//         },
//       ],
//     },
//   },
// });

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#ffffff",
    },
    text: {
      primary: "#000000",
    },
    primary: {
      main: "#F1F1F1",
      icon: "orange",
    },
    secondary: {
      main: "#000",
      grey: "#DAE0EA",
      lgrey: "#B3BBCA",
      test: "box-shadow: rgb(216 216 216 / 24%) 0px 3px 8px; border-radius: 7px;",
    },
    common: {
      main: "#000",
      grey: "#DAE0EA",
      lgrey: "#B3BBCA",
      icon: "#ff9933",
    },
    success: {
      main: "#F1F1F1",
    },
    info: {
      main: "#bf9000",
      orange: "#EE6C4D",
    },
  },
  components: {},
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#b45f06",
    },
    text: {
      primary: "#ffffff",
      secondary: "#000",
      disabled: "#efefef",
    },
    primary: {
      main: "#EE6C4D",
      icon: "orange",
    },
    secondary: {
      main: "#d7d4d4",
      grey: "#293241",
      lgrey: "#4F5D75",
      test: "box-shadow: rgb(216 216 216 / 24%) 0px 3px 8px; border-radius: 7px;",
    },
    common: {
      main: "#000",
      grey: "#DAE0EA",
      lgrey: "#B3BBCA",
      icon: "#ff9933",
    },
    success: {
      main: "#4a4e57",
    },
    info: {
      main: "#fff",
    },
  },
});

export { theme, darkTheme };
