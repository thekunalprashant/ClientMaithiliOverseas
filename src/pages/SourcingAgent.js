import React from "react";
const SourcingAgent = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[55vh]">
      <h1 className="text-3xl p-7 text-center  font-bold">Sourcing Agent</h1>
      <div className=" flex flex-wrap justify-between ">
        <div className=" md:w-1/2 p-4">
          <h2 className="text-2xl font-bold text-teal-500 pb-2">How We Work</h2>
          <p>
            As a sourcing agent here is all the task, which we manage to fulfill
            requirements of our buyers and deliver their order according their
            needs in given timeline.
          </p>
        </div>
        <div className=" md:w-1/2 p-4">
          <div className="">
            <ul style={{ listStyleType: "disc" }}>
              <li>We find manufacturer as per buyer requirement.</li>
              <li>We negotiate and fix deal in suitable price range.</li>
              <li>We arrange transportation and handle full consignment.</li>
              <li>
                If buyer have supplier and manufacturer then we also provide
                shipment or transportation service.
              </li>
              <li>We can source products from multiple suppliers.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SourcingAgent;
