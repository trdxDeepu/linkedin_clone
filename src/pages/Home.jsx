import React, { useEffect, useState } from "react";
import HomeComponent from "../components/HomeComponent";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";
import Loader from "../components/common/Loader/Loader";
import { useNavigate } from "react-router-dom";

const Home = ({currentUser}) => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (!res?.accessToken) {
        navigate("/login");
      
      }
      else{
        setLoading(false)
      }
    });
  });

  return loading ? <Loader /> : <HomeComponent currentUser={currentUser} />;
};

export default Home;
