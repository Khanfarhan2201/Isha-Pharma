import { useState } from "react";

const ProductList = () => {
  const guyniProducts = [
    { id: 1, name: "Arabian Musk", price: 99, originalPrice: 79, rating: 4, image: "/src/assets/images/img-11.jpeg", onSale: true },
    { id: 2, name: "Albanian Essence", price: 299, rating: 5, image: "/src/assets/images/img-12.jpeg", onSale: false },
    { id: 3, name: "Siberian Perfum", price: 49, rating: 5, image: "/src/assets/images/img-13.jpeg", onSale: false },
    { id: 4, name: "Danish Levoune", price: 79, rating: 4, image: "/src/assets/images/img-14.jpeg", onSale: false },
    { id: 5, name: "Arabian Musk Extra", price: 99, originalPrice: 79, rating: 4, image: "/src/assets/images/img-15.jpeg", onSale: true },
    { id: 6, name: "Siberian Perfum", price: 49, rating: 5, image: "/src/assets/images/img-16.jpeg", onSale: false },
    { id: 7, name: "Danish Levoune", price: 79, rating: 4, image: "/src/assets/images/img-17.jpeg", onSale: false },
    { id: 8, name: "Arabian Musk Extra", price: 99, originalPrice: 79, rating: 4, image: "/src/assets/images/img-18.jpeg", onSale: true },
 

];

  const gestroProducts = [
    { id: 1, name: "Gestro Musk", price: 99, originalPrice: 79, rating: 4, image: "/src/assets/images/img-19.jpeg", onSale: true },
    { id: 2, name: "Gestro Essence", price: 299, rating: 5, image: "/src/assets/images/img-20.jpeg", onSale: false },
    { id: 3, name: "Gestro Perfum", price: 49, rating: 5, image: "/src/assets/images/img-21.jpeg", onSale: false },
    { id: 4, name: "Gestro Levoune", price: 79, rating: 4, image: "/src/assets/images/img-22.jpeg", onSale: false },
    { id: 5, name: "Gestro Musk Extra", price: 99, originalPrice: 79, rating: 4, image: "/src/assets/images/img-23.jpeg", onSale: true },
    { id: 6, name: "Gestro Perfum", price: 49, rating: 5, image: "/src/assets/images/img-24.jpeg", onSale: false },
    { id: 7, name: "Gestro Levoune", price: 79, rating: 4, image: "/src/assets/images/img-25.jpeg", onSale: false },
    { id: 8, name: "Gestro Musk Extra", price: 99, originalPrice: 79, rating: 4, image: "/src/assets/images/img-26.jpeg", onSale: true },
 

];

  const [showMoreGuyni, setShowMoreGuyni] = useState(false);
  const [showMoreGestro, setShowMoreGestro] = useState(false);

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          className={`block h-3 w-3 align-middle sm:h-4 sm:w-4 ${i < rating ? "text-pink-600" : "text-gray-400"}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ));
  };

  const renderProducts = (products, showMore) => {
    const visibleProducts = showMore ? products : products.slice(0, 4);
    return visibleProducts.map((product) => (
      <article key={product.id} className="relative group">
        <div className="aspect-square overflow-hidden rounded-lg">
          <img
            className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
            src={product.image}
            alt={product.name}
          />
        </div>
        {product.onSale && (
          <div className="absolute top-2 left-2 rounded-full bg-white">
            <p className="rounded-full bg-black p-1 text-[10px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
              Sale
            </p>
          </div>
        )}
        <div className="mt-4 flex items-start justify-between">
          <div>
            <h3 className="text-xs font-semibold sm:text-sm md:text-base">
              <a href="#">{product.name}</a>
            </h3>
            <div className="mt-2 flex items-center">{renderStars(product.rating)}</div>
          </div>
          <div className="text-right">
            {product.onSale && (
              <del className="mt-px text-xs font-semibold text-gray-600 sm:text-sm">
                ${product.originalPrice}.00
              </del>
            )}
            <p className="text-xs font-normal sm:text-sm md:text-base">${product.price}.00</p>
          </div>
        </div>
      </article>
    ));
  };

  return (
    
    <div className="mx-auto max-w-screen-lg px-4 py-8">
        <br />
        <br />
        <div className="relative h-50 rounded-b-lg bg-gradient-to-r from-blue-600 to-blue-800 bg-cover bg-center bg-no-repeat shadow-lg">
  <div className="absolute inset-0 flex items-center justify-center px-4">
    <div className="text-center text-white">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600 shadow-md">
        Category Wise Products
      </h1>
      <div className="mt-2 h-1 bg-teal-500 w-full"></div> {/* Full-width underline */}
    </div>
  </div>
</div>


      {/* Guyni Category */}
      <section className="mt-10">
      <h3 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
      Gynecologist Healthcare Solutions
</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {renderProducts(guyniProducts, showMoreGuyni)}
        </div>
        {guyniProducts.length > 4 && (
          <button
            className="mt-6 flex mx-auto rounded-lg bg-pink-600 px-6 py-2 font-bold text-white transition hover:translate-y-1"
            onClick={() => setShowMoreGuyni(!showMoreGuyni)}
          >
            {showMoreGuyni ? "Show Less" : "Show More"}
          </button>
        )}
      </section>

      {/* Gestro Category */}
      <section className="mt-10">
      <h3 className="text-3xl font-extrabold text-gray-800 mb-2 text-center">
      Gastroenterologist Solutions
</h3>
<div className="h-1 bg-teal-500 w-32 mx-auto mt-1"></div> {/* Underline */}
 {/* Underline */}
<br />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {renderProducts(gestroProducts, showMoreGestro)}
        </div>
        {gestroProducts.length > 4 && (
          <button
            className="mt-6 flex mx-auto rounded-lg bg-pink-600 px-6 py-2 font-bold text-white transition hover:translate-y-1"
            onClick={() => setShowMoreGestro(!showMoreGestro)}
          >
            {showMoreGestro ? "Show Less" : "Show More"}
          </button>
        )}
      </section>
    </div>
  );
};

export default ProductList;