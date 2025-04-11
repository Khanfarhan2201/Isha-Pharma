import React from "react";
import HeroBanner from "../components/HeroBanner";
import ProductListingPage from "../components/ProductListing";
import ProductListingPages from "../components/ByCategory";
import TopProductsSwiper from "../components/SwiperCards";
import Newsletter from "../components/Newsletter";
import TrustElements from "../components/TrustElements";

const ProductsPage = () => {
  return (
    <div className="px-4 sm:px-8 md:px-10 py-10 space-y-16">
      <div style={{marginTop:"100px"}}></div>
      <div data-aos="fade-up">
        <HeroBanner />
      </div>

      <div data-aos="zoom-in" data-aos-delay="100">
        <TopProductsSwiper />
      </div>

      <div data-aos="fade-right" data-aos-delay="200">
        <ProductListingPage />
      </div>

      <div data-aos="fade-left" data-aos-delay="300">
        <ProductListingPages />
      </div>

      <div data-aos="zoom-in-up" data-aos-delay="400">
        <Newsletter />
      </div>

      <div data-aos="fade-up" data-aos-delay="500">
        <TrustElements />
      </div>
    </div>
  );
};

export default ProductsPage;
