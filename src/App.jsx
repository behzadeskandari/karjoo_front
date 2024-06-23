import React, { useEffect, useState } from "react";

// import MenuIcon from "@mui/icons-material/Menu";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import CalculateIcon from "@mui/icons-material/Calculate";
// import Calculator from "./assets/Icons/Calculator";
// AppBar,Toolbar,IconButton,Typography,Drawer,List,ListItem,ListItemText,Hidden,
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages/MainPage/index";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ContactUsPage from "./Pages/ContactUsPage/ContactUsPage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Form } from "react-bootstrap";
import HeaderAndNavigationMenu from "./components/Menu/HeaderAndNavigationMenu";
import NoutFound from "./Pages/NotFound/NoutFound";

function App() {
  //region return
  return (
    <>
      {/* <CssBaseline enableColorSchem={false} />*/}

      <Router>
        <HeaderAndNavigationMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/*" element={<NoutFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
