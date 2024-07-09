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
      main: "#93c47d",
    },
    secondary: {
      main: "#fff",
    },
    success: {
      main: "#93c47d",
    },
    info: {
      main: "#bf9000",
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
      main: "#93c47d",
    },
    secondary: {
      main: "#d7d4d4",
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
