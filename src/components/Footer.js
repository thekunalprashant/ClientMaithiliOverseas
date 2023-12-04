import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="  text-white">
        <div class="container bg-gray-950 p-4 lg:px-20 mx-auto ">
          <div className="lg:flex lg:justify-between">
            <div className="brandText pb-8">
              <h1 className="text-xl">Maithili Overseas</h1>
              <p className="max-w-sm mt-2 text-gray-400">
                Welcome to Maithili Overseas, where heritage meets innovation.
              </p>
            </div>
            <div className="quickcontact md:flex lg:flex  gap-12">
              <div className="QuickLinks">
                <p className="text-lg ">Quick Links</p>
                <ul className="max-w-sm font-bold mt-2 text-gray-400 pb-5">
                  <li className="hover:text-white">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="hover:text-white">
                    <Link to={"/Sourcing-agent"}>Sourcing Agents</Link>
                  </li>
                  <li className="hover:text-white">
                    <Link to={"/About-us"}>About Us</Link>
                  </li>
                  <li className="hover:text-white">
                    <Link to={"/Contact-us"}>Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="products">
                <p className="text-lg ">Products</p>
                <ul className="max-w-sm font-bold mt-2 text-gray-400 pb-5 ">
                  <li className="hover:text-white">
                    <Link to={"/Products/Makhana"}>Makhana (Fox Nuts)</Link>
                  </li>
                  <li className="hover:text-white">
                    <Link to={"/Products/Jewellery"}>Imitation Jewellery</Link>
                  </li>
                  <li className="hover:text-white">
                    <Link to={"/Products/Copper-Bottles"}>Copper Bottles</Link>
                  </li>
                  <li className="hover:text-white">
                    <Link to={"/Products/Handicraft"}>Handicraft Products</Link>
                  </li>
                  <li className="hover:text-white">
                    <Link to={"/Products/Denims"}>Denims</Link>
                  </li>
                </ul>
              </div>
              <div className="contact">
                <p className="text-lg ">Contact Us</p>
                <div className="">
                  <a
                    href="mailto:sales@maithilioverseas.net"
                    className="max-w-sm font-bold mt-2 text-gray-400 hover:text-white "
                  >
                    sales@maithilioverseas.net
                  </a>
                  <p className="max-w-sm font-bold mt-2 text-gray-400 hover:text-white">
                    New Delhi, Delhi, India
                  </p>
                </div>
                <div className="flex flex-row">
                  <a
                    href="https://www.facebook.com/"
                    className="max-w-sm font-bold mt-2 text-gray-400 hover:text-white"
                  >
                    <i className="fa-brands fa-facebook-f fa-lg"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/maithilioverseas"
                    className="max-w-sm font-bold mt-2 text-gray-400 hover:text-white ml-4"
                  >
                    <i className="fa-brands fa-instagram fa-lg"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/maithili-overseas-43228a265/"
                    className="max-w-sm font-bold mt-2 text-gray-400 hover:text-white ml-4"
                  >
                    <i className="fa-brands fa-linkedin fa-lg"></i>
                  </a>
                  <a
                    href="https://www.x.com/"
                    className="max-w-sm font-bold mt-2 text-gray-400 hover:text-white ml-4"
                  >
                    <i className="fa-brands fa-twitter fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a
            href="https://wa.me/919015360030"
            target="_blank"
            rel="noreferrer"
            class="whatsapp-chat"
          >
            <i class="whatsapp-icon fab fa-whatsapp"></i>
          </a>
          <hr class="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

          <div>
            <p class="text-center text-white ">
              © Maithili Overseas 2023 - All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
