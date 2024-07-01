import React from "react";
import "./PriceCard.css";
export default function PriceCard() {
  return (
    <section id="pricing">
      <div className="row">
        <h4>بسته های اعتباری</h4>
        <h3>مناسب برای سازمان هایی که دنبال ثبت بیش از یک آگهی هستند </h3>
        <h4>
          مناسب برای سازمان‌هایی که به دنبال جستجوی بانک رزومه و خرید رزومه از
          آن هستند
        </h4>
        <h5>
          با خرید بسته‌های اعتباری، شارژ هدیه دریافت کنید و از اعتبار خود برای
          هر سرویسی که نیاز دارید، استفاده کنید
        </h5>
      </div>
      <div className="row">
        <div className="pricing-column col-lg-4 col-md-6">
          <div class="card">
            <div class="card-header">
              <h3>FREE</h3>
            </div>
            <div class="card-body">
              <h2>Free</h2>
              <p>No Listing</p>
              <p>5 Matches Per Day</p>
              <p>10 Messages Per Day</p>
              <p>Unlimited App Usage</p>
              <button
                class="btn btn-lg btn-block btn-outline-dark"
                type="button"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>

        <div className="pricing-column col-lg-4 col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>PLUS</h3>
            </div>
            <div className="card-body">
              <h2>$49 / mo</h2>
              <p>No Listing</p>
              <p>Unlimited Matches</p>
              <p>Unlimited Messages</p>
              <p>Unlimited App Usage</p>
              <button className="btn btn-lg btn-block btn-dark" type="button">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        <div className="pricing-column col-lg-4">
          <div className="card">
            <div className="card-header">
              <h3>PRO</h3>
            </div>
            <div className="card-body">
              <h2>$99 / mo</h2>
              <p>Pirority Listing</p>
              <p>Unlimited Matches</p>
              <p>Unlimited Messages</p>
              <p>Unlimited App Usage</p>
              <button className="btn btn-lg btn-block btn-dark" type="button">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
