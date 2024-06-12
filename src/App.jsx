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
  CityOptions,
  ProvinceOptions,
} from "./Constant/MainPage/DropDown/CityCategory";
import {
  HeaderBanner,
  HeaderBannerCity,
  JobSeekingType,
} from "./Constant/MainPage/Text/index";
import AnimatedCounter from "./Constant/MainPage/Counter/AnimatedCounter";
import { difference } from "lodash/difference";
function App() {
  // region refs
  const textRefJobSeeking = React.useRef();
  const textRefHeaderBannerCity = React.useRef();
  const textRefHeaderBanner = React.useRef();
  const numberRefCounterResume = React.useRef();
  const numberRefCounterCity = React.useRef();
  //end region refs
  // region states
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 900);
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(true);
  const [isShowProvince, setIsShowProvince] = useState(false);
  const [province, setProvince] = useState(null);
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [cityOptions, setCityOptions] = useState([]);
  ////////////////////////states
  //options

  //options
  //region Effects
  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 50);

    // if (dimensions.width < 900) {
    //   setIsDesktop(false);
    // } else {
    //   setIsDesktop(true);
    // }
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
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  //Effects
  //region Arrays

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
    const color = getRandomColor(1);
    if (textRefJobSeeking.current) {
      textRefJobSeeking.current.style.color = color;
      textRefJobSeeking.current.style.transition = "4s";
    }
    if (textRefHeaderBannerCity.current) {
      textRefHeaderBannerCity.current.style.color = color;
      textRefHeaderBannerCity.current.style.transition = "4s";
    }
    if (textRefHeaderBanner.current) {
      textRefHeaderBanner.current.style.color = color;
      textRefHeaderBanner.current.style.transition = "4s";
    }
    const colorstext = getRandomColor(2);
    if (numberRefCounterResume.current) {
      numberRefCounterResume.current.style.color = colorstext;
      numberRefCounterResume.current.style.transition = "4s";
    }
    //console.log(numberRefCounterCity, "numberRefCounterCity");
    if (numberRefCounterCity.current) {
      numberRefCounterCity.current.style.color = colorstext;
      numberRefCounterCity.current.style.transition = "4s";
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

  function getRandomColor(id) {
    if (id == 1) {
      return colors[Math.floor(Math.random() * colors.length)];
    } else if (id == 2)
      return colorsText[Math.floor(Math.random() * colorsText.length)];
  }

  const handleProvinceChange = (data) => {
    // console.log(data, "handleProvince");
    // setProvince(data);
    // setSelectedProvince(data);
    // const cities = data ? ProvinceOptions[data.value] || [] : [];
    // setCityOptions(cities);
    // // if (data && data.value) {
    // //   setIsShowProvince(true);
    // // } else {
    // //   setIsShowProvince(false);
    // // }
    setSelectedProvince(data);
    const cities = data ? ProvinceOptions[data.value] || [] : [];
    setCityOptions(cities);
    if (data && data.value) {
      setIsShowProvince(true);
    } else {
      setIsShowProvince(false);
    }
  };
  const handleCityChange = (data) => {
    setSelectedCity(data);
    // Reset province selection when city changes
    setSelectedProvince(null);
    setCityOptions([]);
    setIsShowProvince(false);
  };
  //end region Func
  //region return
  return (
    <>
      <CssBaseline />
      <HeaderAndNavigationMenu />
      <div style={{ padding: "16px", textAlign: "right" }}>
        {/* header Text ANd Number */}
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
        {/* header Text ANd Number */}

        {/* MainDropDown */}
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
                tabIndex={1}
                dir="rtl"
                type="search"
                placeholder="عنوان شغلی یا شرکت..."
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
                tabIndex={2}
                className={`${
                  isDesktop ? "p-4" : ""
                }basic-single margin-top-60 `}
                classNamePrefix="select"
                //defaultValue={JobCategoryOptions[0]}
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
                tabIndex={3}
                className={`${
                  isDesktop ? "p-4" : ""
                }basic-single margin-top-60 `}
                classNamePrefix="select"
                //defaultValue={CityOptions[0]}
                isDisabled={isDisabled}
                isLoading={isLoading}
                isClearable={isClearable}
                isRtl={isRtl}
                isSearchable={isSearchable}
                name="City"
                onChange={(e) => handleProvinceChange(e)}
                options={CityOptions}
                getOptionLabel={(option) => option.label}
                getOptionValue={(option) => option.value}
                placeholder={"استان"}
              />
            </div>
          </div>
          <div className="col-md-12 d-flex justify-content-center">
            {isShowProvince && (
              <div
                className={`${
                  isDesktop
                    ? "col-4 col-lg-4 col-md-4 col-sm-4 p-4 "
                    : "col-12 col-lg-12 col-md-12 col-sm-12 margin-2"
                }`}
              >
                <Select
                  tabIndex={4}
                  className={`${
                    isDesktop ? "p-4" : ""
                  }basic-single margin-top-60 `}
                  classNamePrefix="select"
                  //defaultValue={CityOptions[0]}
                  isDisabled={isDisabled}
                  isLoading={isLoading}
                  isClearable={isClearable}
                  isRtl={isRtl}
                  isSearchable={isSearchable}
                  name="Province"
                  value={selectedProvince}
                  onChange={handleCityChange}
                  options={cityOptions}
                  getOptionLabel={(option) => option.label}
                  getOptionValue={(option) => option.value}
                  placeholder={"شهر"}
                />
              </div>
            )}
          </div>
        </section>
        <Carousel />
      </div>
    </>
  );
}

export default App;
