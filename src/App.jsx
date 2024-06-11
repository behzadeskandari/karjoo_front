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

  const JobCategoryOptions = [
    { label: " فروش بازار یابی - سطوح گارشناسی", value: "1" },
    {
      label: "فروش و بازیابی - فروشنده / بازار یاب و ویزیتور / صندوقدار",
      value: "2",
    },
    { label: "مدیر فروشگاه / مدیر رستوران", value: "3" },
    { label: "خدمات و پشتیبانی مشتریان", value: "4" },
    { label: "نماینده علمی / مدرس", value: "5" },
    { label: "مدیریت بیمه", value: "6" },
    { label: "دیجیتال مارگتینگ و سِِو", value: "7" },
    { label: "ترجمه / تولید محتوا / نویسندگی و ویراستاری", value: "8" },
    { label: "توسعه نرم افزار و برنامه نویسی", value: "9" },
    { label: "تست نرم افزار", value: "10" },
    { label: "شبگه /Devops / پشتیبانی سخت افزاری و نرم افزاری", value: "11" },
    { label: "علوم داده / هوش مصنوعی", value: "12" },
    { label: "طراحی بازی", value: "13" },
    { label: "طراحی گرافیگ / طراحی انیمیشن و موشن گرافیگ", value: "78" },
    { label: "طراحی لباس / طراحی طلا و جواهر", value: "14" },
    { label: "طراحی صنعتی / نقشه شی صنعتی", value: "15" },
    { label: "عگاسی", value: "16" },
    { label: "مشاغل حوزه فیلم و سینما", value: "17" },
    { label: " طراحی موسیقی و صدا", value: "18" },
    { label: "(UI/UX) طراحی رابطه و تجربه گاربری ", value: "19" },
    { label: "مدیر محصول / مالگ محصول", value: "20" },
    {
      label: "تحلیل و توسعه  گسب و گار / استراتژی  / برنامه ریزی ",
      value: "21",
    },
    { label: "خرید / تدارگات", value: "22" },
    {
      label: "مهندس صنایع / مدیریت تولید / مدیریت پروژه / مدیریت عملیات",
      value: "23",
    },
    { label: "خرید / ندارگات", value: "24" },
    { label: "بازگانی / تجارت", value: "25" },
    { label: "لجستیگ / حمل و نقل / انبارداری", value: "26" },
    { label: "راننده / مسِول توزیع / پیگ موتوری", value: "27" },
    { label: "مالی و حسابداری", value: "28" },
    { label: "معامله گر و تحلیل گر بازارهای مالی ", value: "29" },
    { label: "تحصیل دار / گارپرداز", value: "30" },
    { label: "مسِول دفتر / گارمند اداری ثبت اطلاعات / تایپیست", value: "31" },
    { label: "منابع انسانی", value: "32" },
    { label: "مدیر اجرایی", value: "33" },
    { label: "مدیر عامل / مدیر گارخانه", value: "34" },
    { label: "مهندسی برق", value: "35" },
    { label: "مهندسی پزشگی", value: "36" },
    { label: "مهندس مگانیگ / مهندس هوا فضا", value: "37" },
    { label: "مهندس صنایع غذایی", value: "38" },
    { label: "مهندس شیمی / مهندس نفت گاز", value: "39" },
    { label: "مهندس انرژی / مهندس هسته ای", value: "40" },
    { label: "(HSE) بهداشت ، ایمنی و محیط زیست", value: "41" },
    { label: "مهندس عمران", value: "42" },
    { label: "مهندس معماری و شهرسازی", value: "43" },
    { label: "مهندس معدن / زمین شناسی", value: "44" },
    { label: "مهندسی مواد و متالوژی", value: "45" },
    { label: "مهندسی نساجی", value: "46" },
    { label: "مهندسی پلیمر", value: "47" },
    { label: "مهندس گشاورزی / علوم دامی", value: "48" },
    { label: "زیست شناسی / علوم زیستی / علوم آزمایشگاهی", value: "49" },
    { label: "داروسازی/ بیوشیمی /شیمی", value: "50" },
    { label: "پزشگ / دندان پزشگ / دامپزشگ ", value: "51" },
    {
      label: "پرستار بهیار / تگنسین حوزه سلامت و درمان /دستیاز پزشگ",
      value: "52",
    },
    { label: "پرستار سالمند / پرستار گودگ", value: "53" },
    { label: "روانشناسی / مشاوره / علوم اجتماعی", value: "54" },
    { label: "حقوقی", value: "55" },
    { label: "روابط عمومی", value: "56" },
    { label: "روزنامه نگار / خبرنگار", value: "57" },
    { label: "آموزش / تدریس", value: "58" },
    { label: "پژوهش", value: "59" },
    { label: "نگهبان", value: "60" },
    { label: "گارگر ساده / نیروی خدماتی", value: "61" },
    { label: "تگنسین فنی / تعمیرگار / گارگر ماهر", value: "62" },
    { label: "... تخصص های ساختمانی /بنا / گچ گار /گاشی گار و ", value: "63" },
    { label: "مبل ساز/رنگ گار چوب/نجار / گابینت گار/MDF گار", value: "64" },
    { label: "آرایشگر", value: "65" },
    { label: "قناد و شیرنی پزی", value: "66" },
    { label: "بافنده فرش /قالی باف", value: "67" },
    { label: "نانوا", value: "68" },
    { label: "قفل و گلید ساز", value: "69" },
    { label: "قصاب", value: "70" },
    { label: "گفاش", value: "71" },
    { label: "خیاط", value: "72" },
    { label: "آشپز", value: "73" },
    { label: "گافی من /گارسون /باریستا", value: "74" },
    { label: "راهنمای تور /مهماندار", value: "75" },
    { label: "ورزش/ تربیت بدنی/تغذیه", value: "76" },
    { label: "تاریخ /چغرافیا / باستان شناسی", value: "77" },
  ];
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
      </div>
    </>
  );
}

export default App;
