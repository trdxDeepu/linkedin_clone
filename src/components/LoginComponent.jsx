import React, { useState } from "react";
import { RegisterApi,LoginApi } from "../api/AuthApi";
import "../sass/LoginComponent.scss";

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
  await LoginApi(data.email , data.password)
} catch (error) {
  
}

}
  return (
    <>
      <h1>Login Component</h1>
      <input
        type="text"
        placeholder="Enter email"
        className="common-input"
        value={email}
        id="email"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Enter password"
        className="common-input"
        value={password}
        id="password"
        onChange={handleChange}
      />
      <button onClick={login} className="login-btn">
        Login in linkedin
      </button>
    </>
  );
};

export default LoginComponent;
