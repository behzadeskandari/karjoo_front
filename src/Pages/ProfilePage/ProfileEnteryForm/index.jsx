import { Box } from "@mui/material";
import React from "react";

// import { Container } from './styles';

function ProfileEntryForm() {
  return (
    <Box>
      <h2>(رابط سازمانی) اطلاعات کاربر </h2>
      <h3>هیج یک اذ اطلاعات رابط سازمانی به کارجویان نمایش نمی شود</h3>
      <Box>
        <div className="container">
          <div className="row">
            <div className="col-4 col-md-4 col-lg-4">
              <div className="form-group my-4">
                <label
                  htmlFor="InputUser"
                  className="InputUser color-grey mt-4"
                >
                  شماره موبایل یا ایمیل خود را وارد کنید
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="InputUser"
                  value={""}
                  onChange={() => console.log("test")}
                  placeholder=""
                />
              </div>
            </div>
            <div className="col-4 col-md-4 col-4">
              <div className="form-group my-4">
                <label
                  htmlFor="InputUser"
                  className="InputUser color-grey mt-4"
                >
                  شماره موبایل یا ایمیل خود را وارد کنید
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="InputUser"
                  value={""}
                  onChange={() => console.log("test")}
                  placeholder=""
                />
              </div>
            </div>
            <div className="col-4 col-md-4 col-4">
              <div className="form-group my-4">
                <label
                  htmlFor="InputUser"
                  className="InputUser color-grey mt-4"
                >
                  شماره موبایل یا ایمیل خود را وارد کنید
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="InputUser"
                  value={""}
                  onChange={() => console.log("test")}
                  placeholder=""
                />
              </div>
            </div>
            <div className="col-4 col-md-4 col-lg-4">
              <div className="form-group my-4">
                <label
                  htmlFor="InputUser"
                  className="InputUser color-grey mt-4"
                >
                  شماره موبایل یا ایمیل خود را وارد کنید
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="InputUser"
                  value={""}
                  onChange={() => console.log("test")}
                  placeholder=""
                />
              </div>
            </div>
            <div className="col-4 col-md-4 col-lg-4">
              <div className="form-group my-4">
                <label
                  htmlFor="InputUser"
                  className="InputUser color-grey mt-4"
                >
                  شماره موبایل یا ایمیل خود را وارد کنید
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="InputUser"
                  value={""}
                  onChange={() => console.log("test")}
                  placeholder=""
                />
              </div>
            </div>
            <div className="col-4 col-md-4 col-lg-4">
              <div className="form-group my-4">
                <label
                  htmlFor="InputUser"
                  className="InputUser color-grey mt-4"
                >
                  شماره موبایل یا ایمیل خود را وارد کنید
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="InputUser"
                  value={""}
                  onChange={() => console.log("test")}
                  placeholder=""
                />
              </div>
            </div>
            <div className="col-4 col-md-4 col-lg-4">
              <span className="btnHolder">
                <button
                  className="custom__ButtonCard"
                  onClick={() => console.log("testonebutton")}
                >
                  ادامه
                </button>
              </span>
            </div>

            <div className="col-4 col-md-4 col-lg-4"></div>
            <div className="col-4 col-md-4 col-lg-4"></div>
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default ProfileEntryForm;
