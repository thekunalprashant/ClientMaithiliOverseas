import React from "react";
const Denims = () => {
  const recipientEmail = "sales@maithilioverseas.net";
  const subject = "Inquiry About Export Services";

  const body =
    "Hello, \n\nI am interested in your Denim products and would like to inquire about availability, specifications, and pricing. Please provide me with the necessary information. \n\nThank you.";

  const openEmailClient = () => {
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  return (
    <div className="flex bg-gray-100 text-gray-700 font-sans flex-col justify-center items-center p-4">
      <h1 className="text-3xl font-bold p-2">Denims</h1>
      <div>
        <div className="flex flex-wrap md:flex-nowrap justify-center  md:justify-start items-center p-4 m-4 bg-white">
          <img
            className=" md:w-1/3"
            src={"https://unitradebd.net/assets/pages/img/denim1.png"}
            alt="chocolate"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold p-1 text-black">
              Premium Denim Collection from India
            </h2>
            <p className="text-sm italic p-1">
              The Essence of Quality and Style
            </p>
            <p className="p-1">
              Explore our distinguished denim collection, a showcase of India's
              rich textile legacy seamlessly merged with modern trends.
              Specializing in exports and sourcing, our denims stand out for
              their exceptional quality and sustainable craftsmanship. Ranging
              from classic to contemporary styles, our versatile collection
              promises to cater to your every fashion need. We prioritize
              ethical sourcing and environmental stewardship in every piece we
              offer. For a hassle-free experience, simply contact us for any
              orders or inquiries.
              <p className="font-bold ">
                Experience the perfect blend of style, quality, and
                responsibility with just a click.
              </p>
              <button
                className="bg-[#1F3C5A] text-white  py-2 px-6 rounded my-2 hover:text-black hover:bg-[#B5ED3D]
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

export default Denims;
