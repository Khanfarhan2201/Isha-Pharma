import React from "react";

const ContactSection = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-600 mb-2">
              <strong>Phone:</strong> +1-800-555-1234
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Email:</strong> info@ishapharma.com
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Address:</strong> 123 Pharma Lane, Health City, HC 12345
            </p>
            <p className="text-gray-600">
              <strong>Hours:</strong> Mon-Fri, 9 AM - 5 PM
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Send Us a Message
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              ></textarea>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;