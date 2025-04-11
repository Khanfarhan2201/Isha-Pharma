import React, { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How can I order products as a retailer?",
      answer:
        "Contact our sales team at info@ishapharma.com or call +1-800-555-1234 to set up an account and place bulk orders.",
    },
    {
      question: "What are your shipping options?",
      answer:
        "We offer standard and express shipping. Retailers can request bulk delivery schedules. Contact us for details.",
    },
    {
      question: "Are your drugs FDA-approved?",
      answer:
        "Yes, all our products comply with FDA and global regulations. See our Trust Indicators section for certifications.",
    },
    {
      question: "How can consumers purchase your products?",
      answer:
        "Products are available through authorized retailers or our online store. Visit our Category Wise Products section.",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md border border-gray-100"
            >
              <button
                className="w-full text-left p-4 font-semibold text-gray-800 focus:outline-none"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                {faq.question}
                <span className="float-right">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="p-4 text-gray-600 border-t border-gray-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;