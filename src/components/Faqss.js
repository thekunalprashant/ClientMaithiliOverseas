import React from "react";
import { Accordion } from "flowbite-react";

const Faqs = () => {
  return (
    <div className="px-7">
      <h1 className="text-center text-2xl font-bold pb-7">FAQs</h1>
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>What countries do you export to?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Maithili Overseas exports products to various countries, including
              the USA, UK, and Dubai, as well as other international markets. We
              have experience in serving a global customer base.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Can I request a custom order?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Yes, we are open to custom orders and can work with you to fulfill
              your specific requirements. Please get in touch with us to discuss
              your customization needs.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            What is the minimum order quantity (MOQ) for your products?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The MOQ may vary depending on the product category. We specify the
              MOQ for each product on its respective product page. Feel free to
              reach out for any MOQ-related queries.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Faqs;
