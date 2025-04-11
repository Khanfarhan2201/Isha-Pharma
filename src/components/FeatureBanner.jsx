import React from "react";
import "./FeatureBanner.css"; // import custom animations if needed

const FeatureBanner = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">
          Our Key Features
        </h2>
        <p className="text-md md:text-lg mb-10 animate-fade-up delay-200">
          Quality assurance, global reach, and customer satisfaction.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center">
          {/* Feature Cards */}
          {[
            {
              img: "/slider.jpg",
              title: "Quality Products",
            },
            {
              img: "/slider-2.jpg",
              title: "Fast Delivery",
            },
            {
              img: "/slider-1.jpg",
              title: "24/7 Support",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 p-5 rounded-xl shadow-lg shadow-orange-500/50 hover:shadow-xl hover:shadow-orange-500/70 transition duration-300 w-60"
            >
              <img
                src={feature.img}
                className="h-16 w-auto mx-auto mb-3 rounded"
                alt={`${feature.title} Icon`}
              />
              <p className="text-lg font-semibold">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureBanner;
