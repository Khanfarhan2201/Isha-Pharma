import React from "react";

const categories = [
  {
    name: "Gastroenterology Products",
    anchor: "gastro",
    products: [
      {
        name: "LYCOISH PLUS CAPSULES",
        desc:  "Clears acne, pimples and purifies blood for healthy skin.",
        img: "/img-1.jpeg",
      },
      {
        name: "Product Name 2",
        desc: "Helps with digestion and gut health.",
        img: "/img-2.jpeg",
      },
      {
        name: "Product Name 3",
        desc: "Supports a healthy digestive system.",
        img: "/img-3.jpeg",
      },
    ],
  },
  {
    name: "Gynecology Products",
    anchor: "gynecology",
    products: [
      {
        name: "Product Name 1",
        desc: "Supports women's health and wellness.",
        img: "/img-4.jpeg",
      },
      {
        name: "Product Name 2",
        desc: "Essential supplement for female health.",
        img: "/img-5.jpeg",
      },
      {
        name: "Product Name 3",
        desc: "Balances hormonal functions naturally.",
        img: "/img-6.jpeg",
      },
    ],
  },
];

const CategoryWiseProducts = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 mb-24 relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-purple-200 rounded-full filter blur-3xl opacity-20 -z-10 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-200 rounded-full filter blur-3xl opacity-20 -z-10 animate-pulse-slow"></div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12 relative z-10">
            Explore Our Premium Products by Category
            <span className="block text-indigo-600 mt-2 text-lg font-medium">
              Discover Health & Wellness Solutions
            </span>
          </h2>

          {categories.map((category, index) => (
            <div key={index} className="mb-24 relative z-10"> {/* Increased mb-24 for more space */}
              <h3 className="text-2xl md:text-3xl font-bold text-center text-indigo-700 mb-8 relative">
                {category.name}
                <span className="block w-16 h-1 bg-orange-500 mx-auto mt-2 rounded-full"></span>
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {category.products.map((product, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
                  >
                    <div className="h-[250px] bg-gradient-to-br from-white to-gray-50 flex items-center justify-center overflow-hidden">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain transition-opacity duration-300 hover:opacity-90"
                        onError={(e) => { e.target.style.display = "none"; console.log("Image failed to load:", product.name); }}
                      />
                    </div>
                    <div className="p-6 text-center flex flex-col justify-between flex-grow">
                      <div>
                        <h5 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-1">
                          {product.name}
                        </h5>
                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                          {product.desc}
                        </p>
                      </div>
                      <a
                        href="#"
                        className="inline-block w-full px-5 py-2 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-lg hover:from-orange-600 hover:to-purple-700 transition-all duration-300 text-center"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <a
                  href={`products.html#${category.anchor}`}
                  className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg shadow-lg hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  View All {category.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

// Animation keyframes (in a separate CSS file or inline for simplicity)
const styles = `
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
  @keyframes pulse-slow {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  .animate-pulse { animation: pulse 6s infinite; }
  .animate-pulse-slow { animation: pulse-slow 8s infinite; }
`;

const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

export default CategoryWiseProducts;