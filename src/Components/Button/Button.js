import React from "react";
import "./style.css";

export default function Button({ text }) {
  return (
    <div
      className="magnetic-wrap button-animation-1"
      style={{ display: "inline-block", cursor: "pointer" }}
    >
      <div className="magnetic-area"></div>
      <button className="btn-component magnetic-content btn-animate">
        <span className="btn-animate__filler"></span>
        <span className="btn-animate__text">{text}</span>
      </button>
    </div>
  );
}
