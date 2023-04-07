import React, { useEffect, useState } from "react";
import ConnectionComponent from "../components/ConnectionComponent";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";
import Loader from "../components/common/Loader/Loader";
import { useNavigate } from "react-router-dom";


const Connection = ({currentUser}) => {
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

  return loading ? <Loader /> : <ConnectionComponent currentUser={currentUser} />;
};

export default Connection