import React from "react";

const ImitationJewellery = () => {
  const recipientEmail = "sales@maithilioverseas.net";
  const subject = "Inquiry About Export Services";

  const body =
    "Hello, \n\nI am interested in your Imitation Jewellery products and would like to inquire about availability, specifications, and pricing. Please provide me with the necessary information. \n\nThank you.";

  const openEmailClient = () => {
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  return (
    <div className="flex bg-gray-100 text-gray-700 font-sans flex-col justify-center items-center p-4">
      <h1 className="text-3xl font-bold p-2">Imitation Jewellery</h1>
      <div>
        <div className="flex flex-wrap md:flex-nowrap justify-center  md:justify-start items-center p-4 m-4 bg-white">
          <img
            className=" md:w-1/3"
            src={
              "https://content.jdmagicbox.com/comp/thane/d8/022pxx22.xx22.180424135434.d9d8/catalogue/shiv-shakti-imitation-jewellery-and-bangles-bhayandar-east-thane-jewellery-showrooms-gni5wwnuk0.jpg?clr="
            }
            alt="chocolate"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold p-1 text-black">
              Elegant Imitation Jewellery Collection
            </h2>
            <p className="text-sm italic p-1">
              Exquisite Designs, Global Appeal: Your Ideal Choice for Import
            </p>
            <p className="p-1">
              Step into the dazzling world of our imitation jewellery
              collection, where elegance meets affordability. Our meticulously
              crafted pieces, ranging from contemporary designs to timeless
              classics, are designed to add a touch of glamour to any outfit. As
              a renowned exporter and sourcing agent, we bring you an array of
              exquisite jewellery that captures the beauty and finesse of
              luxurious adornments at a fraction of the cost. Each item in our
              collection reflects our commitment to quality and style. Whether
              you're looking for statement pieces or subtle accents, our
              versatile range has something for everyone. Elevate your style
              effortlessly with our enchanting jewellery collection.
              <p className="font-bold ">
                Reach out to us for orders or inquiries.
              </p>
              <button
                className="bg-[#D6A44F] text-white  py-2 px-6 rounded my-2 hover:text-black hover:bg-[#B5ED3D]
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

export default ImitationJewellery;
