import React from "react";
import "./Checkbox1.css";

const Checkbox1 = ({ text1, text2, text3 }) => {
  return (
    <div className="">
      <label class="container">
        <p className="">{text1}</p>
        <input type="checkbox" />
        <span class="checkmark"></span>
      </label>
      <label class="container">
        <p className="">{text2}</p>
        <input type="checkbox" />
        <span class="checkmark"></span>
      </label>
      <label class="container">
        <p className="">{text3}</p>
        <input type="checkbox" />
        <span class="checkmark"></span>
      </label>
    </div>
  );
};

export default Checkbox1;
