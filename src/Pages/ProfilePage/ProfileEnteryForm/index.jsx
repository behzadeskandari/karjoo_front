import { Box } from "@mui/material";
import React, { Fragment, useEffect, useLayoutEffect, useState } from "react";
import Footer from "../../MainPage/Footer/Footer";
import logo from "../../../assets/images/1.jpg";
import { useIsDesktop } from "../../../hooks/useIsDesktop";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// import { Container } from './styles';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function ProfileEntryForm() {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const handleNextStep = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(step + 1);
    }, 400); // Simulate a network request
  };
  const handlePrevStep = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(step - 1);
    }, 400); // Simulate a network request
  };

  const isDesktop = useIsDesktop();
  return (
    <Box>
      <TransitionGroup>
        <CSSTransition key={step} timeout={300} classNames="step">
          {/* Create a terynary condition based on step  */}
          {/* {step === 1 ? <StepOneProfileEntry /> : <StepTwoProfileEntry /> : <StepThreeProfileEntry/>} */}
          <>
            {step === 1 ? (
              <>
                <ArrowBackIcon onClick={handlePrevStep} />
                <StepOneProfileEntry onNextStep={handleNextStep} />
              </>
            ) : step === 2 ? (
              <>
                <ArrowBackIcon onClick={handlePrevStep} />
                <StepTwoProfileEntry onNextStep={handleNextStep} />
              </>
            ) : (
              <>
                <ArrowBackIcon onClick={handlePrevStep} />
                <StepThreeProfileEntry />
              </>
            )}
            <Footer isDesktop={isDesktop} logo={logo} />
          </>
        </CSSTransition>
      </TransitionGroup>
    </Box>
  );
}

export default ProfileEntryForm;

const StepOneProfileEntry = ({ onNextStep }) => {
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
                <button className="custom__ButtonCard" onClick={onNextStep}>
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

const StepTwoProfileEntry = ({ onNextStep }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 col-md-4 col-lg-4">
          <div className="form-group my-4">
            <label
              htmlFor="InputProfileName"
              className="InputUser color-grey mt-4"
            >
              نام سازمان
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
              نام انگلیسی سازمان
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
              آدرس وب سایت
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

        <div className="col-4 col-md-4 col-lg-4">
          <div className="form-group my-4">
            <label
              htmlFor="InputUserCellPhone"
              className="InputUser color-grey mt-4"
            >
              تلفن سازمانی
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
              htmlFor="InputUserCellPhone"
              className="InputUser color-grey mt-4"
            >
              صنعت
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
              اندازه سازمان
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
        <div
          className="col-4 col-md-4 col-lg-4 align-content-end"
          style={{ paddingBottom: "1em" }}
        >
          <span className="btnHolder">
            <button
              className="custom__ButtonCard"
              onClick={onNextStep}
              // onClick={() => console.log("testonebutton")}
            >
              ادامه
            </button>
          </span>
        </div>

        <div className="col-4 col-md-4 col-lg-4">
          <div className="form-group my-4">
            <label
              htmlFor="InputUserOrganizationPhone"
              className="InputUser color-grey mt-4"
            >
              شهر
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
        <div className="col-4 col-md-4 col-lg-4">
          <div className="form-group my-4">
            <label
              htmlFor="InputUserOrganizationPhone"
              className="InputUser color-grey mt-4"
            >
              توضیحی کوتاه در مورد زمینه کار سازمان
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
        <div className="col-4 col-md-4 col-lg-4">
          <div className="form-group my-4">
            <label
              htmlFor="InputUserOrganizationPhone"
              className="InputUser color-grey mt-4"
            >
              لوگو
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
        <div className="col-4 col-md-4 col-lg-4">
          <div className="form-group my-4">
            <label
              htmlFor="InputUserOrganizationPhone"
              className="InputUser color-grey mt-4"
            >
              شرح سازمان
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
      </div>
    </div>
  );
};

const StepThreeProfileEntry = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 col-md-4 col-lg-4">
          <div className="form-group my-4">
            <label
              htmlFor="InputProfileName"
              className="InputUser color-grey mt-4"
            >
              تصویر زورنامه رسمی یا پروانه کسب
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
              (نمونه تصویر) تصویر نما
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
              سال تاسیس
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

        <div className="col-4 col-md-4 col-lg-4">
          <div className="form-group my-4">
            <label
              htmlFor="InputUserCellPhone"
              className="InputUser color-grey mt-4"
            >
              نوع فعالیت
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
              htmlFor="InputUserCellPhone"
              className="InputUser color-grey mt-4"
            >
              نوع مالکیت
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
              برند ها
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
              htmlFor="InputUserOrganizationPhone"
              className="InputUser color-grey mt-4"
            >
              مزایا و تسهیلات سازمانی
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
        <div className="col-4 col-md-4 col-lg-4">
          <div className="form-group my-4">
            <label
              htmlFor="InputUserOrganizationPhone"
              className="InputUser color-grey mt-4"
            >
              محصولات یا خدمات
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
      </div>
    </div>
  );
};
