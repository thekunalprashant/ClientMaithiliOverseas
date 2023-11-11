import React from "react";
import aboutShort from "../images/aboutShort.avif"

const Aboutshort = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap  p-7">
      <div className="px-7 py-2">
        <p className="font-bold text-2xl pb-2 text-center ">About Maithili Overseas</p>
        <p className="italic font-semibold text-center ">
          Welcome to Maithili Overseas. We appreciate your interest in our
          company.
        </p>
        <p className="text-justify">
          At Maithili Overseas, we have built a strong reputation and a trusted
          name for ourselves. Our core focus lies in the export of a diverse
          range of products, including wooden handicrafts, glass items, handmade
          products, photo frames, handmade clothing, decorative items, and
          various types of wooden temples. Our products are characterized by
          their elegance, style, and exceptional quality, setting us apart in
          the market.
        </p>
        <p className="text-justify">
          With a well-established global clientele, we are committed to
          delivering not only superior quality but also ensuring timely
          deliveries. We recognize the significance of maintaining high
          standards of quality and meeting delivery timelines in the competitive
          and dynamic landscape of international business.
        </p>
        <p className="italic">
          Thank you for considering Maithili Overseas as your trusted partner in
          the export-import industry.
        </p>
      </div>
      <img className="  lg:w-1/3"
        src={aboutShort} alt="containers"
      />
    </div>
  );
};

export default Aboutshort;
