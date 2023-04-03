import React from "react";
import "./topbar.scss";
import Linkedin from "../../assets/linkedin.png";
import {
  AiOutlineHome,
  AiOutlineUserSwitch,
  AiOutlineSearch,
  AiOutlineMessage,
  AiOutlineBell,
} from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";
import User from "../../assets/user.png";

const Topbar = () => {
  return (
    <div className="topbar-main">
      <img src={Linkedin} alt="logo" className="linkedin-logo" />
      <div className="topbar-icons">
        <AiOutlineSearch size={25} className="react-icons" />
        <AiOutlineHome size={30} className="react-icons" />
        <AiOutlineUserSwitch size={30} className="react-icons" />
        <BsBriefcase size={30} className="react-icons" />
        <AiOutlineMessage size={30} className="react-icons" />
        <AiOutlineBell size={30} className="react-icons" />
      </div>

      <img src={User} alt="userIcon" className="user-logo" />
    </div>
  );
};

export default Topbar;
