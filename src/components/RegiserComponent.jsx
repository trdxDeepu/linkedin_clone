import React, { useState } from "react";
import { RegisterApi, googleApi } from "../api/AuthApi";
import "../sass/LoginComponent.scss";
import Logo from "../assets/linkedin-logo.png";
import GoogleButton from "react-google-button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import { navigate } from "../helper/useNaviagte";

const RegisterComponent = () => {
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

  const login = async() => {
    try {
      await RegisterApi(data.email, data.password);
      toast.success("Account Created");
      navigate("/");
    } catch (error) {
      toast.error("Cannot create your account");
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
      <img src={Logo} alt="logo" className="linkedin-logo" />
      <div className="login-wrapper-inner">
        <h1 className="heading">Make the most of your professional life</h1>

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
            placeholder="Password (6 or more character)"
            className="common-input"
            value={password}
            id="password"
            onChange={handleChange}
          />
        </div>
        <button onClick={login} className="login-btn">
          Agree & join
        </button>
      </div>
      <div className="container">
        <hr className="hr-text" data-content="or" />
      </div>

      <div className="google-btn-container">
        <GoogleButton className="google-btn" onClick={googleSign} />
        <p className="go-to-signup">
          Already on Linkedin?{" "}
          <span className="join-now" onClick={() => navigate("/login")}>
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterComponent;