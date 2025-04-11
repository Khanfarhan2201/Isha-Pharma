import React from "react";

const PromoBanner = () => {
  return (
    <div className="bg-gray-800 text-white py-6">
      <div className="max-w-screen-xl mx-auto text-center px-4 flex items-center justify-center space-x-4">
        <img
          src="/src/assets/images/slider.jpg" // Replace with your image path
          className="h-12 w-auto"
          alt="Promo Icon"
        />
        <p className="text-lg md:text-xl font-semibold animate-slide-in">
          Special Offer: Get 20% Off on Your First Order! Use Code: ISHA20
        </p>
        <a
          href="#"
          className="mt-2 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-5 py-2 transition duration-300 hover:scale-105"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

// Animation keyframes
const styles = `
  @keyframes slideIn {
    from { opacity: 0; transform: translateX(-100%); }
    to { opacity: 1; transform: translateX(0); }
  }
  .animate-slide-in {
    animation: slideIn 1s ease-out forwards;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

export default PromoBanner;