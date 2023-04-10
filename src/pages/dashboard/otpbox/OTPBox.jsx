import React, { useState } from "react";

const OTPBox = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <div>
      <div className="row">
        {otp.map((data, index) => {
          return (
            <input
              className="otp-field mr-[3.25rem] w-20 h-20 font-medium text-[34px] text-center border-[3.67424px] border-[#D9D9D9] rounded-[0.9375rem] outline-none"
              type="text"
              name="otp"
              maxLength="1"
              key={index}
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onFocus={(e) => e.target.select()}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OTPBox;
