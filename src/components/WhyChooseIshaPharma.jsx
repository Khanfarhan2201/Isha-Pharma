import React from "react";
// Assuming you're using react-icons for the icons
import { FaCheckCircle, FaGlobe, FaUserMd, FaLeaf } from "react-icons/fa";

const WhyChooseIshaPharma = () => {
  const features = [
    {
      icon: <FaCheckCircle className="text-indigo-600 text-3xl" />,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control ensures product excellence",
    },
    {
      icon: <FaGlobe className="text-indigo-600 text-3xl" />,
      title: "Global Compliance",
      description: "Meeting international standards and regulations worldwide",
    },
    {
      icon: <FaUserMd className="text-indigo-600 text-3xl" />,
      title: "Patient-Centric R&D",
      description: "Research focused on improving patient outcomes",
    },
    {
      icon: <FaLeaf className="text-indigo-600 text-3xl" />,
      title: "Sustainable Practices",
      description: "Eco-friendly manufacturing and packaging solutions",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          Why Choose Isha Pharma?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition border border-gray-100"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseIshaPharma;