import React from "react";

const HealthTipsBlog = () => {
  const tips = [
    {
      id: 1,
      title: "5 Ways to Boost Your Immunity",
      image: "/immunity.jpg", // Replace with actual image paths
      excerpt: "Discover natural ways to strengthen your immune system...",
      link: "/blog/boost-immunity",
    },
    {
      id: 2,
      title: "Healthy Digestion Tips",
      image: "/digestion.jpg", // Replace with actual image paths
      excerpt: "Learn how to improve your gut health with these simple habits...",
      link: "/blog/healthy-digestion",
    },
    {
      id: 3,
      title: "The Benefits of Herbal Supplements",
      image: "Herbal.jpg", // Replace with actual image paths
      excerpt: "Explore the power of natural remedies for wellness...",
      link: "/blog/herbal-supplements",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          Health Tips & Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition border border-gray-100 overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={tip.image}
                  alt={tip.title}
                  className="w-full h-full object-cover"
                  onError={(e) => (e.target.style.display = "none")}
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {tip.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {tip.excerpt}
                </p>
                <a
                  href={tip.link}
                  className="inline-block w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthTipsBlog;