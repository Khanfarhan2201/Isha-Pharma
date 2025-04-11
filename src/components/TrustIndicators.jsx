import React from "react";

const TrustIndicators = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Certifications */}
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-6 text-gray-800">
          Certified for Global Standards
        </h2>
        <div className="flex justify-center items-center flex-wrap gap-8 mb-10">
          <img src="/src/assets/icons/who-gmp.png" alt="WHO-GMP" className="h-16" />
          <img src="/src/assets/icons/fda.png" alt="FDA Approved" className="h-16" />
          <img src="/src/assets/icons/iso.png" alt="ISO Certified" className="h-16" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-3xl font-bold text-blue-600">50+</p>
            <p className="mt-2 text-gray-700">Countries Served</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-3xl font-bold text-blue-600">100+</p>
            <p className="mt-2 text-gray-700">Patents</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-3xl font-bold text-blue-600">25+</p>
            <p className="mt-2 text-gray-700">Years of Excellence</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-3xl font-bold text-blue-600">500+</p>
            <p className="mt-2 text-gray-700">Global Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
