import React from "react";

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
                  <li className="hover:text-white">Home</li>
                  <li className="hover:text-white">Sourcing Agents</li>
                  <li className="hover:text-white">About Us</li>
                  <li className="hover:text-white">Contact Us</li>
                </ul>
              </div>
              <div className="products">
                <p className="text-lg ">Products</p>
                <ul className="max-w-sm font-bold mt-2 text-gray-400 pb-5 ">
                  <li className="hover:text-white">Makhana Fox Nut</li>
                  <li className="hover:text-white">Imitation Jewellery</li>
                  <li className="hover:text-white">Copper Products</li>
                  <li className="hover:text-white">Handicraft Products</li>
                  <li className="hover:text-white">Denims</li>
                </ul>
              </div>
              <div className="contact">
                <p className="text-lg ">Contact Us</p>
                <div className="">
                  <a
                    href="mailto:maithilioverseas@hotmail.com"
                    className="max-w-sm font-bold mt-2 text-gray-400 hover:text-white "
                  >
                    maithilioverseas@hotmail.com
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
