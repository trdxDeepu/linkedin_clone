import React, { useState } from "react";
import { RegisterApi, LoginApi, googleApi } from "../api/AuthApi";
import "../sass/LoginComponent.scss";
import Logo from "../assets/linkedin-logo.png";
import GoogleButton from "react-google-button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import { navigate } from "../helper/useNaviagte";

const LoginComponent = () => {

let navigate = useNavigate();
  
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
      toast.success("done sign");
    } catch (error) {
      toast.error("error");
    }
  };

  const googleSign = async () => {
    let response = googleApi();
    console.log(response);
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
        </div>
        <button onClick={login} className="login-btn">
          Sign in
        </button>
      </div>
      <div className="container">
        <hr className="hr-text" data-content="or" />
      </div>

      <div className="google-btn-container">
        <GoogleButton className="google-btn" onClick={googleSign} />
        <p className="go-to-signup">
          New to Linkedin?{" "}
          <span className="join-now" onClick={() => navigate("/register")}>
            Join now
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginComponent;
