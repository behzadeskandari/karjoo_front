import React, { Suspense, lazy, useEffect, useState } from "react";

// import MenuIcon from "@mui/icons-material/Menu";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import CalculateIcon from "@mui/icons-material/Calculate";
// import Calculator from "./assets/Icons/Calculator";
// AppBar,Toolbar,IconButton,Typography,Drawer,List,ListItem,ListItemText,Hidden,
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const HomePage = lazy(() => import("./Pages/MainPage/index"));
const LoginPage = lazy(() => import("./Pages/LoginPage/LoginPage"));
const SignUpPage = lazy(() => import("./Pages/SignUpPage/SignUpPage"));
const AboutPage = lazy(() => import("./Pages/AboutPage/AboutPage"));
const HeaderAndNavigationMenu = lazy(() =>
  import("./components/Menu/HeaderAndNavigationMenu")
);
const NoutFound = lazy(() => import("./Pages/NotFound/NoutFound"));
const MBTIResult = lazy(() => import("./Pages/MBTI/MBTIResult"));
const ProfileEntryForm = lazy(() =>
  import("./Pages/ProfilePage/ProfileEnteryForm")
);
const MBTITest = lazy(() => import("./Pages/MBTI/MBTITest"));
const EmployeerLandingPage = lazy(() =>
  import("./Pages/EmployeerLandingPage/EmployeerLandingPage")
);
const StepIndicator = lazy(() => import("./components/StepIndicator"));
const JobsPage = lazy(() => import("./Pages/JobsPage"));
const AdvertismentAddPage = lazy(() =>
  import("./Pages/AdvertismentAddPage/AdvertismentAddPage")
);
const ContactUsPage = lazy(() => import("./Pages/ContactUsPage/ContactUsPage"));

// import HomePage from "./Pages/MainPage/index";
// import LoginPage from "./Pages/LoginPage/LoginPage";
// import SignUpPage from "./Pages/SignUpPage/SignUpPage";
// import AboutPage from "./Pages/AboutPage/AboutPage";
// import ContactUsPage from "./Pages/ContactUsPage/ContactUsPage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "./components/Loader/Loader";
import ErrorBoundary from "./components/Error/ErrorBoundary";
import CustomSlider from "./components/Slider/CustomSlider";
// import { Container, Form } from "react-bootstrap";
// import HeaderAndNavigationMenu from "./components/Menu/HeaderAndNavigationMenu";
// import NoutFound from "./Pages/NotFound/NoutFound";
// import MBTIResult from "./Pages/MBTI/MBTIResult";
// import MBTITest from "./Pages/MBTI/MBTITest";
// import ProfileEntryForm from "./Pages/ProfilePage/ProfileEnteryForm";
// import EmployeerLandingPage from "./Pages/EmployeerLandingPage/EmployeerLandingPage";
// import StepIndicator from "./components/StepIndicator";
// import JobsPage from "./Pages/JobsPage";
// import AdvertismentAddPage from "./Pages/AdvertismentAddPage/AdvertismentAddPage";

import img1 from "./assets/images/img/1.jpg";
import img2 from "./assets/images/img/2.jpg";
import img3 from "./assets/images/img/3.jpg";
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
      <Suspense fallback={<Loader />}>
        <ErrorBoundary>
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
              <Route path="/profilePage" element={<ProfileEntryForm />} />
              <Route path="/employerPage" element={<EmployeerLandingPage />} />
              {/* <Route path="/step" element={<StepIndicator steps={steps} />} /> */}
              <Route
                path="/step"
                element={<CustomSlider images={[img1, img2, img3]} />}
              />
              <Route path="/JobPage" element={<JobsPage />} />
              <Route
                path="/AdvertismentAdd"
                element={<AdvertismentAddPage />}
              />
              <Route path="/*" element={<NoutFound />} />
            </Routes>
          </Router>
        </ErrorBoundary>
      </Suspense>
    </>
  );
}

export default App;
