import React from "react";

const Handicraft = () => {
  const recipientEmail = "maithilioverseas@hotmail.com";
  const subject = "Inquiry About Export Services";

  const body =
    "Hello, \n\nI am interested in your Handicraft Products and would like to inquire about availability, specifications, and pricing. Please provide me with the necessary information. \n\nThank you.";

  const openEmailClient = () => {
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  return (
    <div className="flex bg-gray-100 text-gray-700 font-sans flex-col justify-center items-center p-4">
      <h1 className="text-3xl font-bold p-2">Handicraft Products</h1>
      <div>
        <div className="flex flex-wrap md:flex-nowrap justify-center  md:justify-start items-center p-4 m-4 bg-white">
          <img
            className=" md:w-1/3"
            src={
              "https://img.freepik.com/free-photo/multiple-carpets-grand-bazaar-istanbul-turkey_1268-21688.jpg?w=1060&t=st=1699087128~exp=1699087728~hmac=5d699603fe5cb193c5a8a6e7d60358695b8227d942542a04b658dd9c75ddcc78"
            }
            alt="chocolate"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold p-1 text-black">
              Exquisite Handicraft Collection
            </h2>
            <p className="text-sm italic p-1">
              Authentic Artistry, Global Charm: Elevate Your Inventory with Our
              Handcrafted Wonder
            </p>
            <p className="p-1">
              Immerse yourself in the world of exquisite handicrafts, where each
              piece tells a story of tradition and craftsmanship. Our
              collection, sourced from the skilled artisans of India, offers an
              array of products that embody the rich cultural heritage of the
              region. From intricately designed home decor to bespoke
              accessories, our handicrafts are a testament to the artistry and
              finesse of traditional Indian craftsmanship. Made with sustainable
              practices and ethical sourcing, our products not only add elegance
              to your space but also support the livelihoods of local artisans.
              <p className="font-bold ">
                Easily contact us for orders or inquiries, ensuring a seamless
                experience as you bring a piece of Indian heritage into your
                life.
              </p>
              <button
                className="bg-[#100A0A] text-white  py-2 px-6 rounded my-2 hover:text-black hover:bg-[#B5ED3D]
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

export default Handicraft;
