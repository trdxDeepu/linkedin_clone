import React, { useEffect, useState } from "react";
import ProfileComponent from "../components/ProfileComponent";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";
import Loader from "../components/common/Loader/Loader";
import { useNavigate } from "react-router-dom";

const Profile = ({ currentUser }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (!res?.accessToken) {
        navigate("/login");
      } else {
        setLoading(false);
      }
    });
  });
  return loading ? <Loader /> : <ProfileComponent currentUser={currentUser} />;
};

export default Profile;
