import React from "react";
import Makhana from "../images/Makhana.jpg";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="grid p-4">
      <h1 className="text-center text-3xl font-bold p-8 ">Products We Export</h1>
      <div className="box-border flex justify-center gap-12 flex-wrap p-4">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link to={"/Products/Makhana"}>
            <img
              class="rounded-t-lg aspect-video w-full h-52 object-cover"
              src={Makhana}
              alt=""
            />
          </Link>
          <div class="p-5">
            <Link to={"/Products/Makhana"}>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Makhana (Fox Nuts)
              </h5>
            </Link>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Discover our range of premium Makhana Fox Nuts, a healthy and
              delicious snack option. Our Makhana products are carefully sourced
              and packaged to meet international standards.
            </p>
            <Link
              to={"/Products/Makhana"}
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                class="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link to={"/Products/Jewellery"}>
            <img
              class="rounded-t-lg aspect-video w-full h-52 object-cover"
              src="https://content.jdmagicbox.com/comp/thane/d8/022pxx22.xx22.180424135434.d9d8/catalogue/shiv-shakti-imitation-jewellery-and-bangles-bhayandar-east-thane-jewellery-showrooms-gni5wwnuk0.jpg?clr="
              alt=""
            />
          </Link>
          <div class="p-5">
            <Link to={"/Products/Jewellery"}>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Imitation Jewellery
              </h5>
            </Link>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Explore our exquisite collection of imitation jewelry. From
              traditional to contemporary designs, our jewelry pieces are
              crafted with precision and attention to detail.
            </p>
            <Link
              to={"/Products/Jewellery"}
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                class="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link to={"/Products/Copper-Bottles"}>
            <img
              class="rounded-t-lg aspect-video w-full h-52 object-cover"
              src="https://c.ndtvimg.com/2021-12/qodbfnh_copper-bottle_625x300_16_December_21.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350"
              alt=""
            />
          </Link>
          <div class="p-5">
            <Link to={"/Products/Copper-Bottles"}>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Copper Bottles
              </h5>
            </Link>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Our copper Bottles are not only aesthetically pleasing but also
              boast health benefits.
            </p>
            <Link
              to={"/Products/Copper-Bottles"}
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                class="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link to={"/Products/Handicraft"}>
            <img
              class="rounded-t-lg aspect-video w-full h-52 object-cover "
              src="https://img.freepik.com/free-photo/multiple-carpets-grand-bazaar-istanbul-turkey_1268-21688.jpg?w=1060&t=st=1699087128~exp=1699087728~hmac=5d699603fe5cb193c5a8a6e7d60358695b8227d942542a04b658dd9c75ddcc78"
              alt=""
            />
          </Link>
          <div class="p-5">
            <Link to={"/Products/Handicraft"}>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Handicraft Products
              </h5>
            </Link>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Immerse yourself in the world of Indian craftsmanship. Our
              handcrafted products showcase the rich cultural heritage of India
              and make for unique decor items.
            </p>
            <Link
              to={"/Products/Handicraft"}
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                class="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link to={"/Products/Denims"}>
            <img
              class="rounded-t-lg aspect-video w-full h-52 object-cover"
              src="https://unitradebd.net/assets/pages/img/denim1.png"
              alt=""
            />
          </Link>
          <div class="p-5">
            <Link to={"/Products/Denims"}>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Denims
              </h5>
            </Link>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Elevate your fashion game with our collection of premium denims.
              These comfortable and stylish denims are perfect for the
              fashion-conscious consumer.
            </p>
            <Link
              to={"/Products/Denims"}
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                class="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
