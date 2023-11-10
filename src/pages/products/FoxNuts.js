import React from "react";
import firstMakhana from "../../images/12to16mmMakhana.jpg";
import secondMakhana from "../../images/16mmMakhana.jpg";
import thirdMakhana from "../../images/20mmMakhana.jpg";
import tangyTomato from "../../images/products/tangyTomato.png";
import chatMasala from "../../images/products/chatMasala.png";
import periPeri from "../../images/products/periPeri.png";
import cheese from "../../images/products/cheese.png";
import kurkureMasala from "../../images/products/kurkureMasala.png";
import pudinaMasala from "../../images/products/pudinaMasala.png";
import chocolate from "../../images/products/chocolate.png";
import shahiKheer from "../../images/products/shahiKheer.png";



const FoxNuts = () => {
  return (
    <div className="flex bg-gray-100 text-gray-700 font-sans flex-col justify-center items-center p-4">
      <h1 className="text-3xl font-bold p-2">FoxNuts</h1>
      <div>
        <div className="flex  justify-center gap-2 md:gap-12 p-4  ">
          <img
            className=" w-1/3 md:w-1/6 shadow-lg p-1 bg-red-950 rounded-2xl hover:scale-125 duration-500  "
            src={firstMakhana}
            alt="firstMakhana"
          />
          <img
            className="w-1/3 md:w-1/6 shadow-lg p-1 bg-red-950 rounded-2xl hover:scale-125 duration-500"
            src={secondMakhana}
            alt="secondMakhana"
          />
          <img
            className="w-1/3 md:w-1/6 shadow-lg p-1 bg-red-950 rounded-2xl hover:scale-125 duration-500"
            src={thirdMakhana}
            alt="thirdMakhana"
          />
        </div>
        <div className="pt-8">
          <div className="flex flex-wrap md:flex-nowrap justify-center  md:justify-start items-center p-4 m-4 bg-white">
            <img src={chatMasala} alt="chatMasala" />
            <div className="p-4">
              <h2 className="text-xl font-bold p-1 text-black">Chat Masala</h2>
              <p className="text-sm italic p-1">Net Wt. 80g</p>
              <p className="p-1">
                <span className="font-bold ">INGREDIENTS: </span>Fox Nut
                (Makhana), Edible Vegetable Oil, lodised Salt, Dry Mango, Black
                Salt, Cumin, Kachri Coriander seeds, Mint Leaves, Black Pepper,
                Yellow Chillies, Pomegranate seeds, Tamarind, Dried Ginger,
                Ajwain, Nutmeg, Cloves, Asafoetida.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap md:flex-nowrap justify-center  md:justify-start items-center p-4 m-4 bg-white">
            <img src={periPeri} alt="periPeri" />
            <div className="p-4">
              <h2 className="text-xl font-bold p-1 text-black">Peri Peri</h2>
              <p className="text-sm italic p-1">Net Wt. 80g</p>
              <p className="p-1">
                <span className="font-bold ">INGREDIENTS: </span>Fox Nut
                (Makhana), Edible Vegetable Oil, amarind Powder, Chilli Powder,
                Parsley, Oregano, Chilli Flakes, Onion Powder, Salt, Black
                Pepper and Other Spices.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap md:flex-nowrap justify-center  md:justify-start items-center p-4 m-4 bg-white">
            <img src={pudinaMasala} alt="pudinaMasala" />
            <div className="p-4">
              <h2 className="text-xl font-bold p-1 text-black">
                Pudina Masala
              </h2>
              <p className="text-sm italic p-1">Net Wt. 80g</p>
              <p className="p-1">
                <span className="font-bold ">INGREDIENTS: </span>Fox Nut
                (Makhana), Edible Vegetable Oil, Salts, Dry Mint Leaves,
                Coriander Seeds, Black Pepper, Cumin, Ajwain, Asafoetida.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap md:flex-nowrap justify-center  md:justify-start items-center p-4 m-4 bg-white">
            <img src={tangyTomato} alt="tangyTomato" />
            <div className="p-4">
              <h2 className="text-xl font-bold p-1 text-black">Tangy Tomato</h2>
              <p className="text-sm italic p-1">Net Wt. 80g</p>
              <p className="p-1">
                <span className="font-bold ">INGREDIENTS: </span>
                Fox Nut (Makhana), Edible Vegetable Oil, Tomato Powder, Sugar,
                Salt, and Other Spices.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap md:flex-nowrap justify-center  md:justify-start items-center p-4 m-4 bg-white">
            <img src={cheese} alt="cheese" />
            <div className="p-4">
              <h2 className="text-xl font-bold p-1 text-black">Cheese</h2>
              <p className="text-sm italic p-1">Net Wt. 80g</p>
              <p className="p-1">
                <span className="font-bold ">INGREDIENTS: </span>Fox Nut
                (Makhana), Edible Vegetable Oil, Cheese Powder, Sugar, Salt, and
                Other Spices.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start items-center p-4 m-4 bg-white">
            <img src={kurkureMasala} alt="kurkureMasala" />
            <div className="p-4">
              <h2 className="text-xl font-bold p-1 text-black">
                Kurkure Masala
              </h2>
              <p className="text-sm italic p-1">Net Wt. 80g</p>
              <p className="p-1">
                <span className="font-bold ">INGREDIENTS: </span>Fox Nut
                (Makhana), Edible Vegetable Oil, Onion Powder, Red Chilli
                Powder, Amchur Powder, Coriander seed powder, Garlic powder,
                Ginger powder, Turmeric powder, Tomato powder, Salt, Black
                Pepper and Other Spices
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap md:flex-row-reverse md:flex-nowrap justify-center  md:justify-start items-center p-4 m-4 bg-white">
            <img src={shahiKheer} alt="shahiKheer" />
            <div className="p-4">
              <h2 className="text-xl font-bold p-1 text-black">
                Shahi Kheer (Instant Kheer Pre-Mix)
              </h2>
              <p className="text-sm italic p-1">Travel Pack - 40g</p>
              <p className="p-1">
                <span className="font-bold ">INGREDIENTS: </span>Fox Nut
                (Makhana), Almond, Saffron, Pistachio, Milk Solids, Sugar,
                Maltodextrin & Stabilizer (339 (iii)).
              </p>
            </div>
          </div>
          <div className="flex flex-wrap md:flex-nowrap justify-center  md:justify-start items-center p-4 m-4 bg-white">
            <img src={chocolate} alt="chocolate" />
            <div className="p-4">
              <h2 className="text-xl font-bold p-1 text-black">ChocoMak</h2>
              <p className="text-sm italic p-1">Transparent Box - 4 pcs</p>
              <p className="p-1">
                <span className="font-bold ">INGREDIENTS: </span>Fox Nut
                (Makhana), Sugar, Edible Vegetable Fat, Milk Solids, Cocoa
                Solids & Emulsifiers (492,322) CONTAINS ADDED NATURAL (VANILLA)
                FLAVOURING SUBSTANCES
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoxNuts;
