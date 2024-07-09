// SignUpPage.js
import React, { useLayoutEffect, useState, useEffect } from "react";
import { debounce } from "../../utility/index";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Loader from "../../components/Loader/Loader";
const SignUpPage = () => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [isDesktop, setIsDesktop] = useState(false);
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  //region Effects
  useLayoutEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 50);
    if (dimensions.width < 992) {
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
      //setIsClearable(false);
    }
    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 50);
    if (dimensions.width < 992) {
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
      //setIsClearable(false);
    }
    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, [dimensions]);

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

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="container height-90vh align-content-center">
      {/* {loading ? (
        <Loader />
      ) : ( */}
      <TransitionGroup>
        <CSSTransition key={step} timeout={300} classNames="step">
          {step === 1 ? (
            <LoginSectionStepOne
              isDesktop={isDesktop}
              phoneNumber={phoneNumber}
              onPhoneNumberChange={handlePhoneNumberChange}
              onNextStep={handleNextStep}
            />
          ) : (
            <>
              <ArrowBackIcon onClick={handlePrevStep} />
              <LoginSectionStepTwo
                isDesktop={isDesktop}
                phoneNumber={phoneNumber}
                password={password}
                onPasswordChange={handlePasswordChange}
              />
            </>
          )}
        </CSSTransition>
      </TransitionGroup>
      {/* )} */}
    </div>
  );
};
//region StepOne
const LoginSectionStepOne = ({
  isDesktop,
  phoneNumber,
  onPhoneNumberChange,
  onNextStep,
}) => {
  return (
    <div className="row step">
      <div
        className={`${isDesktop ? "HeaderLogin  w-50 marg-7" : "HeaderLogin"}`}
      >
        <span className="color-grey mx-2">کارفرما هستید؟</span>
        <span className="color-blue mx-2">ورود به بخش کارفرمایی</span>
      </div>

      <div
        className={`Login-card ${
          isDesktop ? "col-5 col-md-5" : "col-10 col-md-10"
        }`}
      >
        <h3 className="WebSiteName">کارجو</h3>
        <h4 className="text-center">
          <strong>
            <span className="m-1">ثبت نام|</span>
          </strong>
          <span className="color-grey">جوینده کار</span>
        </h4>
        <div className="form-group my-4 ">
          <label htmlFor="InputUser" className="InputUser color-grey mt-4">
            شماره موبایل یا ایمیل خود را وارد کنید
          </label>
          <input
            type="text"
            className="form-control"
            id="InputUser"
            value={phoneNumber}
            onChange={onPhoneNumberChange}
            placeholder=""
          />
          <span className="btnHolder">
            <button className="custom__ButtonCard" onClick={onNextStep}>
              ادامه
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};
//region StepTwo
const LoginSectionStepTwo = ({
  isDesktop,
  phoneNumber,
  password,
  onPasswordChange,
}) => {
  return (
    <div className="row step">
      <div className={`${isDesktop ? "HeaderLogin  w-50" : "HeaderLogin"}`}>
        <span className="color-grey mx-2">کارفرما هستید؟</span>
        <span className="color-blue mx-2">ورود به بخش کارفرمایی</span>
      </div>
      <div
        className={`Login-card ${
          isDesktop ? "col-5 col-md-5" : "col-10 col-md-10"
        }`}
      >
        <h3 className="WebSiteName">کارجو</h3>
        <h4 className="text-center">
          <strong>
            <span className="m-1">رمز عبور خود را وارد کنید</span>
          </strong>
        </h4>
        <h5 className="text-center pt-3 mt-2">
          <span>ورود با</span>
          <span>{phoneNumber}</span>
        </h5>
        <div className="form-group my-4 ">
          <label htmlFor="InputPassword" className="InputUser color-grey mt-4">
            رمز عبور خود را وارد کنید
          </label>
          <input
            type="password"
            className="form-control"
            id="InputPassword"
            value={password}
            onChange={onPasswordChange}
            placeholder=""
          />
          <span className="btnHolder">
            <button className="custom__ButtonCard">ورود</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
