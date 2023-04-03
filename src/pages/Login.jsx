import React, { useEffect, useState } from "react";
import LoginComponent from "../components/LoginComponent";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import Loader from "../common/Loader/Loader";
const Login = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res?.accessToken) {
        navigate("/");
      } else {
        setLoading(false);
      }
    });
  });
  return loading ? <Loader /> : <LoginComponent />;
};

export default Login;
