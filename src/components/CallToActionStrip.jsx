import React from "react";

const CallToActionStrip = () => {
  return (
    <section className="bg-indigo-600 py-6">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
          Need a Distributor? Get in Touch →
        </h2>
        <a
          href="/contact" // Update this to your actual contact page route
          className="inline-block px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default CallToActionStrip;