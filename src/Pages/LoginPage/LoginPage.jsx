// LoginPage.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import login from "../../actions/LoginAction/LoginAction";
import "./LoginPage.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Loader from "../../components/Loader/Loader";
const LoginPage = () => {
  //region Dispatch
  const dispatch = useDispatch();

  //region State
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  //region Functions
  const handleLogin = () => {
    dispatch(login({ username: "user" }));
  };

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

  //region return
  return (
    <div className="container">
      {/* {loading ? (
        <Loader />
      ) : ( */}
      <TransitionGroup>
        <CSSTransition key={step} timeout={300} classNames="step">
          {step === 1 ? (
            <LoginSectionStepOne
              phoneNumber={phoneNumber}
              onPhoneNumberChange={handlePhoneNumberChange}
              onNextStep={handleNextStep}
            />
          ) : (
            <>
              <ArrowBackIcon onClick={handlePrevStep} />
              <LoginSectionStepTwo
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
  //region end return
};
//region StepOne
const LoginSectionStepOne = ({
  phoneNumber,
  onPhoneNumberChange,
  onNextStep,
}) => {
  return (
    <div className="row">
      <div className="HeaderLogin">
        <span className="color-grey mx-2">کارفرما هستید؟</span>
        <span className="color-blue mx-2">ورود به بخش کارفرمایی</span>
      </div>
      <div className="Login-card col-10 col-md-10">
        <h3 className="WebSiteName">کارجو</h3>
        <h4 className="text-center">
          <strong>
            <span className="m-1">ورود| </span>
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
const LoginSectionStepTwo = ({ phoneNumber, password, onPasswordChange }) => {
  return (
    <div className="row">
      <div className="HeaderLogin">
        <span className="color-grey mx-2">کارفرما هستید؟</span>
        <span className="color-blue mx-2">ورود به بخش کارفرمایی</span>
      </div>
      <div className="Login-card col-10 col-md-10">
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

export default LoginPage;
