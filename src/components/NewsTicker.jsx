import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

const NewsTicker = () => {
  // Array of news highlights (customize with your data)
  const highlights = [
    {
      id: 1,
      text: "Isha Pharma Receives FDA Approval for New Gastro Medicine - Apr 2025",
      link: "/news/fda-approval-2025",
    },
    {
      id: 2,
      text: "Awarded Best Innovation in Healthcare 2025 at Global Health Summit",
      link: "/news/best-innovation-2025",
    },
    {
      id: 3,
      text: "New Gynecology Product Line Launched - Enhancing Women's Wellness",
      link: "/news/new-gyne-product-2025",
    },
    {
      id: 4,
      text: "Isha Pharma Recognized for Patient-Centric Care Excellence",
      link: "/news/patient-care-award-2025",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-700 py-3 overflow-hidden relative">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center space-x-6">
          <span className="text-white font-semibold text-lg">Latest Updates:</span>
          <div className="w-full overflow-hidden whitespace-nowrap">
            <div className="inline-flex animate-scroll space-x-8">
              {highlights.map((highlight) => (
                <Link
                  key={highlight.id}
                  to={highlight.link}
                  className="text-white text-sm md:text-base font-medium hover:text-orange-300 transition-colors duration-300"
                >
                  {highlight.text}
                </Link>
              ))}
              {/* Duplicate items for seamless looping */}
              {highlights.map((highlight) => (
                <Link
                  key={`${highlight.id}-duplicate`}
                  to={highlight.link}
                  className="text-white text-sm md:text-base font-medium hover:text-orange-300 transition-colors duration-300"
                >
                  {highlight.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Optional decorative underline */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-transparent opacity-50"></div>
    </section>
  );
};

// Animation keyframes (inline for simplicity)
const styles = `
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-scroll {
    display: inline-flex;
    animation: scroll 15s linear infinite;
  }
  /* Pause on hover */
  .animate-scroll:hover {
    animation-play-state: paused;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

export default NewsTicker;