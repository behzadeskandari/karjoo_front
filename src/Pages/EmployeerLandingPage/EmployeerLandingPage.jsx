import { Box, Divider } from "@mui/material";
import React, { useEffect, useLayoutEffect, useState } from "react";
import "./EmployeerLandingPage.css";
import Carousel from "../../components/Carousel/Carousel";
import logo from "../../assets/images/1.jpg";
import { debounce } from "../../utility";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PriceCard from "../../components/PriceCard";
import StepIndicator from "../../components/StepIndicator";

import Footer from "../MainPage/Footer/Footer";
import GiftCard from "./GiftCard";
import CustomHeader from "./CustomHeader";
import LandingPageDetailCard from "./LandingPageDetailCard";

export default function EmployeerLandingPage() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [isWidthDetected, setIsWidthDetected] = useState(false);
  useLayoutEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 50);
    setIsWidthDetected(true);
    if (dimensions.width < 769) {
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
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

    if (dimensions.width < 769) {
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
    }
    window.addEventListener("resize", debouncedHandleResize);
    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, [isDesktop, dimensions]);

  const clickEvent = () => {
    alert("Button clicked!");
  };
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

  return (
    //container
    <Box className="row px-2">
      <div className="row">
        <div className="col-12 col-md-12">
          <div className="col-12 col-md-12 text-right text-secondary mt-7">
            <h3>کار را به کاردان بسپارید جذب نیرو توسط کارجو</h3>
            <h4>کارجو همراه شما در جذب حرفه ای ترین نیروها </h4>
          </div>
          <div className="col-md-4 col-4"></div>
          <div className="col-md-4 col-4">
            <span className="btnHolder">
              <button
                className="custom__ButtonCard"
                onClick={() => console.log("testonebutton")}
              >
                ثبت آگهی
              </button>
            </span>
          </div>
          <div className="col-md-4 col-4"></div>
        </div>
        <div className="col-12 col-md-12 text-center text-secondary fs-3 mt-4 d-flex flex-column">
          <span>کارجو ، مورد اعتماد بهترین سازمان ها</span>
          <span className="mt-3">
            <Carousel items={items} />
          </span>
        </div>
      </div>
      <Divider variant="middle" component="section" />
      <div className="row">
        <LandingPageDetailCard isDesktop={isDesktop} />
      </div>
      <Box className="d-flex flex-row justify-content-center customBox-prices">
        <CustomHeader />
      </Box>
      <Box>
        <PriceCard />
      </Box>
      <Box className="padd-0">
        <GiftCard />
      </Box>
      <Footer isDesktop={isDesktop} logo={logo}></Footer>
    </Box>
  );
}
