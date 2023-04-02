import React, { useState } from "react";
import { RegisterApi, LoginApi } from "../api/AuthApi";
import "../sass/LoginComponent.scss";
import Logo from "../assets/linkedin-logo.png";
import GoogleButton from "react-google-button";

const LoginComponent = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  const login = async () => {
    try {
      await LoginApi(data.email, data.password);
    } catch (error) {}
  };
  return (
    <div className="login-wrapper">
      <img src={Logo} alt="logo" className="linkedin-logo" />
      <div className="login-wrapper-inner">
        <h1 className="heading">Sign in</h1>
        <p className="sub-heading">
          Stay up to date on your professional world
        </p>

        <div className="auth-input">
          <input
            type="email"
            placeholder="Email or Phone"
            className="common-input"
            value={email}
            id="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="common-input"
            value={password}
            id="password"
            onChange={handleChange}
          />
          <button onClick={login} className="login-btn">
            Sign in
          </button>
        </div>
        <hr className="hr-text" data-content="or" />
        <div className="google-btn-container">
          <GoogleButton
            className="google-btn"
            onClick={() => {
              console.log("Google button clicked");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
