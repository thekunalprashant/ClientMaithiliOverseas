import React from "react";

const Review = () => {
  return (
    <div className="py-20">
      <div className="flex justify-center">
        <h3 className="text-2xl font-bold pb-10">Love from Clients</h3>
      </div>
      <div className="flex justify-center p-4 flex-wrap md:flex-nowrap gap-12">
        <div className="review-cards  bg-[#F1F4F8] p-6 rounded-xl ">
          <div className="star-container">
            <div class="clip-star"></div>
            <div class="clip-star"></div>
            <div class="clip-star"></div>
            <div class="clip-star"></div>
            <div class="clip-star"></div>
          </div>
          <p>
            We have been working with Maithili Overseas for several years now.
            They consistently deliver high-quality steel products that meet our
            requirements. Their team is professional and always ensures timely
            deliveries. We highly recommend them for all your steel needs.
          </p>
          <p className="font-bold pt-4 pb-1">- Ashley Cooper</p>
        </div>
        <div className="review-cards  bg-[#F1F4F8] p-6 rounded-xl">
          <div className="star-container">
            <div class="clip-star"></div>
            <div class="clip-star"></div>
            <div class="clip-star"></div>
            <div class="clip-star"></div>
            <div class="clip-star"></div>
          </div>
          <p>
            The Makhana products from Maithili Overseas are simply amazing. They
            are fresh, crunchy, and full of flavor. We can't get enough of their
            flavored variants. Highly recommended for anyone looking for
            high-quality Makhana snacks.
          </p>
          <p className="font-bold pt-4 pb-1">- Anton de Swardt</p>
        </div>
        <div className="review-cards  bg-[#F1F4F8] p-6 rounded-xl">
          <div className="star-container">
            <div class="clip-star"></div>
            <div class="clip-star"></div>
            <div class="clip-star"></div>
            <div class="clip-star"></div>
            <div class="clip-star"></div>
          </div>
          <p>
            We are extremely happy with the copper products supplied by Maithili
            Overseas. The quality is exceptional, and they have a wide range of
            options to choose from. Their customer service is also top-notch,
            making them a reliable partner for our business.
          </p>
          <p className="font-bold pt-4 pb-1">- Johnson James</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
