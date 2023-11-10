import React from "react";

const WhatWeDo = () => {
  return (
    <div className="relative py-7">
      <img
        className="h-[85vh] md:w-full md:h-[50vh]  blur"
        src="https://img.freepik.com/free-photo/aerial-view-cargo-ship-cargo-container-harbor_335224-1370.jpg?w=1060&t=st=1699653830~exp=1699654430~hmac=49806e34be1d387e066dd2c208dcb6b07a0f4888053423b16a01a91bac8fbfcd"
        alt="background imagesection"
      />
      <div className="h-[85vh] md:w-full md:h-[50vh] absolute top-0 left-0 right-0 text-white bg-black my-7 p-7 bg-opacity-60 flex flex-col justify-center items-center">
        <h1 className="text-center text-3xl font-bold mb-7 ">What We Do</h1>
        <div className="flex gap-6 flex-wrap md:flex-nowrap ">
          <div className="card-item border border-white p-4">
            <h2 className="font-bold text-xl py-1">Export</h2>
            <p className="text-base ">
              We are Exporting best quality product around the world, You need
              best product on time you are at right place
            </p>
          </div>
          <div className="card-item border border-white p-4">
            <h2 className="font-bold text-xl py-1">
              Import agent (for foreign client)
            </h2>
            <p className="text-base ">
              We help foreign company to introduce his best quality product in
              India and help them to find local partners in India
            </p>
          </div>
          <div className="card-item border border-white p-4">
            <h2 className="font-bold text-xl py-1">Sourcing Agent</h2>
            <p className="text-base ">
              We are working as local partner of our foreign client to source
              best quality product from India as per client requirement and
              Specification
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
