import React from "react";
import "./Switch.css";

const Switch = () => {
  return (
    <label class="switch">
      <input type="checkbox" />
      <span class="slider round"></span>
    </label>
  );
};

export default Switch;
