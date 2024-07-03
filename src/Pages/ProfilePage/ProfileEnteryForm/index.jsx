import { Box } from "@mui/material";
import React, { Fragment, useEffect, useLayoutEffect, useState } from "react";
import Footer from "../../MainPage/Footer/Footer";
import logo from "../../../assets/images/1.jpg";
import { useIsDesktop } from "../../../hooks/useIsDesktop";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// import { Container } from './styles';

function ProfileEntryForm() {
  const isDesktop = useIsDesktop();
  const [step, setStep] = useState(1);
  return (
    <Box>
      <TransitionGroup>
        <CSSTransition key={step} timeout={300} classNames="step">
          {step === 1 ? <StepOneProfileEntry /> : <StepTwoProfileEntry />}
        </CSSTransition>
      </TransitionGroup>
      <Footer isDesktop={isDesktop} logo={logo} />
    </Box>
  );
}

export default ProfileEntryForm;

const StepOneProfileEntry = () => {
  return (
    <Fragment>
      <h2 className="text-right color-grey py-5">
        (رابط سازمانی) اطلاعات کاربر{" "}
      </h2>
      <h3 className="text-right color-grey py-2">
        هیج یک از اطلاعات رابط سازمانی به کارجویان نمایش نمی شود
      </h3>
      <Box>
        <div className="container">
          <div className="row">
            <div className="col-4 col-md-4 col-lg-4">
              <div className="form-group my-4">
                <label
                  htmlFor="InputProfileName"
                  className="InputUser color-grey mt-4"
                >
                  نام
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="InputProfileName"
                  value={""}
                  onChange={() => console.log("test")}
                  placeholder=""
                />
              </div>
            </div>
            <div className="col-4 col-md-4 col-4">
              <div className="form-group my-4">
                <label
                  htmlFor="InputUserLastName"
                  className="InputUser color-grey mt-4"
                >
                  نام خانوادگی
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="InputUserLastName"
                  value={""}
                  onChange={() => console.log("test")}
                  placeholder=""
                />
              </div>
            </div>
            <div className="col-4 col-md-4 col-4">
              <div className="form-group my-4">
                <label
                  htmlFor="InputOrganizationPosition"
                  className="InputUser color-grey mt-4"
                >
                  سمت سازمانی
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="InputOrganizationPosition"
                  value={""}
                  onChange={() => console.log("test")}
                  placeholder=""
                />
              </div>
            </div>
            <div
              className="col-4 col-md-4 col-lg-4 align-content-end"
              style={{ paddingBottom: "1em" }}
            >
              <span className="btnHolder">
                <button
                  className="custom__ButtonCard"
                  onClick={() => console.log("testonebutton")}
                >
                  ادامه
                </button>
              </span>
            </div>

            <div className="col-4 col-md-4 col-lg-4">
              <div className="form-group my-4">
                <label
                  htmlFor="InputUserCellPhone"
                  className="InputUser color-grey mt-4"
                >
                  تلفن همراه
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="InputUserCellPhone"
                  value={""}
                  onChange={() => console.log("test")}
                  placeholder=""
                />
              </div>
            </div>
            <div className="col-4 col-md-4 col-lg-4">
              <div className="form-group my-4">
                <label
                  htmlFor="InputUserOrganizationPhone"
                  className="InputUser color-grey mt-4"
                >
                  شماره تلفن سازمان مستقیم شما
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="InputUserOrganizationPhone"
                  value={""}
                  onChange={() => console.log("test")}
                  placeholder=""
                />
              </div>
            </div>

            <div className="col-4 col-md-4 col-lg-4"></div>
            <div className="col-4 col-md-4 col-lg-4"></div>
            <div className="col-4 col-md-4 col-lg-4"></div>
          </div>
        </div>
      </Box>
    </Fragment>
  );
};

const StepTwoProfileEntry = () => {};

const StepThreeProfileEntry = () => {};
