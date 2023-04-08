import React, { useState } from "react";
import {  LoginApi, googleApi } from "../api/AuthApi";
import "../sass/LoginComponent.scss";
import download from "../assets/linkedin-logo.png"
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
     let res = await LoginApi(data.email, data.password);
      toast.success("Signed in sucessfully");
      localStorage.setItem('userEmail',res.user.email)
      navigate('/')
      console.log(res) 
    } catch (error) {
      toast.error("error");
    }
  };

  const googleSign = () => {
    try{
        googleApi()
        // toast.success("Signed in sucessfully")
        // navigate('/')
    }
    catch(err){
      toast.error("Can't signed in")
    }
  };

  return (
    <div className="login-wrapper">
      <img src={download} alt="logo" className="linkedinLogo" />
      <div className="login-wrapper-inner">
        <h1 className="heading">Sign in</h1>
        <p className="sub-heading ">
          Stay up to date on your professional world
        </p>

        <div className="auth-inputs">
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
