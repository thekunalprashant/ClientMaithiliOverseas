import React from "react";
import Products from "../components/Products";
import Faqs from "../components/Faqss";
import CertifiedBy from "../components/CertifiedBy";
import GetinTouch from "../components/GetinTouch";
import Review from "../components/Review";
import HeaderSlider from "../components/HeaderSlider";
import WhatWeDo from "../components/WhatWeDo";
import Aboutshort from "../components/Aboutshort";

const Body = () => {
  return (
    <>
      <HeaderSlider />
      <Aboutshort />
      <WhatWeDo />
      <Products />
      <Review />
      <Faqs />
      <CertifiedBy />
      <GetinTouch />
    </>
  );
};

export default Body;
