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
import MBTIResult from "./Pages/MBTI/MBTIResult";
import MBTITest from "./Pages/MBTI/MBTITest";
import ProfileEntryForm from "./Pages/ProfilePage/ProfileEnteryForm";
import EmployeerLandingPage from "./Pages/EmployeerLandingPage/EmployeerLandingPage";
import StepIndicator from "./components/StepIndicator";

function App() {
  //region return
  const steps = [
    { id: 1, value: "step1" },
    { id: 2, value: "step2" },
    { id: 3, value: "step3" },
    { id: 4, value: "step4" },
  ];
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
          <Route path="/MBTITest" element={<MBTITest />} />
          <Route path="/MBTIResult" element={<MBTIResult />} />

          {/* the Test Route That Has TO Move To After Login */}
          <Route path="/profile" element={<ProfileEntryForm />} />
          <Route path="/employer" element={<EmployeerLandingPage />} />
          <Route path="/step" element={<StepIndicator steps={steps} />} />
          <Route path="/*" element={<NoutFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
