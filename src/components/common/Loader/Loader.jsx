import React from "react";
import { SyncLoader  } from "react-spinners";

const Loader = () => {
  return (
    <div className="loader">
    <p className="p-tag"> Loading please wait...</p>  
      <SyncLoader  color="#0072b1" />
    </div>
  );
};

export default Loader;
