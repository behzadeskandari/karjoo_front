// LoginPage.js
import React from "react";
import { useDispatch } from "react-redux";
import login from "../../actions/LoginAction/LoginAction";
import "./LoginPage.css";
const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ username: "user" }));
  };

  return (
    <div className="container">
      {/* <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button> */}
      <div className="row">
        <div className="HeaderLogin">
          <span className="color-grey mx-2">کارفرما هستید؟</span>
          <span className="color-blue mx-2">ورود به بخش کارفرمایی</span>
        </div>
        <div className="Login-card">
          <h3 className="WebSiteName">کارجو</h3>
          <h4 className="text-center">
            {" "}
            <strong>
              <span className="m-1">ورود| </span>{" "}
              <span className="m-1">ثبت نام|</span>{" "}
            </strong>
            <span className="color-grey">جوینده کار</span>
          </h4>
          <div class="form-group my-4 pad-center">
            <label for="InputUser" className="InputUser color-grey mt-4">
              شماره موبایل یا ایمل خود را وارد کنید
            </label>
            <input
              type="text"
              class="form-control"
              id="InputUser"
              placeholder=""
            />
            <span className="btnHolder">
              <button>ادامه</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
