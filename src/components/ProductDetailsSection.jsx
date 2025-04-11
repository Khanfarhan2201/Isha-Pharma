import React from "react";

const ProductDetailsSection = () => {
  const products = [
    {
      id: 1,
      name: "Gastro Relief Pro",
      description:
        "A fast-acting 500mg formula to relieve XYZ condition, ideal for OTC sales.",
      usage: "Take 1 capsule daily with water. Consult a doctor if symptoms persist.",
      retailerNote: "Bulk: 500 units/carton. Wholesale price: $50/carton.",
      link: "/products/gastro-relief-pro-details",
    },
    {
      id: 2,
      name: "Women’s Wellness Capsule",
      description:
        "Supports hormonal balance with a 30-day supply of natural ingredients.",
      usage: "1 capsule daily with food.",
      retailerNote: "Bulk: 300 units/carton. Wholesale price: $45/carton.",
      link: "/products/womens-wellness-details",
    },
    {
      id: 3,
      name: "Digestive Health Booster",
      description:
        "Enhances gut health with 60 vegan-friendly capsules.",
      usage: "2 capsules daily with meals.",
      retailerNote: "Bulk: 400 units/carton. Wholesale price: $55/carton.",
      link: "/products/digestive-booster-details",
    },
    {
      id: 4,
      name: "Hormone Balance Serum",
      description:
        "Balances hormones naturally with a 15ml organic extract.",
      usage: "Apply 2-3 drops daily.",
      retailerNote: "Bulk: 200 units/carton. Wholesale price: $40/carton.",
      link: "/products/hormone-serum-details",
    },
    {
      id: 5,
      name: "Liver Detox Max",
      description:
        "Supports liver function with a 60-tablet herbal formula.",
      usage: "1 tablet twice daily with food. Avoid alcohol.",
      retailerNote: "Bulk: 400 units/carton. Wholesale price: $60/carton.",
      link: "/products/liver-detox-details",
    },
    {
      id: 6,
      name: "Immune Boost Formula",
      description:
        "Strengthens immunity with a 90-capsule vitamin-rich pack.",
      usage: "2 capsules daily with meals. Suitable for all ages.",
      retailerNote: "Bulk: 300 units/carton. Wholesale price: $50/carton.",
      link: "/products/immune-boost-details",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          Product Details & Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-sm text-gray-600 italic mb-2">{product.usage}</p>
              <p className="text-sm text-gray-700 bg-gray-50 p-2 rounded mb-4">
                <strong>Retailer Note:</strong> {product.retailerNote}
              </p>
              <a
                href={product.link}
                className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
        {/* Retailer Portal CTA */}
        <div className="text-center mt-8">
          <a
            href="/retailer-portal"
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Retailers: Access Wholesale Portal & Order Now
          </a>
          <p className="text-sm text-gray-600 mt-2">
            Sign up for exclusive pricing, bulk orders, and support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsSection;