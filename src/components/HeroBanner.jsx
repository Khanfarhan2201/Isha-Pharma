import React, { useState, useEffect } from "react";

const HeroBanner = () => {
  const slides = [
    "/src/assets/images/slider-1.jpg",
    "/src/assets/images/slider-2.jpg",
    "/src/assets/images/slider.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      className="relative bg-cover bg-center text-white min-h-[500px] transition-all duration-1000 flex flex-col justify-between"
      style={{
        backgroundImage: `url(${slides[currentSlide]})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Text content - grows to take available space */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-24 flex-grow">
        <div className="bg-black/30 backdrop-blur-md p-6 rounded-xl animate-fade-in max-w-3xl w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
            Welcome to Isha Pharma Trading Co.
          </h1>
          <p className="text-lg md:text-xl mb-6 text-white drop-shadow-lg">
            Leading the future of pharmaceutical solutions with innovation and quality.
          </p>
        </div>
      </div>

      {/* Button container - fixed at bottom and centered */}
      <div className="relative z-10 w-full pb-6">
        <div className="flex justify-center">
          <a
            href="#products"
            className="bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg px-8 py-3 text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Explore Now
          </a>
        </div>
      </div>
    </section>
  );
};

// Animation styles
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fadeIn 1s ease-out forwards;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

export default HeroBanner;