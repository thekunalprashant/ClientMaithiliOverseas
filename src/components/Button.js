import React from "react";

const Button = (props) => {
  return (
    <button
      className="bg-[#B5ED3D] text-black  py-2 px-6 rounded md:ml-8 hover:text-white hover:bg-[#000000c4]
    duration-500"
    >
      {props.children}
    </button>
  );
};

export default Button;
