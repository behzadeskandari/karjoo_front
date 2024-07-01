import { Box, Divider } from "@mui/material";
import React, { useEffect, useLayoutEffect, useState } from "react";
import "./EmployeerLandingPage.css";
import Carousel from "../../components/Carousel/Carousel";
import logo from "../../assets/images/1.jpg";
import resume from "../../assets/images/resume.png";
import panelAdmin from "../../assets/images/panelAdmin.png";
import Salary from "../../assets/images/Salary.png";
import Consulting from "../../assets/images/Consulting.png";
import EducationalResume from "../../assets/images/EducationalResume.png";
import socailMedia from "../../assets/images/socailMedia.png";
import { debounce } from "../../utility";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PriceCard from "../../components/PriceCard";
import StepIndicator from "../../components/StepIndicator";
import { ArrowBack } from "@mui/icons-material";
import AddHomeIcon from '@mui/icons-material/AddHome';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import VerifiedIcon from '@mui/icons-material/Verified';

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
    <Box className="container">
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
        <div className="col-12 col-md-12">
          <h4 className="text-center mt-4 text-secondary">
            چرا کارفرمایان کارجو را ترجیح میدهند
          </h4>

          <div
            className={`${
              isDesktop ? "flex-row" : "flex-column"
            } col-12 col-md-12 d-flex  mt-5`}
          >
            <div className="col-md-4 col-12 col-md-4 text-md-right text-center">
              <div className="text-right my-4">
                <img
                  src={resume}
                  alt="رزومه"
                  className="img-fluid"
                  style={{ width: "55px", height: "55px" }}
                />
              </div>
              <h5 className="text-secondary align-right">
                دریافت روزمه های مرتبط و با کیفیت تر
              </h5>
              <p className="align-right my-4 px-1 ">
                به کمک سیستم هوشمند تشحیص رزومه و موقعیت شغلی و همچنین پردازش
                های هوش مصنوعی رزومه های مرتبط تر و با کیفیت تر نسبت به سایر
                رقبا دریافت میکنید{" "}
              </p>
            </div>
            <div className="col-md-4 col-12 col-md-4 text-md-right text-center">
              <div className="text-right my-4">
                <img
                  src={panelAdmin}
                  alt="رزومه"
                  className="img-fluid"
                  style={{ width: "55px", height: "55px" }}
                />
              </div>

              <h5 className="text-secondary align-right">
                پنل کاربردی مدیریت رزومه ها
              </h5>
              <p className="align-right my-4 px-1 ">
                ساختار یکپارچه و استاندارد رزومه ها، نمایش اطلاعات مهم رزومه در
                نگاه اول، مشاهده انطباق رزومه کارجو با شرایط مد نظر کارفرما،
                فرایند بررسی رزومه ها را ساده، سریع و کارآمد کرده است.
              </p>
            </div>
            <div className="col-md-4 col-12 col-md-4 text-md-right text-center">
              <div className="text-right my-4">
                <img
                  src={Salary}
                  alt="رزومه"
                  className="img-fluid"
                  style={{ width: "55px", height: "55px" }}
                />
              </div>

              <h5 className="text-secondary align-right">
                آگاهی از حقوق درخواستی کارجویان
              </h5>
              <p className="align-right my-4 px-1 ">
                یکی از مهمترین شاخص ها برای بررسی رزومه، حقوق درخواستی کارجوست.
                در جاب‌ویژن، از حقوق درخواستی همه رزومه ها بصورت کاملا شفاف
                اطلاع خواهید داشت.
              </p>
            </div>
          </div>
          <div
            className={`${
              isDesktop ? "flex-row" : "flex-column"
            } col-12 col-md-12 d-flex  mt-5`}
          >
            <div className="col-sm-4 col-12 col-md-4 text-md-right text-center">
              <div className="text-right my-4">
                <img
                  src={Consulting}
                  alt="رزومه"
                  className="img-fluid"
                  style={{ width: "55px", height: "55px" }}
                />
              </div>
              <h5 className="text-secondary align-right">
                مشاوره و پشتیبانی حرفه ای برای دریافت بهترین نتیجه
              </h5>
              <p className="align-right my-4 px-1">
                مشاوران و پشتیبانان جاب‌ویژن افرادی مجرب و آموزش دیده هستند که
                هنگام ثبت فرصت شغلی، جستجو در بانک رزومه و ... در کنار شما هستند
                تا بهترین نتیجه را بگیرید.
              </p>
            </div>
            <div className="col-sm-4  col-12 col-md-4 text-md-right text-center">
              <div className="text-right my-4">
                <img
                  src={EducationalResume}
                  alt="رزومه"
                  className="img-fluid"
                  style={{ width: "55px", height: "55px" }}
                />
              </div>

              <h5 className="text-secondary align-right">
                دسترسی به رزومه فارغ التحصیلان برترین موسسات آموزشی
              </h5>
              <p className="align-right my-4 px-1 ">
                به واسطه ی همکاری با معتبرترین موسسات آموزشی، به رزومه های فارغ
                التحصیلان برتر این موسسات در جاب‌ویژن دسترسی دارید.{" "}
              </p>
            </div>
            <div className="col-sm-4 col-12 col-md-4 text-md-right text-center">
              <div className="text-right my-4">
                <img
                  src={socailMedia}
                  alt="رزومه"
                  className="img-fluid"
                  style={{ width: "55px", height: "55px" }}
                />
              </div>
              <h5 className="text-secondary align-right">
                شبکه اجتماعی قدرتمند
              </h5>
              <p className="align-right my-4 px-1">
                بیش از 500 هزار متخصص، ربات و کانال تلگرام، صفحات لینکدین،
                اینستاگرام و توییتر جاب‌ویژن را دنبال می کنند.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Box className="d-flex flex-row justify-content-center customBox-prices">
        <span className="col-3 pt-5">
          <h6>تعرفه خدمات جاب ویژن</h6>
          <div className=" cs-card ">
            <div>
              <span className="line-4"> <ArrowBack/></span>
            </div>
            <div className=" d-flex flex-column">
              <span>ثبت آگهی</span>
              <span>شروع قیمت از 950000 تومان</span>
            </div>

            <div className="line-height-3">
              <span>
               <VerifiedIcon/>
              </span>
            </div>
          </div>
        </span>
        <span className="col-3 pt-5">
          <h6>خرید رزومه از بانک رزومه</h6>
          <div className=" cs-card">
            <div>
              <span className="line-4"><ArrowBack/></span>
            </div>
            <div className="d-flex flex-column">
              <span>ثبت آگهی</span>
              <span>شروع قیمت از 950000 تومان</span>
            </div>
            <div className="line-height-3">
              <span><CoPresentIcon/></span>
            </div>
          </div>
        </span>
        <span className="col-3 pt-5">
          <h6>تعرفه خدمات جاب ویژن</h6>
          <div className=" cs-card">
            <div>
              <span className="line-4"><ArrowBack/></span>
            </div>
            <div className=" d-flex flex-column">
              <span>ثبت آگهی</span>
              <span>شروع قیمت از 950000 تومان</span>
            </div>
            <div className="line-height-3">
              <span><AddHomeIcon/></span>
            </div>
          </div>
        </span>
      </Box>
      <Box>
        <PriceCard />
      </Box>
      <Box>
        <div className="Gift-card">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="d-flex flex-column">
              <span className="text-right orange-badge">هدیه کارجو</span>
              <span className="text-right mr-50">تخفیف %100 اولین آگهی </span>
            </div>
            <span className="dotted-line">
              <svg width="300px" height="200px" viewBox="0 0 300 200">
                <line
                  x1="40"
                  x2="260"
                  y1="100"
                  y2="100"
                  stroke="#5184AF"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-dasharray="1, 10"
                />
              </svg>
            </span>
            <div className="d-flex flex-row">
              <div className="d-flex flex-column">
                <span>کد تخفیف</span>
                <span>Welcome</span>
              </div>
              <div>
                <button className="custom__ButtonCard">ثبت آگهی</button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4"></div>
          <div className="col-sm-12 col-md-4 col-lg-4"></div>
        </div>
      </Box>
      <Box>
      </Box>
    </Box>
  );
}
