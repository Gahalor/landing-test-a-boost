import React from "react";

import { arrow } from "../assets";

const Button = ({ styles }) => (
  <a href={`#demo`}>
    <button type="button" className={`py-6 px-6 font-poppins font-medium text-[18px] text-primary rounded-[10px] outline-none ${styles}`}>
      <div className="flex flex-col justify-center items-center">
        <p className="font-semibold">
          Demo
        </p>
        <img src={arrow} alt="billing" className="w-[40px] mt-2 relative z-[5]" />
      </div>
    </button>
  </a>
);

export default Button;