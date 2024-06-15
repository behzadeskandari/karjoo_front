import { Box, Chip, Divider, Typography } from "@mui/material";
import React from "react";
import QuestionAnswer from "./QuestionAnswer";
import { useNavigate } from "react-router-dom";
export default function Footer({ isDesktop, logo }) {
  const navigate = useNavigate();

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
  const handleNavigateToContactUs = () => {
    console.log("navigate");
    navigate("/contact");
  };
  return (
    <Box
      className="pad-none"
      sx={{
        // width: "100%",
        height: "auto",
        backgroundColor: "#4a4e57",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <div className="container mt-3 mb-3">
        <div className="col-md-12 col-12 d-flex justify-content-end flex-column align-items-end">
          <h5 className="text-white">سوالات متداول</h5>
          <div>
            {questionsAnswers.map((qa, index) => (
              <QuestionAnswer
                isDesktop={isDesktop}
                key={index}
                index={index + 1}
                question={qa.question}
                answer={qa.answer}
              />
            ))}
          </div>
          {/* <section className={"questionSection"}>
            <span className="border-round">۱</span>
            <span>
              كارجو چه مزیتی نسبت به دیگران سایت های ;اریابی و استخدامی دارد؟
            </span>
          </section>
          <section className={"questionSectionAnswer"}>
            وب اپلیكیشن كارجو با تعداد متعدد آگهی تبلیغاتی در معرفی كارجو به
            كارفرما كارایی آسانی دارد
          </section> */}
        </div>
      </div>
      <Box
        className={`${
          isDesktop == true
            ? "col-12 col-md-12  d-flex  flex-row "
            : "col-12 col-md-12  d-flex  flex-column "
        }`}
      >
        <div
          className={`${
            isDesktop == true
              ? "col-3 col-md-3 flex-cs-box"
              : "col-12 col-md-12 mt-2 NamadsHolder "
          }`}
        >
          <span className="background-white">
            <img src={logo} alt="enamad" />
          </span>
          <span className="background-white">
            <img src={logo} alt="samandehi.ir" />
          </span>
        </div>
        <div
          className={`${
            isDesktop == true ? "col-3 col-md-3" : "col-12 col-md-12 mt-5"
          }`}
        >
          <h5 className="text-center iransans text-white">درباره جاب ویژن</h5>
          <span className="text-right text-white iransans menu mt-2 mb-2">
            <span>درباره ما</span>
          </span>
          <span className="text-right text-white iransans menu mt-3 mb-3">
            سوالات متداول
          </span>
          <span
            onClick={handleNavigateToContactUs}
            className="text-right text-white iransans menu mt-3 mb-3"
          >
            تماس با ما
          </span>
          <span className="text-right text-white iransans menu mt-3 mb-3">
            قوانین و مقررات
          </span>
          <span className="text-right text-white iransans menu mt-3 mb-3">
            بخش كارفرمایان
          </span>
        </div>
        <div
          className={`${
            isDesktop == true ? "col-3 col-md-3" : "col-12 col-md-12 mt-2"
          }`}
        >
          <h5 className="text-center iransans text-white">كارفرمایان</h5>
          <span className="text-right text-white iransans menu mt-2 mb-2">
            ثبت اگهی جدید
          </span>
          <span className="text-right text-white iransans menu mt-3 mb-3">
            جستجوی بانك رزومه
          </span>
          <span className="text-right text-white iransans menu mt-3 mb-3">
            ارزیابی كارجویان
          </span>
          <span className="text-right text-white iransans menu mt-3 mb-3">
            تعرفه ها
          </span>
          <span className="text-right text-white iransans menu mt-3 mb-3">
            بخش كارفرمایان
          </span>
        </div>
        <div
          className={`${
            isDesktop == true ? "col-3 col-md-3" : "col-12 col-md-12 mt-2"
          }`}
        >
          <h5 className="text-center iransans text-white">كارجویان</h5>
          <span className="text-right text-white iransans menu mt-2 mb-2">
            رزومه ساز
          </span>
          <span className="text-right text-white iransans menu mt-3 mb-3">
            جستجوی فرصت های شغلی
          </span>
          <span className="text-right text-white iransans menu mt-3 mb-3">
            تست های خود شناسی
          </span>
          <span className="text-right text-white iransans menu mt-3 mb-3">
            دوره های آموزشی
          </span>
          <span className="text-right text-white iransans menu mt-3 mb-3">
            رده بندی شركت ها
          </span>
        </div>
      </Box>
      <Divider>
        <Chip
          label="معرفی كارجو"
          style={{
            fontFamily: "IRANSans",
            color: "white",
            borderColor: "#efefef",
            border: "2px solid",
          }}
          size="medium"
        />
      </Divider>

      <Box className="col-12 col-md-12 d-flex justify-content-start">
        <div className="col-12 col-md-12  footerIntroduction">
          <p className="col-5 col-md-5 text-white">
            <span className={"mt-2 mb-2"}>
              {" "}
              كارجو محصولی در حوزه معرفی آموزش و استخدام كارجویان فهالیت دارد
            </span>
            <span className={"mt-2 mb-2"}>
              در حال كسب مجوز رسمی از وزارت كار تعاون رفاه اجتماعی میباشد
            </span>
          </p>
          <p className="col-5 col-md-5 text-white">
            {" "}
            كارجو ارایه دهنده بسته جامع خدمات كاریابی و استخدام و آموزش دارای
            سیستم هوشمند انطباق رزومه ساز تست های خودشناسی و استخدامی در ارتقای
            توانمندی های شما پیشنهاد و برگزاری دوره های آموزشی نرم و مهارت های
            تخصصی اقدام میكند
          </p>
        </div>
      </Box>
      <Box
        className={`${
          isDesktop == true
            ? "col-12 col-md-12  d-flex  flex-row"
            : "col-12 col-md-12  d-flex  flex-column"
        }`}
      >
        <div
          className={`${
            isDesktop == true
              ? "col-4 col-md-4  d-flex flex-row  custom-row  text-white"
              : "col-12 col-md-12  d-flex custom-row   flex-row justify-content-center  text-white"
          }`}
        ></div>
        <div
          className={`${
            isDesktop == true
              ? "col-4 col-md-4  d-flex flex-row  custom-row  text-white"
              : "col-12 col-md-12  d-flex custom-row   flex-row justify-content-center  text-white"
          }`}
        >
          اطلاعات بیشتر در مورد كارجو در صفحه اصلی
        </div>
        <div
          className={`${
            isDesktop == true
              ? "col-4 col-md-4  d-flex  flex-row custom-row  text-white"
              : "col-12 col-md-12  d-flex  flex-column justify-content-center  text-white"
          }`}
        >
          <span className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              width="64px"
              height="64px"
            >
              <path
                fill="url(#TGwjmZMm2W~B4yrgup6jda)"
                d="M58,54c-1.1,0-2-0.9-2-2s0.9-2,2-2h2.5c1.9,0,3.5-1.6,3.5-3.5S62.4,43,60.5,43H50c-1.4,0-2.5-1.1-2.5-2.5	S48.6,38,50,38h8c1.7,0,3-1.3,3-3s-1.3-3-3-3H42v-6h18c2.3,0,4.2-2,4-4.4c-0.2-2.1-2.1-3.6-4.2-3.6H58c-1.1,0-2-0.9-2-2s0.9-2,2-2	h0.4c1.3,0,2.5-0.9,2.6-2.2c0.2-1.5-1-2.8-2.5-2.8h-14C43.7,9,43,8.3,43,7.5S43.7,6,44.5,6h3.9c1.3,0,2.5-0.9,2.6-2.2	C51.1,2.3,50,1,48.5,1H15.6c-1.3,0-2.5,0.9-2.6,2.2C12.9,4.7,14,6,15.5,6H19c1.1,0,2,0.9,2,2s-0.9,2-2,2H6.2c-2.1,0-4,1.5-4.2,3.6	C1.8,16,3.7,18,6,18h2.5c1.9,0,3.5,1.6,3.5,3.5S10.4,25,8.5,25H5.2c-2.1,0-4,1.5-4.2,3.6C0.8,31,2.7,33,5,33h17v11H6	c-1.7,0-3,1.3-3,3s1.3,3,3,3l0,0c1.1,0,2,0.9,2,2s-0.9,2-2,2H4.2c-2.1,0-4,1.5-4.2,3.6C-0.2,60,1.7,62,4,62h53.8	c2.1,0,4-1.5,4.2-3.6C62.2,56,60.3,54,58,54z"
              />
              <radialGradient
                id="TGwjmZMm2W~B4yrgup6jdb"
                cx="18.51"
                cy="66.293"
                r="69.648"
                gradientTransform="matrix(.6435 -.7654 .5056 .4251 -26.92 52.282)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".073" stop-color="#eacc7b" />
                <stop offset=".184" stop-color="#ecaa59" />
                <stop offset=".307" stop-color="#ef802e" />
                <stop offset=".358" stop-color="#ef6d3a" />
                <stop offset=".46" stop-color="#f04b50" />
                <stop offset=".516" stop-color="#f03e58" />
                <stop offset=".689" stop-color="#db359e" />
                <stop offset=".724" stop-color="#ce37a4" />
                <stop offset=".789" stop-color="#ac3cb4" />
                <stop offset=".877" stop-color="#7544cf" />
                <stop offset=".98" stop-color="#2b4ff2" />
              </radialGradient>
              <path
                fill="url(#TGwjmZMm2W~B4yrgup6jdb)"
                d="M45,57H19c-5.5,0-10-4.5-10-10V21c0-5.5,4.5-10,10-10h26c5.5,0,10,4.5,10,10v26C55,52.5,50.5,57,45,57z"
              />
              <path
                fill="#fff"
                d="M32,20c4.6,0,5.1,0,6.9,0.1c1.7,0.1,2.6,0.4,3.2,0.6c0.8,0.3,1.4,0.7,2,1.3c0.6,0.6,1,1.2,1.3,2 c0.2,0.6,0.5,1.5,0.6,3.2C46,28.9,46,29.4,46,34s0,5.1-0.1,6.9c-0.1,1.7-0.4,2.6-0.6,3.2c-0.3,0.8-0.7,1.4-1.3,2 c-0.6,0.6-1.2,1-2,1.3c-0.6,0.2-1.5,0.5-3.2,0.6C37.1,48,36.6,48,32,48s-5.1,0-6.9-0.1c-1.7-0.1-2.6-0.4-3.2-0.6 c-0.8-0.3-1.4-0.7-2-1.3c-0.6-0.6-1-1.2-1.3-2c-0.2-0.6-0.5-1.5-0.6-3.2C18,39.1,18,38.6,18,34s0-5.1,0.1-6.9 c0.1-1.7,0.4-2.6,0.6-3.2c0.3-0.8,0.7-1.4,1.3-2c0.6-0.6,1.2-1,2-1.3c0.6-0.2,1.5-0.5,3.2-0.6C26.9,20,27.4,20,32,20 M32,17 c-4.6,0-5.2,0-7,0.1c-1.8,0.1-3,0.4-4.1,0.8c-1.1,0.4-2.1,1-3,2s-1.5,1.9-2,3c-0.4,1.1-0.7,2.3-0.8,4.1C15,28.8,15,29.4,15,34 s0,5.2,0.1,7c0.1,1.8,0.4,3,0.8,4.1c0.4,1.1,1,2.1,2,3c0.9,0.9,1.9,1.5,3,2c1.1,0.4,2.3,0.7,4.1,0.8c1.8,0.1,2.4,0.1,7,0.1 s5.2,0,7-0.1c1.8-0.1,3-0.4,4.1-0.8c1.1-0.4,2.1-1,3-2c0.9-0.9,1.5-1.9,2-3c0.4-1.1,0.7-2.3,0.8-4.1c0.1-1.8,0.1-2.4,0.1-7 s0-5.2-0.1-7c-0.1-1.8-0.4-3-0.8-4.1c-0.4-1.1-1-2.1-2-3s-1.9-1.5-3-2c-1.1-0.4-2.3-0.7-4.1-0.8C37.2,17,36.6,17,32,17L32,17z"
              />
              <path
                fill="#fff"
                d="M32,25c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S37,25,32,25z M32,40c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S35.3,40,32,40 z"
              />
              <circle cx="41" cy="25" r="2" fill="#fff" />
            </svg>
          </span>
          <span className="margin-em-seven text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="48px"
              height="48px"
            >
              <path
                fill="#0288D1"
                d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
              />
              <path
                fill="#FFF"
                d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
              />
            </svg>
          </span>
          <span className="margin-em-seven text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="48px"
              height="48px"
            >
              <linearGradient
                id="_osn9zIN2f6RhTsY8WhY4a"
                x1="10.341"
                x2="40.798"
                y1="8.312"
                y2="38.769"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#2aa4f4" />
                <stop offset="1" stop-color="#007ad9" />
              </linearGradient>
              <path
                fill="url(#_osn9zIN2f6RhTsY8WhY4a)"
                d="M46.105,11.02c-1.551,0.687-3.219,1.145-4.979,1.362c1.789-1.062,3.166-2.756,3.812-4.758	c-1.674,0.981-3.529,1.702-5.502,2.082C37.86,8.036,35.612,7,33.122,7c-4.783,0-8.661,3.843-8.661,8.582	c0,0.671,0.079,1.324,0.226,1.958c-7.196-0.361-13.579-3.782-17.849-8.974c-0.75,1.269-1.172,2.754-1.172,4.322	c0,2.979,1.525,5.602,3.851,7.147c-1.42-0.043-2.756-0.438-3.926-1.072c0,0.026,0,0.064,0,0.101c0,4.163,2.986,7.63,6.944,8.419	c-0.723,0.198-1.488,0.308-2.276,0.308c-0.559,0-1.104-0.063-1.632-0.158c1.102,3.402,4.299,5.889,8.087,5.963	c-2.964,2.298-6.697,3.674-10.756,3.674c-0.701,0-1.387-0.04-2.065-0.122C7.73,39.577,12.283,41,17.171,41	c15.927,0,24.641-13.079,24.641-24.426c0-0.372-0.012-0.742-0.029-1.108C43.483,14.265,44.948,12.751,46.105,11.02"
              />
            </svg>
          </span>
          <span className="margin-em-seven text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="48px"
              height="48px"
            >
              <linearGradient
                id="BiF7D16UlC0RZ_VqXJHnXa"
                x1="9.858"
                x2="38.142"
                y1="9.858"
                y2="38.142"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#33bef0" />
                <stop offset="1" stop-color="#0a85d9" />
              </linearGradient>
              <path
                fill="url(#BiF7D16UlC0RZ_VqXJHnXa)"
                d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
              />
              <path
                d="M10.119,23.466c8.155-3.695,17.733-7.704,19.208-8.284c3.252-1.279,4.67,0.028,4.448,2.113	c-0.273,2.555-1.567,9.99-2.363,15.317c-0.466,3.117-2.154,4.072-4.059,2.863c-1.445-0.917-6.413-4.17-7.72-5.282	c-0.891-0.758-1.512-1.608-0.88-2.474c0.185-0.253,0.658-0.763,0.921-1.017c1.319-1.278,1.141-1.553-0.454-0.412	c-0.19,0.136-1.292,0.935-1.745,1.237c-1.11,0.74-2.131,0.78-3.862,0.192c-1.416-0.481-2.776-0.852-3.634-1.223	C8.794,25.983,8.34,24.272,10.119,23.466z"
                opacity=".05"
              />
              <path
                d="M10.836,23.591c7.572-3.385,16.884-7.264,18.246-7.813c3.264-1.318,4.465-0.536,4.114,2.011	c-0.326,2.358-1.483,9.654-2.294,14.545c-0.478,2.879-1.874,3.513-3.692,2.337c-1.139-0.734-5.723-3.754-6.835-4.633	c-0.86-0.679-1.751-1.463-0.71-2.598c0.348-0.379,2.27-2.234,3.707-3.614c0.833-0.801,0.536-1.196-0.469-0.508	c-1.843,1.263-4.858,3.262-5.396,3.625c-1.025,0.69-1.988,0.856-3.664,0.329c-1.321-0.416-2.597-0.819-3.262-1.078	C9.095,25.618,9.075,24.378,10.836,23.591z"
                opacity=".07"
              />
              <path
                fill="#fff"
                d="M11.553,23.717c6.99-3.075,16.035-6.824,17.284-7.343c3.275-1.358,4.28-1.098,3.779,1.91	c-0.36,2.162-1.398,9.319-2.226,13.774c-0.491,2.642-1.593,2.955-3.325,1.812c-0.833-0.55-5.038-3.331-5.951-3.984	c-0.833-0.595-1.982-1.311-0.541-2.721c0.513-0.502,3.874-3.712,6.493-6.21c0.343-0.328-0.088-0.867-0.484-0.604	c-3.53,2.341-8.424,5.59-9.047,6.013c-0.941,0.639-1.845,0.932-3.467,0.466c-1.226-0.352-2.423-0.772-2.889-0.932	C9.384,25.282,9.81,24.484,11.553,23.717z"
              />
            </svg>
          </span>
        </div>
      </Box>
      <Box className="col-12 col-md-12">
        <Typography
          fontFamily={"IRANSans"}
          color="textSecondary"
          variant="subtitle1"
          className="text-center text-white"
        >
          {`${new Date().getFullYear()} | Developed By Behzad Eskandari | طراحی شده توسط بهزاد اسكندری`}
        </Typography>
      </Box>
    </Box>
  );
}
