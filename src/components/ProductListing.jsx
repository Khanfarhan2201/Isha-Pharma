import React from 'react';

const ProductListingPage = () => {
  // Sample product data - replace with your actual data
  const products = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      type: "Tablets",
      packSize: "Strip of 10",
      image: "/img-1.jpeg",
      price: 25.00,
      prescription: false,
      category: "Pain & Fever",
      stock: "In Stock",
      rating: 4
    },
    {
      id: 2,
      name: "Azithromycin 250mg",
      type: "Tablets",
      packSize: "Strip of 5",
      image: "/img-2.jpeg",
      price: 120.00,
      prescription: true,
      category: "Antibiotics",
      stock: "Low Stock",
      rating: 4.5
    },
    {
      id: 3,
      name: "Cetirizine 10mg",
      type: "Tablets",
      packSize: "Strip of 10",
      image: "/img-3.jpeg",
      price: 35.00,
      prescription: false,
      category: "Allergy",
      stock: "In Stock",
      rating: 4
    },
    {
      id: 4,
      name: "Omeprazole 20mg",
      type: "Capsules",
      packSize: "Bottle of 30",
      image: "/img-4.jpeg",
      price: 85.00,
      prescription: false,
      category: "Acidity",
      stock: "In Stock",
      rating: 4.5
    },
    {
      id: 5,
      name: "Atorvastatin 20mg",
      type: "Tablets",
      packSize: "Strip of 10",
      image: "/img-5.jpeg",
      price: 95.00,
      prescription: true,
      category: "Cholesterol",
      stock: "In Stock",
      rating: 4
    },
    {
      id: 6,
      name: "Vitamin B-Complex",
      type: "Syrup",
      packSize: "200ml Bottle",
      image: "/img-6.jpeg",
      price: 65.00,
      prescription: false,
      category: "Vitamins",
      stock: "In Stock",
      rating: 4.5
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 1l2.39 4.72 5.3.77-3.83 3.72.9 5.28L10 13.14l-4.76 2.5.9-5.28-3.83-3.72 5.3-.77L10 1z" />
          </svg>
        );
      } else {
        stars.push(
          <svg key={i} className="h-4 w-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      }
    }
    return stars;
  };

  return (
    <div className="mx-auto max-w-screen-lg">
      {/* Hero Banner */}
      <br />
      <br />
      <br />
      <div className="relative h-50 rounded-b-lg bg-gradient-to-r from-blue-600 to-blue-800 bg-cover bg-center bg-no-repeat shadow-lg">
  <div className="absolute inset-0 flex items-center justify-center px-4">
    <div className="text-center text-white">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 shadow-md">
        Isha Pharma Products
      </h1>
      <p className="mt-4 text-xl font-semibold text-green-200 opacity-90" style={{ color: 'green' }}>
        Trusted quality medicines for better health
      </p>
    </div>
  </div>
</div>

<br />
      {/* Page Header */}
      <div className="mt-8 flex flex-col items-start justify-between px-4 sm:flex-row sm:items-center lg:px-0">
  <div className="mb-4 sm:mb-0 text-center w-full">
    <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 underline decoration-blue-500 decoration-2 underline-offset-8">
      Our Products
    </h1>
    <p className="mt-4 text-lg text-gray-700 mx-auto max-w-lg bg-blue-100 px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      Browse our complete range of pharmaceutical products
    </p>
  </div>
</div>
<br />

      {/* Product Grid */}
      <main className="grid grid-cols-1 gap-6 px-4 pb-12 sm:grid-cols-2 md:grid-cols-3 lg:px-0">
        {products.map((product) => (
          <article key={product.id} className="relative rounded-lg border border-gray-200 p-4 shadow-sm transition hover:shadow-md">
            {/* Prescription Tag */}
            {product.prescription && (
              <div className="absolute top-2 right-2 rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-800">
                Rx Only
              </div>
            )}
            
            {/* Stock Status */}
            <div className={`absolute top-2 left-2 rounded-full px-2 py-1 text-xs font-semibold ${
              product.stock === "In Stock" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
            }`}>
              {product.stock}
            </div>
            
            {/* Product Image */}
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img 
                className="h-full w-full object-contain p-4" 
                src={product.image} 
                alt={product.name} 
              />
            </div>
            
            {/* Product Info */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600">{product.type} | {product.packSize}</p>
              <p className="text-sm text-gray-500">{product.category}</p>
              
              {/* Rating */}
              <div className="mt-2 flex items-center">
                {renderStars(product.rating)}
                <span className="ml-1 text-sm text-gray-500">({product.rating})</span>
              </div>
              
              {/* Price and Action */}
              <div className="mt-3 flex items-center justify-between">
                <p className="text-lg font-bold text-blue-600">₹{product.price.toFixed(2)}</p>
                <button className="rounded bg-blue-600 px-3 py-1 text-sm font-medium text-white hover:bg-blue-700">
                  {product.prescription ? "Consult Doctor" : "Add to Cart"}
                </button>
              </div>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
};

export default ProductListingPage;