import React from "react";

const CopperBottles = () => {
  const recipientEmail = "maithilioverseas@hotmail.com";
  const subject = "Inquiry About Export Services";

  const body =
    "Hello, \n\nI am interested in your Copper Bottles products and would like to inquire about availability, specifications, and pricing. Please provide me with the necessary information. \n\nThank you.";

  const openEmailClient = () => {
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  return (
    <div className="flex bg-gray-100 text-gray-700 font-sans flex-col justify-center items-center p-4">
      <h1 className="text-3xl font-bold p-2">Copper Bottles</h1>
      <div>
        <div className="flex flex-wrap md:flex-nowrap justify-center  md:justify-start items-center p-4 m-4 bg-white">
          <img
            className=" md:w-1/3"
            src={
              "https://c.ndtvimg.com/2021-12/qodbfnh_copper-bottle_625x300_16_December_21.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350"
            }
            alt="chocolate"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold p-1 text-black">
              Premium Copper Bottles Collection
            </h2>
            <p className="text-sm italic p-1">
              Traditional Elegance, Global Demand: A Prime Choice for Importers
            </p>
            <p className="p-1">
              Explore our Premium Copper Bottles Collection, where tradition
              meets contemporary demand. As esteemed exporters, we present a
              range of copper bottles that exemplify the perfect blend of
              traditional Indian craftsmanship and modern utility. Each bottle
              in our collection is a testament to quality and durability,
              designed to cater to the growing global interest in sustainable
              and health-conscious products. Our copper bottles are not only
              aesthetically pleasing but also offer the functional benefits of
              copper, making them a sought-after item in international markets.
              We ensure that every piece resonates with the highest standards of
              excellence, ready to enrich your inventory with their unique
              appeal. For importers seeking to diversify their offerings with
              products that blend tradition, health, and elegance, our
              collection is the ideal choice. We are dedicated to providing you
              with the best in quality and service, making every import a
              seamless and rewarding experience.
              <p className="font-bold ">
                Reach out to us for orders or inquiries.
              </p>
              <button
                className="bg-[#D3B09A] py-2 px-6 rounded my-2 text-black hover:bg-[#B5ED3D]
    duration-500"
                onClick={openEmailClient}
              >
                Lets Connect
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopperBottles;
