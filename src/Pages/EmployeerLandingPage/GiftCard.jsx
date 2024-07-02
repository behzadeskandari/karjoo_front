import React from "react";

export default function GiftCard() {
  return (
    <div className="Gift-card padd-25">
      <div className="col-sm-12 col-md-2 col-lg-2 special-offer">
        <div className="d-flex flex-column custom_card">
          <span className="text-right orange-badge">هدیه کارجو</span>
          <p className="text-center font-bolder">
            آگهی‌های شغلی راننده پیک، مسئول توزیع، کارگر و نیروی خدماتی را
            رایگان منتشر کنید
          </p>
        </div>
        <span className="line-holder">
          <span className="dotted-line"></span>
        </span>
        <div className="d-flex flex-row-reverse justify-content-center">
          <div className="col-12 col-md-5">
            <button className="custom__ButtonCard">ثبت آگهی</button>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-2 col-lg-2 special-offer">
        <div className="d-flex flex-column custom_card">
          <span className="text-right orange-badge">هدیه کارجو</span>
          <p className="text-center font-bolder">
            آگهی‌های همه شهرستان‌ها را رایگان منتشر کنید
          </p>
          <p className=" text-center text-secondary">
            (به جز استان‌های تهران و البرز و شهرهای اصفهان و مشهد)
          </p>
        </div>
        <span className="line-holder">
          <span className="dotted-line"></span>
        </span>
        <div className="d-flex flex-row-reverse justify-content-center">
          <div className="d-flex flex-column col-12 col-md-5 text-right align-item-end">
            <span>کد تخفیف</span>
            <span className="badge bg-secondary col-md-6  py-2">Welcome</span>
          </div>
          <div className="col-12 col-md-5">
            <button className="custom__ButtonCard">ثبت آگهی</button>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-2 col-lg-2 special-offer">
        <div className="d-flex flex-column custom_card">
          <span className="text-right orange-badge">هدیه کارجو</span>
          <span className="text-right mr-50 font-bolder">
            تخفیف %100 اولین آگهی{" "}
          </span>
        </div>
        <span className="line-holder">
          <span className="dotted-line"></span>
        </span>
        <div className="d-flex flex-row-reverse justify-content-center">
          <div className="d-flex flex-column col-12 col-md-5 text-right align-item-end">
            <span>کد تخفیف</span>
            <span className="badge bg-secondary col-md-6  py-2">Welcome</span>
          </div>
          <div className="col-12 col-md-5">
            <button className="custom__ButtonCard">ثبت آگهی</button>
          </div>
        </div>
      </div>
    </div>
  );
}
