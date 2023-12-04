import React from "react";

const GetinTouch = () => {
  const recipientEmail = "sales@maithilioverseas.net";
  const subject = "Inquiry About Export Services";

  const body =
    "Hello, \n\nI am interested in your products and would like to inquire about availability, specifications, and pricing. Please provide me with the necessary information. \n\nThank you.";

  const openEmailClient = () => {
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  return (
    <div className="flex justify-center py-28">
      <div className="bg-[#F1F4F8] flex flex-col justify-center items-center rounded-3xl w-4/5 h-[50vh]">
        <p className="text-4xl lg:text-5xl font-bold p-8">Get in Touch</p>
        <button
          className="rounded-3xl border px-16 py-3 border-white bg-[#B5ED3D] hover:bg-gray-950 hover:text-white"
          onClick={openEmailClient}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default GetinTouch;
