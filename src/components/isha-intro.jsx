import React from "react";
import { FaCapsules, FaMicroscope, FaHeart, FaMoneyBillWave } from "react-icons/fa"; // Correct import

const AboutTeaser = () => {
  return (
    <section className="bg-gray-100 pt-8 pb-16" id="about">
      <div className="max-w-screen-xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Isha Pharma
          </h2>
          <p className="text-xl text-indigo-700 font-semibold mb-6">
            Your Trusted Partner in Health and Wellness
          </p>
          <p className="text-gray-700 mb-4">
            Established in <strong>2018</strong>, Isha Pharma specializes in high-quality medicines for{" "}
            <span className="font-semibold">Gastroenterology</span> and{" "}
            <span className="font-semibold">Gynecology</span>. Our mission is to provide safe, effective, and affordable healthcare solutions that improve the quality of life for individuals and communities.
          </p>
          <p className="text-gray-700 mb-6">
            We're driven by <span className="italic">innovation</span>, <span className="italic">research</span>, and a deep commitment to <strong>patient-centric care</strong>.
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-3">
              <FaCapsules className="text-orange-500 text-xl" />
              Specialized in Gastro & Gynee Products
            </li>
            <li className="flex items-center gap-3">
              <FaMicroscope className="text-blue-600 text-xl" />
              Innovation-Driven Healthcare Solutions
            </li>
            <li className="flex items-center gap-3">
              <FaMoneyBillWave className="text-green-600 text-xl" />
              Affordable & Accessible Medicines
            </li>
            <li className="flex items-center gap-3">
              <FaHeart className="text-pink-500 text-xl" />
              Dedicated to Patient Well-being
            </li>
          </ul>

          <a
            href="/about"
            className="inline-block px-6 py-3 text-white bg-indigo-600 rounded-lg shadow hover:bg-indigo-700 transition duration-300 ease-in-out"
          >
            Read More
          </a>
        </div>

        {/* Image Section */}
        <div className="relative w-full h-[350px] sm:h-[400px] rounded-xl overflow-hidden shadow-lg">
          <img
            src="/src/assets/images/about-us.jpg"
            alt="Isha Pharma Lab"
            className="object-cover w-full h-full"
            onError={(e) => { e.target.style.display = "none"; console.log("Image failed to load"); }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;