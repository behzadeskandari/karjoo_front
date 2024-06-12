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
import Carousel from './components/Carousel/Carousel';
import {JobCategoryOptions} from './Constant/MainPage/DropDown/JobCategory';


function App() {
  const HeaderBanner = "اگهی شغل در";
  const HeaderBannerCity = "شهر";
  const JobSeekingType = "دنبال چه شغلی میگردید";
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  const [isDesktop, setIsDesktop] = useState(true);
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(true);
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  
  // const JobCategoryOptions = [
  //   { value: "chocolate", label: "Chocolate" },
  //   { value: "strawberry", label: "Strawberry" },
  //   { value: "vanilla", label: "Vanilla" },
  // ];
  const CityOptions = [
    { value: "1", label: "تهران" },
    { value: "2", label: "البرز" },
    { value: "3", label: "آذربایجان غربی" },
    { value: "4", label: "آذربایجان شرقی" },
  ];
  useEffect(() => {
    // console.log(matches, "matches");
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 50);
    // console.log(dimensions, "dimensions");
    // console.log(isDesktop, "isDesktop");

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

  return (
    <>
      <CssBaseline />
      <HeaderAndNavigationMenu />
      <div style={{ padding: "16px", textAlign: "right" }}>
        <h1>
          <div className="HeaderBanner">
            <span>{HeaderBanner}</span>
            <span style={{ color: "blue" }}>50,507</span>
          </div>
          <div className="HeaderBanner">
            <span>{HeaderBannerCity}</span>
            <span style={{ color: "blue", padding: "0px 7px 0px 7px" }}>
              505
            </span>
          </div>
        </h1>
        {/* ImageTAG Goes Here */}
        <h3 className="margin-top-60">{JobSeekingType}</h3>
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
                options={CityOptions}
                placeholder={"شهر"}
              />
            </div>
          </div>
        </section>
        <Carousel/>
      </div>
    </>
  );
}


export default App;
