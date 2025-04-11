import React from 'react';
import { FaShieldAlt, FaCertificate, FaFlask, FaUserMd, FaHospital, FaLock } from 'react-icons/fa';
import { MdGppGood, MdScience } from 'react-icons/md';

const TrustElements = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Why Trust Isha Pharma?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Certification Badge */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-blue-600 text-4xl mb-4">
              <FaCertificate />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Certified Quality</h3>
            <p className="text-gray-600">
              GMP, ISO, and FDA-approved manufacturing facilities ensuring highest quality standards.
            </p>
          </div>

          {/* Scientific Expertise */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-blue-600 text-4xl mb-4">
              <MdScience />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Scientific Excellence</h3>
            <p className="text-gray-600">
              Backed by a team of PhD researchers and medical professionals with decades of experience.
            </p>
          </div>

          {/* Healthcare Partnerships */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-blue-600 text-4xl mb-4">
              <FaHospital />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Trusted by Hospitals</h3>
            <p className="text-gray-600">
              Partnered with 50+ leading healthcare institutions across the region.
            </p>
          </div>

          {/* Data Security */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-blue-600 text-4xl mb-4">
              <FaLock />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Data Protection</h3>
            <p className="text-gray-600">
              HIPAA compliant systems with end-to-end encryption for all patient data.
            </p>
          </div>
        </div>

        {/* Trust Badges Row */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6">
          <img 
            src="/images/gmp-certified.png" 
            alt="GMP Certified" 
            className="h-16 object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
          <img 
            src="/images/iso-certified.png" 
            alt="ISO Certified" 
            className="h-16 object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
          <img 
            src="/images/fda-approved.png" 
            alt="FDA Approved" 
            className="h-16 object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
          <img 
            src="/images/whol-certified.png" 
            alt="WHO Listed" 
            className="h-16 object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-700">What Our Partners Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-800">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    quote: "Isha Pharma has consistently delivered high-quality medications that meet our strict hospital standards.",
    author: "Dr. Rajesh Verma",
    position: "Chief Pharmacist, Apollo Hospitals"
  },
  {
    quote: "Their research team's innovative approach has led to breakthrough formulations in our partnership.",
    author: "Prof. Anjali Mehta",
    position: "Director, National Institute of Pharmacology"
  },
  {
    quote: "Reliable supply chain and impeccable quality control makes them our preferred vendor.",
    author: "Sanjay Gupta",
    position: "Procurement Head, Max Healthcare"
  }
];

export default TrustElements;