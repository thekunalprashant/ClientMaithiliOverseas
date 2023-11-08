import React from "react";
import { Carousel } from "flowbite-react";
import Chocolate from "../images/Chocolates.png";
import Flavoured from "../images/Flavoured.png";
import ShahiKheer from "../images/ShahiKheer.png";
import FlavouredNuts from "../images/FlavouredNuts.png";

const HeaderSlider = () => {
  return (
    <div className="h-56 sm:h-96 lg:h-[90vh] ">
      {/* <div className="text-overlay w-[70vw]  h-56 sm:h-96 lg:h-[92vh] flex flex-col justify-center items-center">
        <h2 className="text-title text-xl sm:text-3xl lg:text-5xl font-bold">
          Welcome to Maithili Overseas
        </h2>
        <p className="text-description text-sm sm:text-xl lg:text-2xl">
          Your Trusted Partner in Quality Exports
        </p>
      </div> */}
      <Carousel>
        <img src={Flavoured} alt="..." />
        <img src={ShahiKheer} alt="..." />
        <img src={Flavoured} alt="..." />
        <img src={Chocolate} alt="..." />
        <img src={FlavouredNuts} alt="..." />
        {/* <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="..."
        />
        <img
          src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="..."
        /> */}
      </Carousel>
    </div>
  );
};

export default HeaderSlider;
