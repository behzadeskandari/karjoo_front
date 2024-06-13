import React, { useEffect, useState } from "react";
import { Box, Button, CssBaseline, Toolbar, Typography } from "@mui/material";
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
import { TechnicalOptions } from "./Constant/MainPage/DropDown/TechnicalCategory";
import {
  HeaderBanner,
  HeaderBannerCity,
  JobSeekingType,
} from "./Constant/MainPage/Text/index";
import AnimatedCounter from "./Constant/MainPage/Counter/AnimatedCounter";
import { getRandomColor } from "./components/RandomColor/index";
import AdvertismentCard from "./components/Card/Card";
function App() {
  // region refs
  const textRefJobSeekingRef = React.useRef();
  const textRefHeaderBannerCityRef = React.useRef();
  const textRefHeaderBannerRef = React.useRef();
  const numberRefCounterResumeRef = React.useRef();
  const numberRefCounterCityRef = React.useRef();
  const SearchBoxBorderRef = React.useRef();

  //end region refs
  // region states
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );
  const [isDesktop, setIsDesktop] = useState(false);

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

    if (dimensions.width < 992) {
      setIsDesktop(false);
      setIsClearable(true);
    } else {
      setIsDesktop(true);
      //setIsClearable(false);
    }
    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, [isDesktop, dimensions]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      SetColor(
        textRefJobSeekingRef,
        textRefHeaderBannerCityRef,
        textRefHeaderBannerRef,
        numberRefCounterResumeRef,
        numberRefCounterCityRef,
        SearchBoxBorderRef
      );
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  //Effects
  //region Arrays

  //Arrays

  //region Func
  function SetColor(
    textRefJobSeeking,
    textRefHeaderBannerCity,
    textRefHeaderBanner,
    numberRefCounterResume,
    numberRefCounterCity,
    SearchBoxBorderRef
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
    const colorsBorder = getRandomColor(3);
    if (SearchBoxBorderRef.current) {
      SearchBoxBorderRef.current.style.border = `2px solid ${colorsBorder}`;
      SearchBoxBorderRef.current.style.transition = "4s";
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
    console.log(data, "datadatadata");
    setSelectedCity(data);
    // Reset province selection when city changes
    if (data == null) {
      setSelectedProvince(null);
    } else if (data && data.value) {
      setSelectedProvince(data);
    }
    //
    //setCityOptions([]);
    //setIsShowProvince(false);
  };
  //end region Func
  //region return
  return (
    <>
      <CssBaseline enableColorSchem={false} />
      <HeaderAndNavigationMenu />
      <Box component="main" sx={{ p: 1, backgroundColor: "#fcfcfc" }}>
        <Box className="container">
          <div
            style={{ paddingTop: "16px", textAlign: "right", height: "auto" }}
          >
            {/* header Text ANd Number */}
            <h2>
              <div className="HeaderBanner">
                <span ref={textRefHeaderBannerRef}>{HeaderBanner}</span>
                <span className="color-blue">
                  <AnimatedCounter
                    targetNumber={50507}
                    ref={numberRefCounterResumeRef}
                  />
                </span>
              </div>
              <div className="HeaderBanner">
                <span ref={textRefHeaderBannerCityRef}>{HeaderBannerCity}</span>
                <span className="color-blue padd-text">
                  <AnimatedCounter
                    targetNumber={505}
                    ref={numberRefCounterCityRef}
                  />
                </span>
              </div>
            </h2>
            {/* ImageTAG Goes Here */}
            <h3 className="margin-top-60 textholder" ref={textRefJobSeekingRef}>
              {JobSeekingType}
            </h3>
            {/* header Text ANd Number */}

            {/* MainDropDown */}
            <Box className="row searchGrid " ref={SearchBoxBorderRef}>
              <div
                className={`${
                  isDesktop == true
                    ? "d-flex flex-row-reverse"
                    : "d-flex flex-column height-20"
                }  `}
              >
                <div
                  className={`${
                    isDesktop
                      ? "col-3 col-lg-3 col-md-3 col-sm-3 p-4 "
                      : "col-12 col-lg-12 col-md-12 col-sm-12 margin-2"
                  }`}
                >
                  <Select
                    styles={{
                      control: (provided, state) => ({
                        ...provided,
                        backgroundColor: state.isFocused ? "#f0f0f0" : "#fff",
                        borderColor: state.isFocused ? "#3f51b5" : "#ccc",
                        boxShadow: state.isFocused
                          ? "0 0 0 1px #3f51b5"
                          : "none",
                        "&:hover": {
                          borderColor: state.isFocused ? "#3f51b5" : "#888",
                        },
                      }),
                      menu: (provided) => ({
                        ...provided,
                        zIndex: 9999,
                      }),
                      option: (provided, state) => ({
                        ...provided,
                        backgroundColor: state.isSelected
                          ? "#3f51b5"
                          : state.isFocused
                          ? "#f0f0f0"
                          : "#fff",
                        color: state.isSelected ? "#fff" : "#333",
                        "&:active": {
                          backgroundColor: state.isSelected
                            ? "#3f51b5"
                            : "#f0f0f0",
                        },
                      }),
                      placeholder: (provided) => ({
                        ...provided,
                        color: "#888",
                        fontStyle: "italic",
                        fontSize: ".8em",
                      }),
                      singleValue: (provided) => ({
                        ...provided,
                        color: "#333",
                      }),
                      multiValue: (provided) => ({
                        ...provided,
                        backgroundColor: "#e0e0e0",
                      }),
                      multiValueLabel: (provided) => ({
                        ...provided,
                        color: "#333",
                      }),
                      multiValueRemove: (provided) => ({
                        ...provided,
                        color: "#888",
                        "&:hover": {
                          backgroundColor: "#d32f2f",
                          color: "#fff",
                        },
                      }),
                    }}
                    loadingMessage={() => "در حال لود"}
                    noOptionsMessage={() => "موردی انتخاب نشده است"}
                    tabIndex={2}
                    className={`${
                      isDesktop ? "p-4" : ""
                    }basic-single margin-top-60 `}
                    classNamePrefix="select"
                    //defaultValue={JobCategoryOptions[0]}
                    isDisabled={isDisabled}
                    isLoading={isLoading}
                    isClearable={true}
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
                      ? "col-3 col-lg-3 col-md-3 col-sm-3 p-4 "
                      : "col-12 col-lg-12 col-md-12 col-sm-12 margin-2"
                  }`}
                >
                  <Select
                    styles={{
                      control: (provided, state) => ({
                        ...provided,
                        backgroundColor: state.isFocused ? "#f0f0f0" : "#fff",
                        borderColor: state.isFocused ? "#3f51b5" : "#ccc",
                        boxShadow: state.isFocused
                          ? "0 0 0 1px #3f51b5"
                          : "none",
                        "&:hover": {
                          borderColor: state.isFocused ? "#3f51b5" : "#888",
                        },
                      }),
                      menu: (provided) => ({
                        ...provided,
                        zIndex: 9999,
                      }),
                      option: (provided, state) => ({
                        ...provided,
                        backgroundColor: state.isSelected
                          ? "#3f51b5"
                          : state.isFocused
                          ? "#f0f0f0"
                          : "#fff",
                        color: state.isSelected ? "#fff" : "#333",
                        "&:active": {
                          backgroundColor: state.isSelected
                            ? "#3f51b5"
                            : "#f0f0f0",
                        },
                      }),
                      placeholder: (provided) => ({
                        ...provided,
                        color: "#888",
                        fontStyle: "italic",
                        fontSize: ".8em",
                      }),
                      singleValue: (provided) => ({
                        ...provided,
                        color: "#333",
                      }),
                      multiValue: (provided) => ({
                        ...provided,
                        backgroundColor: "#e0e0e0",
                      }),
                      multiValueLabel: (provided) => ({
                        ...provided,
                        color: "#333",
                      }),
                      multiValueRemove: (provided) => ({
                        ...provided,
                        color: "#888",
                        "&:hover": {
                          backgroundColor: "#d32f2f",
                          color: "#fff",
                        },
                      }),
                    }}
                    loadingMessage={() => "در حال لود"}
                    noOptionsMessage={() => "موردی انتخاب نشده است"}
                    tabIndex={4}
                    className={`${
                      isDesktop ? "p-4" : ""
                    }basic-single margin-top-60 `}
                    classNamePrefix="select"
                    //defaultValue={CityOptions[0]}
                    isDisabled={isDisabled}
                    isLoading={isLoading}
                    isClearable={true}
                    isRtl={isRtl}
                    isSearchable={isSearchable}
                    name="Province"
                    options={TechnicalOptions}
                    getOptionLabel={(option) => option.label}
                    getOptionValue={(option) => option.value}
                    placeholder={"ارشدیت"}
                  />
                </div>
                <div
                  className={`${
                    isDesktop
                      ? "col-3 col-lg-3 col-md-3 col-sm-3 p-4 "
                      : "col-12 col-lg-12 col-md-12 col-sm-12 margin-2"
                  }`}
                >
                  <Select
                    styles={{
                      control: (provided, state) => ({
                        ...provided,
                        backgroundColor: state.isFocused ? "#f0f0f0" : "#fff",
                        borderColor: state.isFocused ? "#3f51b5" : "#ccc",
                        boxShadow: state.isFocused
                          ? "0 0 0 1px #3f51b5"
                          : "none",
                        "&:hover": {
                          borderColor: state.isFocused ? "#3f51b5" : "#888",
                        },
                      }),
                      menu: (provided) => ({
                        ...provided,
                        zIndex: 9999,
                      }),
                      option: (provided, state) => ({
                        ...provided,
                        backgroundColor: state.isSelected
                          ? "#3f51b5"
                          : state.isFocused
                          ? "#f0f0f0"
                          : "#fff",
                        color: state.isSelected ? "#fff" : "#333",
                        "&:active": {
                          backgroundColor: state.isSelected
                            ? "#3f51b5"
                            : "#f0f0f0",
                        },
                      }),
                      placeholder: (provided) => ({
                        ...provided,
                        color: "#888",
                        fontStyle: "italic",
                        fontSize: ".8em",
                      }),
                      singleValue: (provided) => ({
                        ...provided,
                        color: "#333",
                      }),
                      multiValue: (provided) => ({
                        ...provided,
                        backgroundColor: "#e0e0e0",
                      }),
                      multiValueLabel: (provided) => ({
                        ...provided,
                        color: "#333",
                      }),
                      multiValueRemove: (provided) => ({
                        ...provided,
                        color: "#888",
                        "&:hover": {
                          backgroundColor: "#d32f2f",
                          color: "#fff",
                        },
                      }),
                    }}
                    loadingMessage={() => "در حال لود"}
                    noOptionsMessage={() => "موردی انتخاب نشده است"}
                    tabIndex={3}
                    className={`${
                      isDesktop ? "p-4" : ""
                    }basic-single margin-top-60 `}
                    classNamePrefix="select"
                    //defaultValue={CityOptions[0]}
                    isDisabled={isDisabled}
                    isLoading={isLoading}
                    isClearable={true}
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
                <div
                  className={`${
                    isDesktop
                      ? "col-3 col-lg-3 col-md-3 col-sm-3 p-4  "
                      : "col-12 col-lg-12 col-md-12 col-sm-12 margin-2"
                  }`}
                >
                  <Select
                    styles={{
                      control: (provided, state) => ({
                        ...provided,
                        backgroundColor: state.isFocused ? "#f0f0f0" : "#fff",
                        borderColor: state.isFocused ? "#3f51b5" : "#ccc",
                        boxShadow: state.isFocused
                          ? "0 0 0 1px #3f51b5"
                          : "none",
                        "&:hover": {
                          borderColor: state.isFocused ? "#3f51b5" : "#888",
                        },
                      }),
                      menu: (provided) => ({
                        ...provided,
                        zIndex: 9999,
                      }),
                      option: (provided, state) => ({
                        ...provided,
                        backgroundColor: state.isSelected
                          ? "#3f51b5"
                          : state.isFocused
                          ? "#f0f0f0"
                          : "#fff",
                        color: state.isSelected ? "#fff" : "#333",
                        "&:active": {
                          backgroundColor: state.isSelected
                            ? "#3f51b5"
                            : "#f0f0f0",
                        },
                      }),
                      placeholder: (provided) => ({
                        ...provided,
                        color: "#888",
                        fontStyle: "italic",
                        fontSize: ".8em",
                      }),
                      singleValue: (provided) => ({
                        ...provided,
                        color: "#333",
                      }),
                      multiValue: (provided) => ({
                        ...provided,
                        backgroundColor: "#e0e0e0",
                      }),
                      multiValueLabel: (provided) => ({
                        ...provided,
                        color: "#333",
                      }),
                      multiValueRemove: (provided) => ({
                        ...provided,
                        color: "#888",
                        "&:hover": {
                          backgroundColor: "#d32f2f",
                          color: "#fff",
                        },
                      }),
                    }}
                    loadingMessage={() => "در حال لود"}
                    noOptionsMessage={() => "موردی انتخاب نشده است"}
                    tabIndex={4}
                    className={`${
                      isDesktop ? "p-4" : ""
                    }basic-single margin-top-60 `}
                    classNamePrefix="select"
                    //defaultValue={CityOptions[0]}
                    isDisabled={isDisabled}
                    isLoading={isLoading}
                    isClearable={true}
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
              </div>
            </Box>
            <Box className="row boxShadow  grid-container  py-4 m-t-5">
              <AdvertismentCard />
              <AdvertismentCard />
              <AdvertismentCard />
              <AdvertismentCard />
              <AdvertismentCard />
              <AdvertismentCard />
              <AdvertismentCard />
              <AdvertismentCard />
            </Box>
            <Box className="row Extra_add mt-4 mb-4">
              <Button className="btnExtraAdd">مشاهده آگهی بیشتر</Button>
            </Box>
            <Carousel />

            <div className="row py-5">
              <div className="col-3 col-md-3">
                <Typography>test</Typography>
              </div>
              <div className="col-3 col-md-3">
                <Typography>test</Typography>
              </div>
              <div className="col-3 col-md-3">
                <Typography>te</Typography>
              </div>
              <div className="col-3 col-md-3">
                <Typography>te</Typography>
                <Typography>test</Typography>
              </div>
            </div>
          </div>
        </Box>
      </Box>{" "}
      <Toolbar />
    </>
  );
}

export default App;
