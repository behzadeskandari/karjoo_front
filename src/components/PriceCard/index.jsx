import React from "react";
import "./PriceCard.css";
import { Divider } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
export default function PriceCard() {
  return (
    <section id="pricing">
      <div className="row">
        <h4 style={{ color: "#ccc" }} className="py-2">
          بسته های اعتباری
        </h4>
        <Divider variant="middle" component="section" />
        <h3 style={{ color: "#bbb" }} className="py-3">
          مناسب برای سازمان هایی که دنبال ثبت بیش از یک آگهی هستند{" "}
        </h3>
        <Divider variant="middle" component="section" />
        <h4 style={{ color: "#aaa" }} className="py-4">
          مناسب برای سازمان‌هایی که به دنبال جستجوی بانک رزومه و خرید رزومه از
          آن هستند
        </h4>
        <Divider variant="middle" component="section" />
        <h5 style={{ color: "#aaa" }} className="py-5">
          با خرید بسته‌های اعتباری، شارژ هدیه دریافت کنید و از اعتبار خود برای
          هر سرویسی که نیاز دارید، استفاده کنید
        </h5>
      </div>
      <div className="row justify-content-center">
        <div className="pricing-column col-sm-12 col-lg-3 col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>اعتبار 60 روزه</h3>
            </div>
            <div className="card-body">
              <h3>
                <span className="color-grey">اعتبار</span>{" "}
                <span className="money-color">9000,000</span> تومانی
              </h3>
              <p className="color-grey ">30 روزه </p>
              <p className="color-grey cs-right">قابل استفاده در </p>
              <p className="color-grey text-right">
                ثبت خرید <DoneIcon color="disabled" />{" "}
              </p>
              <p className="color-grey text-right">
                خرید رزومه <DoneIcon color="disabled" />
              </p>
              <p className="color-grey text-right">
                خرید رزومه گیشنهادی <DoneIcon color="disabled" />
              </p>
              <p className="color-grey text-right">
                شتاب دهی آگهی
                <DoneIcon color="disabled" />
              </p>
              <div className="py-5">
                <Divider variant="middle" component="section" />
              </div>
              <button className=" custom__ButtonCard" type="button">
                <span>تومان</span>
                <span>9,000,000 </span>
              </button>
            </div>
          </div>
        </div>

        <div className="pricing-column col-sm-12 col-lg-3 col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>اعتبار 45 روزه</h3>
            </div>
            <div className="card-body">
              <h3>
                <span className="color-grey">اعتبار</span>{" "}
                <span className="money-color">9000,000</span> تومانی
              </h3>
              <p className="color-grey ">30 روزه </p>
              <p className="color-grey cs-right">قابل استفاده در </p>
              <p className="color-grey text-right">
                ثبت خرید <DoneIcon color="disabled" />{" "}
              </p>
              <p className="color-grey text-right">
                خرید رزومه <DoneIcon color="disabled" />
              </p>
              <p className="color-grey text-right">
                خرید رزومه گیشنهادی <DoneIcon color="disabled" />
              </p>
              <p className="color-grey text-right">
                شتاب دهی آگهی
                <DoneIcon color="disabled" />
              </p>
              <div className="py-5">
                <Divider variant="middle" component="section" />
              </div>
              <button className=" custom__ButtonCard" type="button">
                <span>تومان</span>
                <span>9,000,000 </span>
              </button>
            </div>
          </div>
        </div>

        <div className="pricing-column col-sm-12 col-lg-3 col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>اعتبار 30 روزه</h3>
            </div>
            <div className="card-body">
              <h3>
                <span className="color-grey">اعتبار</span>{" "}
                <span className="money-color">9000,000</span> تومانی
              </h3>
              <p className="color-grey ">30 روزه </p>
              <p className="color-grey cs-right">قابل استفاده در </p>
              <p className="color-grey text-right">
                ثبت خرید <DoneIcon color="disabled" />{" "}
              </p>
              <p className="color-grey text-right">
                خرید رزومه <DoneIcon color="disabled" />
              </p>
              <p className="color-grey text-right">
                خرید رزومه گیشنهادی <DoneIcon color="disabled" />
              </p>
              <p className="color-grey text-right">
                شتاب دهی آگهی
                <DoneIcon color="disabled" />
              </p>
              <div className="py-5">
                <Divider variant="middle" component="section" />
              </div>
              <button className=" custom__ButtonCard" type="button">
                <span>تومان</span>
                <span>9,000,000 </span>
              </button>
            </div>
          </div>
        </div>

        <div className="pricing-column col-sm-12 col-lg-3 col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>اعتبار 30 روزه</h3>
            </div>
            <div className="card-body">
              <h3>
                <span className="color-grey">اعتبار</span>{" "}
                <span className="money-color">9000,000</span> تومانی
              </h3>
              <p className="color-grey ">30 روزه </p>
              <p className="color-grey cs-right">قابل استفاده در </p>
              <p className="color-grey text-right">
                ثبت خرید <DoneIcon color="disabled" />{" "}
              </p>
              <p className="color-grey text-right">
                خرید رزومه <DoneIcon color="disabled" />
              </p>
              <p className="color-grey text-right">
                خرید رزومه گیشنهادی <DoneIcon color="disabled" />
              </p>
              <p className="color-grey text-right">
                شتاب دهی آگهی
                <DoneIcon color="disabled" />
              </p>
              <div className="py-5">
                <Divider variant="middle" component="section" />
              </div>
              <button className=" custom__ButtonCard" type="button">
                <span>تومان</span>
                <span>9,000,000 </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
