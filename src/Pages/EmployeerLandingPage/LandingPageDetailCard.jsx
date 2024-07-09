import React from "react";

import resume from "../../assets/images/resume.png";
import panelAdmin from "../../assets/images/panelAdmin.png";
import Salary from "../../assets/images/Salary.png";
import Consulting from "../../assets/images/Consulting.png";
import EducationalResume from "../../assets/images/EducationalResume.png";
import socailMedia from "../../assets/images/socailMedia.png";
export default function LandingPageDetailCard({ isDesktop }) {
  return (
    <div className="col-12 col-md-12  ml-auto mt-2">
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
            به کمک سیستم هوشمند تشحیص رزومه و موقعیت شغلی و همچنین پردازش های
            هوش مصنوعی رزومه های مرتبط تر و با کیفیت تر نسبت به سایر رقبا دریافت
            میکنید{" "}
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
            ساختار یکپارچه و استاندارد رزومه ها، نمایش اطلاعات مهم رزومه در نگاه
            اول، مشاهده انطباق رزومه کارجو با شرایط مد نظر کارفرما، فرایند بررسی
            رزومه ها را ساده، سریع و کارآمد کرده است.
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
            یکی از مهمترین شاخص ها برای بررسی رزومه، حقوق درخواستی کارجوست. در
            جاب‌ویژن، از حقوق درخواستی همه رزومه ها بصورت کاملا شفاف اطلاع
            خواهید داشت.
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
            مشاوران و پشتیبانان جاب‌ویژن افرادی مجرب و آموزش دیده هستند که هنگام
            ثبت فرصت شغلی، جستجو در بانک رزومه و ... در کنار شما هستند تا بهترین
            نتیجه را بگیرید.
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
          <h5 className="text-secondary align-right">شبکه اجتماعی قدرتمند</h5>
          <p className="align-right my-4 px-1">
            بیش از 500 هزار متخصص، ربات و کانال تلگرام، صفحات لینکدین،
            اینستاگرام و توییتر جاب‌ویژن را دنبال می کنند.
          </p>
        </div>
      </div>
    </div>
  );
}
