// components/Newsletter.js

export default function Newsletter() {
    return (
      <section className="bg-gradient-to-r from-green-100 to-green-50 py-12 px-6 text-center rounded-3xl shadow-md mx-auto max-w-4xl mt-16">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-3">Get Our Best Offers & Updates</h2>
        <p className="text-gray-600 text-sm mb-6">
          Subscribe to our newsletter and stay updated with Isha Pharma's latest products, offers, and health tips.
        </p>
  
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 transition-all text-white px-6 py-3 rounded-full font-medium text-sm"
          >
            Subscribe
          </button>
        </form>
  
        <p className="text-xs text-gray-500 mt-4">We respect your privacy. No spam, ever.</p>
      </section>
    );
  }
  