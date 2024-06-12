import React, { useEffect, useState } from "react";
import { CssBaseline } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import CalculateIcon from "@mui/icons-material/Calculate";
// import Calculator from "./assets/Icons/Calculator";
// AppBar,Toolbar,IconButton,Typography,Drawer,List,ListItem,ListItemText,Hidden,

import "./App.css";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import HeaderAndNavigationMenu from "./components/Menu/HeaderAndNavigationMenu";
import Carousel from "./components/Carousel/Carousel";
import { JobCategoryOptions } from "./Constant/MainPage/DropDown/JobCategory";
import {
  HeaderBanner,
  HeaderBannerCity,
  JobSeekingType,
} from "./Constant/MainPage/Text/index";
import AnimatedCounter from "./Constant/MainPage/Counter/AnimatedCounter";
function App() {
  //refs
  const textRefJobSeeking = React.useRef();
  const textRefHeaderBannerCity = React.useRef();
  const textRefHeaderBanner = React.useRef();
  const numberRefCounterResume = React.useRef();
  const numberRefCounterCity = React.useRef();
  //refs
  ////////////////////////states
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );
  const [isDesktop, setIsDesktop] = useState(true);
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(true);
  const [isSetColor, setIsColor] = useState();
  const [isShowProvince, setIsShowProvince] = useState(false);
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  ////////////////////////states
  //options
  const CityOptions = [
    { value: "1", label: "تهران" },
    { value: "2", label: "البرز" },
    { value: "3", label: "آذربایجان غربی" },
    { value: "4", label: "آذربایجان شرقی" },
  ];
  //options
  //Effects
  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 50);

    if (dimensions.width < 900) {
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
    }
    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, [isDesktop, dimensions]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      SetColor(
        textRefJobSeeking,
        textRefHeaderBannerCity,
        textRefHeaderBanner,
        numberRefCounterResume,
        numberRefCounterCity
      );
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  //Effects
  //Arrays

  const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
  const colorsText = [
    "#1679AB",
    "#1679AB",
    "#BC5A94",
    "#AF47D2",
    "#26355D",
    "#686D76",
    "#F1E5D1",
  ];

  //Arrays

  //region Func
  function SetColor(
    textRefJobSeeking,
    textRefHeaderBannerCity,
    textRefHeaderBanner,
    numberRefCounterResume,
    numberRefCounterCity
  ) {
    const color = colors[Math.floor(Math.random() * colors.length)];
    if (textRefJobSeeking.current) {
      textRefJobSeeking.current.style.color = color;
      textRefJobSeeking.current.style.transition = "3s";
    }
    if (textRefHeaderBannerCity.current) {
      textRefHeaderBannerCity.current.style.color = color;
      textRefHeaderBannerCity.current.style.transition = "3s";
    }
    if (textRefHeaderBanner.current) {
      textRefHeaderBanner.current.style.color = color;
      textRefHeaderBanner.current.style.transition = "3s";
    }
    const colorstext =
      colorsText[Math.floor(Math.random() * colorsText.length)];
    if (numberRefCounterResume.current) {
      numberRefCounterResume.current.style.color = colorstext;
      numberRefCounterResume.current.style.transition = "3s";
    }
    //console.log(numberRefCounterCity, "numberRefCounterCity");
    if (numberRefCounterCity.current) {
      numberRefCounterCity.current.style.color = colorstext;
      numberRefCounterCity.current.style.transition = "3s";
    }
  }

  function debounce(fn, ms) {
    let timer;
    return (_) => {
      clearTimeout(timer);
      timer = setTimeout((_) => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
  }

  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  const handleProvinceChange = (e) => {
    console.log(e, "handleProvince");
  };
  //end region Func

  return (
    <>
      <CssBaseline />
      <HeaderAndNavigationMenu />
      <div style={{ padding: "16px", textAlign: "right" }}>
        <h1>
          <div className="HeaderBanner">
            <span ref={textRefHeaderBanner}>{HeaderBanner}</span>
            <span className="color-blue">
              <AnimatedCounter
                targetNumber={50507}
                ref={numberRefCounterResume}
              />
            </span>
          </div>
          <div className="HeaderBanner">
            <span ref={textRefHeaderBannerCity}>{HeaderBannerCity}</span>
            <span className="color-blue padd-text">
              <AnimatedCounter targetNumber={505} ref={numberRefCounterCity} />
            </span>
          </div>
        </h1>
        {/* ImageTAG Goes Here */}
        <h3 className="margin-top-60 textholder" ref={textRefJobSeeking}>
          {JobSeekingType}
        </h3>
        <section className="row">
          <div
            className={`${
              isDesktop == true
                ? "d-flex flex-row-reverse"
                : "d-flex flex-column-reverse"
            }  `}
          >
            <div
              className={`${
                isDesktop
                  ? "col-4 col-lg-4 col-md-4 col-sm-4  "
                  : "col-12 col-lg-12 col-md-12 col-sm-12 margin-2"
              }`}
            >
              <Form.Control
                dir="rtl"
                type="search"
                placeholder="...عنوان شغلی یا شرکت"
                className={`margin-top-60 ${isDesktop ? "mt-4" : ""}`}
              />
            </div>
            <div
              className={`${
                isDesktop
                  ? "col-4 col-lg-4 col-md-4 col-sm-4 p-4 "
                  : "col-12 col-lg-12 col-md-12 col-sm-12  margin-2"
              }`}
            >
              <Select
                className={`${
                  isDesktop ? "p-4" : ""
                }basic-single margin-top-60 `}
                classNamePrefix="select"
                defaultValue={JobCategoryOptions[0]}
                isDisabled={isDisabled}
                isLoading={isLoading}
                isClearable={isClearable}
                isRtl={isRtl}
                isSearchable={isSearchable}
                name="JobCategory"
                options={JobCategoryOptions}
                placeholder={"گروه شغلی"}
              />
            </div>
            <div
              className={`${
                isDesktop
                  ? "col-4 col-lg-4 col-md-4 col-sm-4 p-4 "
                  : "col-12 col-lg-12 col-md-12 col-sm-12 margin-2"
              }`}
            >
              <Select
                className={`${
                  isDesktop ? "p-4" : ""
                }basic-single margin-top-60 `}
                classNamePrefix="select"
                defaultValue={CityOptions[0]}
                isDisabled={isDisabled}
                isLoading={isLoading}
                isClearable={isClearable}
                isRtl={isRtl}
                isSearchable={isSearchable}
                name="City"
                onChange={(e) => handleProvinceChange(e)}
                options={CityOptions}
                placeholder={"شهر"}
              />
            </div>
            {isShowProvince ? (
              <div
                className={`${
                  isDesktop
                    ? "col-4 col-lg-4 col-md-4 col-sm-4 p-4 "
                    : "col-12 col-lg-12 col-md-12 col-sm-12 margin-2"
                }`}
              >
                <Select
                  className={`${
                    isDesktop ? "p-4" : ""
                  }basic-single margin-top-60 `}
                  classNamePrefix="select"
                  defaultValue={CityOptions[0]}
                  isDisabled={isDisabled}
                  isLoading={isLoading}
                  isClearable={isClearable}
                  isRtl={isRtl}
                  isSearchable={isSearchable}
                  name="City"
                  options={CityOptions}
                  placeholder={"استان"}
                />
              </div>
            ) : null}
          </div>
        </section>
        <Carousel />
      </div>
    </>
  );
}

export default App;
