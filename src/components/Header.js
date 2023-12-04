import React, { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";
const Header = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/Products" },
    { name: "Sourcing Agent", link: "/Sourcing-agent" },
    { name: "About Us", link: "/About-us" },
    { name: "Contact Us", link: "/Contact-us" },
  ];
  let [open, setOpen] = useState(false);

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
    <div className="shadow-md w-full top-0 left-0 ">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center 
      text-gray-800"
        >
          <Link to={"/"}>Maithili Overseas</Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <HiOutlineMenuAlt1 name={open ? "close" : "menu"}></HiOutlineMenuAlt1>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] right-0 w-1/2 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-16 shadow-sm z-[100] " : "hidden"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-lg md:my-0 my-7">
              <Link
                to={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <button
            className="bg-[#B5ED3D] text-black  py-2 px-6 rounded md:ml-8 hover:text-white hover:bg-[#000000c4]
    duration-500"
            onClick={openEmailClient}
          >
            Get Started
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
