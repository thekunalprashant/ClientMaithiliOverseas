import React from "react";
import Products from "../components/Products";
import Faqs from "../components/Faqs";
import CertifiedBy from "../components/CertifiedBy";
import GetinTouch from "../components/GetinTouch";
import Review from "../components/Review";
import HeaderSlider from "../components/HeaderSlider";

const Body = () => {
  return (
    <>
      <HeaderSlider />
      <Products />
      <Review />
      <Faqs />
      <CertifiedBy />
      <GetinTouch />
    </>
  );
};

export default Body;
