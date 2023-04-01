import React from "react";
import {LoginApi} from '../api/AuthApi'
import '../sass/LoginComponent.scss'

const LoginComponent = () => {

  const login = () =>{
   let res =    LoginApi();
   console.log(res)
  }

  return (
    <>
      <h1>Login Component</h1>
      <button onClick={login} className="login-btn">Login in linkedin</button>
    </>
  );
};

export default LoginComponent;
