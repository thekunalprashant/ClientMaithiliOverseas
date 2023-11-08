import React from "react";

const Contact = () => {
  return (
    <div class="bg-gray-100 mx-auto flex justify-center items-center w-full h-[55vh] text-gray-700 font-sans p-4">
      <div className="container flex justify-center items-center py-10">
        <div>
          <h2 class="text-3xl font-semibold mb-4 text-center ">
            Contact Maithili Overseas
          </h2>
          <p class="mb-4 font-bold">
            Feel free to contact us with any questions, inquiries, or feedback.
            We are here to assist you.
          </p>

          <ul class="list-disc pl-6">
            <li class="mb-2 font-semibold hover:text-[#1A56DB]">
              Email:{" "}
              <a href="mailto:maithilioverseas@hotmail.com ">
                maithilioverseas@hotmail.com
              </a>
            </li>
            <li class="mb-2 font-semibold hover:text-[#1A56DB]">
              Phone: +91 90153 60030
            </li>
            <li class="mb-2 font-semibold hover:text-[#1A56DB]">
              Address: New Delhi, Delhi, India
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
