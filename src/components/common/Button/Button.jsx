import React from "react";
import "./button.scss";

export default function Button({ title, onClick }) {
  return (
    <button className="common-btn" onClick={onClick}>
      {title}
    </button>
  );
}