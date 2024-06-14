import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Chip,
  CssBaseline,
  Divider,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import CalculateIcon from "@mui/icons-material/Calculate";
// import Calculator from "./assets/Icons/Calculator";
// AppBar,Toolbar,IconButton,Typography,Drawer,List,ListItem,ListItemText,Hidden,

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Form } from "react-bootstrap";
import HeaderAndNavigationMenu from "./components/Menu/HeaderAndNavigationMenu";
import HomePAGE from "./Constant/MainPage/index";

function App() {
  //region return
  return (
    <>
      <CssBaseline enableColorSchem={false} />
      <HeaderAndNavigationMenu />
      <HomePAGE />
    </>
  );
}

export default App;
