import React from "react";
import Apeda from "../images/Apeda.png";
import Msme from "../images/Msme.png";
const CertifiedBy = () => {
  return (
    <div className=" p-4">
      <div className="certifiedBy flex justify-center">
        <h3 className="text-2xl font-bold p-4">Membership & Certification</h3>
      </div>
      <div className="container flex flex-wrap justify-evenly">
        <div className="card flex justify-center items-center">
          <img className="h-48 object-center" src={Apeda} alt="Apeda" />
        </div>
        <div className="card flex justify-center items-center">
          <img className="h-48" src={Msme} alt="Msme" />
        </div>
      </div>
      
    </div>
  );
};

export default CertifiedBy;
