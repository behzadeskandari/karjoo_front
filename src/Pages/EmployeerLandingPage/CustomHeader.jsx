import React from "react";
import { ArrowBack } from "@mui/icons-material";
import AddHomeIcon from "@mui/icons-material/AddHome";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import VerifiedIcon from "@mui/icons-material/Verified";
export default function CustomHeader() {
  return (
    <>
      <span className="col-3 pt-5">
        <h6>تعرفه خدمات جاب ویژن</h6>
        <div className=" cs-card ">
          <div>
            <span className="line-4">
              <ArrowBack />
            </span>
          </div>
          <div className=" d-flex flex-column">
            <span>ثبت آگهی</span>
            <span>شروع قیمت از 950000 تومان</span>
          </div>

          <div className="line-height-3">
            <span>
              <VerifiedIcon />
            </span>
          </div>
        </div>
      </span>
      <span className="col-3 pt-5">
        <h6>خرید رزومه از بانک رزومه</h6>
        <div className=" cs-card">
          <div>
            <span className="line-4">
              <ArrowBack />
            </span>
          </div>
          <div className="d-flex flex-column">
            <span>ثبت آگهی</span>
            <span>شروع قیمت از 950000 تومان</span>
          </div>
          <div className="line-height-3">
            <span>
              <CoPresentIcon />
            </span>
          </div>
        </div>
      </span>
      <span className="col-3 pt-5">
        <h6>تعرفه خدمات جاب ویژن</h6>
        <div className=" cs-card">
          <div>
            <span className="line-4">
              <ArrowBack />
            </span>
          </div>
          <div className=" d-flex flex-column">
            <span>ثبت آگهی</span>
            <span>شروع قیمت از 950000 تومان</span>
          </div>
          <div className="line-height-3">
            <span>
              <AddHomeIcon />
            </span>
          </div>
        </div>
      </span>
    </>
  );
}
