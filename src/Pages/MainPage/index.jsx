import React, { useEffect, useLayoutEffect, useState } from "react";
import { getRandomColor } from "../../components/RandomColor/index";

import Select from "react-select";
import Carousel from "../../components/Carousel/Carousel";
import { JobCategoryOptions } from "../../Pages/MainPage/DropDown/JobCategory";
import {
  CityOptions,
  ProvinceOptions,
} from "../../Pages/MainPage/DropDown/CityCategory";
import { TechnicalOptions } from "../../Pages/MainPage/DropDown/TechnicalCategory";
import {
  HeaderBanner,
  HeaderBannerCity,
  JobSeekingType,
} from "../../Pages/MainPage/Text/index";
import AnimatedCounter from "../../Pages/MainPage/Counter/AnimatedCounter";
import AdvertismentCard from "../../components/Card/Card";
import logo from "../../assets/images/1.jpg";
import { Box, Button } from "@mui/material";
import Footer from "./Footer/Footer";
import Loader from "../../components/Loader/Loader";
import QuestionAnswerWhyUs from "./Footer/QuestionAnswerWhyUs";
import { useThemeToggle } from "../../wrapper/ThemeProviderWrapper";
// import Footer from "./Constant/MainPage/Footer/Footer";
export default function HomePAGE() {
  const toggleTheme = useThemeToggle();

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
  const [isWidthDetected, setIsWidthDetected] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [cityOptions, setCityOptions] = useState([]);
  ////////////////////////states
  //options

  //options
  //region Effects
  useLayoutEffect(() => {
    // const handleResize = () => {
    //   setBrowserWidth(window.innerWidth);
    // };

    // // Set initial width
    // handleResize();
    // setIsWidthDetected(true);

    // // Add event listener to update width on resize
    // window.addEventListener('resize', handleResize);

    // // Clean up the event listener on component unmount
    // return () => {
    //   window.removeEventListener('resize', handleResize);
    // };
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 50);
    setIsWidthDetected(true);
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
  }, []);

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

  const clickEvent = () => {
    alert("Button clicked!");
  };
  //region Array
  const items = [
    {
      image: logo,
      title: <span>شركت خدمات انفورماتیك</span>,
      description: (
        <span className="CardRating">
          <span className="mr-2"> 4.2</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.09121 15.8867L8 13.8116L11.9088 15.8867C12.6026 16.2552 13.431 15.6632 13.2964 14.8688L12.5488 10.474L15.7099 7.36296C16.2781 6.80417 15.9641 5.82857 15.1805 5.7138L10.8112 5.07044L8.85832 1.07134C8.50841 0.358522 7.49457 0.349467 7.14168 1.07134L5.18879 5.07044L0.819458 5.7138C0.0359018 5.82857 -0.278117 6.80417 0.290107 7.36296L3.45123 10.474L2.70357 14.8688C2.56899 15.6632 3.39738 16.2582 4.09121 15.8867Z"
              fill="#5C6573"
            />
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="16"
              height="16"
            >
              <path
                d="M4.09121 15.8867L8 13.8116L11.9088 15.8867C12.6026 16.2552 13.431 15.6632 13.2964 14.8688L12.5488 10.474L15.7099 7.36296C16.2781 6.80417 15.9641 5.82857 15.1805 5.7138L10.8112 5.07044L8.85832 1.07134C8.50841 0.358522 7.49457 0.349467 7.14168 1.07134L5.18879 5.07044L0.819458 5.7138C0.0359018 5.82857 -0.278117 6.80417 0.290107 7.36296L3.45123 10.474L2.70357 14.8688C2.56899 15.6632 3.39738 16.2582 4.09121 15.8867Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0)">
              <rect width="16" height="16" fill="#EBBC49" />
              <rect width="16" height="16" fill="#E1BC29" />
            </g>
          </svg>
        </span>
      ),
      clickEvent: clickEvent,
    },
    {
      image: logo,
      title: <span>شركت خدمات انفورماتیك</span>,
      description: (
        <span className="CardRating">
          <span className="mr-2"> 4.2</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.09121 15.8867L8 13.8116L11.9088 15.8867C12.6026 16.2552 13.431 15.6632 13.2964 14.8688L12.5488 10.474L15.7099 7.36296C16.2781 6.80417 15.9641 5.82857 15.1805 5.7138L10.8112 5.07044L8.85832 1.07134C8.50841 0.358522 7.49457 0.349467 7.14168 1.07134L5.18879 5.07044L0.819458 5.7138C0.0359018 5.82857 -0.278117 6.80417 0.290107 7.36296L3.45123 10.474L2.70357 14.8688C2.56899 15.6632 3.39738 16.2582 4.09121 15.8867Z"
              fill="#5C6573"
            />
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="16"
              height="16"
            >
              <path
                d="M4.09121 15.8867L8 13.8116L11.9088 15.8867C12.6026 16.2552 13.431 15.6632 13.2964 14.8688L12.5488 10.474L15.7099 7.36296C16.2781 6.80417 15.9641 5.82857 15.1805 5.7138L10.8112 5.07044L8.85832 1.07134C8.50841 0.358522 7.49457 0.349467 7.14168 1.07134L5.18879 5.07044L0.819458 5.7138C0.0359018 5.82857 -0.278117 6.80417 0.290107 7.36296L3.45123 10.474L2.70357 14.8688C2.56899 15.6632 3.39738 16.2582 4.09121 15.8867Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0)">
              <rect width="16" height="16" fill="#EBBC49" />
              <rect width="16" height="16" fill="#E1BC29" />
            </g>
          </svg>
        </span>
      ),
      clickEvent: clickEvent,
    },
    {
      image: logo,
      title: <span>شركت خدمات انفورماتیك</span>,
      description: (
        <span className="CardRating">
          <span className="mr-2"> 4.2</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.09121 15.8867L8 13.8116L11.9088 15.8867C12.6026 16.2552 13.431 15.6632 13.2964 14.8688L12.5488 10.474L15.7099 7.36296C16.2781 6.80417 15.9641 5.82857 15.1805 5.7138L10.8112 5.07044L8.85832 1.07134C8.50841 0.358522 7.49457 0.349467 7.14168 1.07134L5.18879 5.07044L0.819458 5.7138C0.0359018 5.82857 -0.278117 6.80417 0.290107 7.36296L3.45123 10.474L2.70357 14.8688C2.56899 15.6632 3.39738 16.2582 4.09121 15.8867Z"
              fill="#5C6573"
            />
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="16"
              height="16"
            >
              <path
                d="M4.09121 15.8867L8 13.8116L11.9088 15.8867C12.6026 16.2552 13.431 15.6632 13.2964 14.8688L12.5488 10.474L15.7099 7.36296C16.2781 6.80417 15.9641 5.82857 15.1805 5.7138L10.8112 5.07044L8.85832 1.07134C8.50841 0.358522 7.49457 0.349467 7.14168 1.07134L5.18879 5.07044L0.819458 5.7138C0.0359018 5.82857 -0.278117 6.80417 0.290107 7.36296L3.45123 10.474L2.70357 14.8688C2.56899 15.6632 3.39738 16.2582 4.09121 15.8867Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0)">
              <rect width="16" height="16" fill="#EBBC49" />
              <rect width="16" height="16" fill="#E1BC29" />
            </g>
          </svg>
        </span>
      ),
      clickEvent: clickEvent,
    },
  ];

  const questionsAnswers = [
    {
      question:
        "كارجو چه مزیتی نسبت به دیگران سایت های كاریابی و استخدامی دارد؟",
      answer:
        "وب اپلیكیشن كارجو با تعداد متعدد آگهی تبلیغاتی در معرفی كارجو به كارفرما كارایی آسانی دارد",
    },
    {
      question: "سوال دوم",
      answer: "جواب دوم",
    },
    {
      question: "سوال سوم",
      answer: "جواب سوم",
    },
  ];
  //region return
  if (!isWidthDetected) {
    return <Loader />;
  }
  //region return
  return (
    <>
      <Box
        bgcolor={"secondary.main"}
        component="main"
        sx={{
          p: 1,
          paddingBottom: "1.2em",
          padding: "0px",
        }}
      >
        <Box className="container" component={"div"}>
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
              <div className="col-md-12 col-12 d-flex justify-content-center mt-2 mb-4">
                <button className="custom__ButtonCard">جستجو آگهی</button>
              </div>
            </Box>

            {/* ADVERTISMENT CARDS */}
            <Box
              bgcolor={"secondary.main"}
              className="row boxShadow  grid-container  py-4 m-t-5"
            >
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
            <Carousel items={items} />
            <Box className="row">
              {questionsAnswers.map((qa, index) => (
                <QuestionAnswerWhyUs
                  isDesktop={isDesktop}
                  key={index}
                  index={index + 1}
                  question={qa.question}
                  answer={qa.answer}
                />
              ))}
            </Box>
          </div>
        </Box>
      </Box>{" "}
      <Footer isDesktop={isDesktop} logo={logo} />
    </>
  );
}
