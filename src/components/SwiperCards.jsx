import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

const products = [
  {
    id: 1,
    name: "Ish-prot DHA Granules",
    price: "₹480",
    image: "/img-15.jpeg",
  },
  {
    id: 2,
    name: "ISHA-CYSTOREX SYRUP 200 ML",
    price: "₹175",
    image: "/img-18.jpeg",
  },
  {
    id: 3,
    name: "Isha ASHOKA CORDEAL SYRUP 200 ML|450 ML",
    price: "₹150|330",
    image: "/img-17.jpeg",
  },
  {
    id: 4,
    name: "LYCOISH PLUS CAPSULES",
    price: "₹165",
    image: "/img-19.jpeg",
  },
  {
    id: 5,
    name: "APPY-ISH SYRUP 200 ML",
    price: "₹215",
    image: "/img-14.jpeg",
  },
];

const TopProductsSwiper = () => {
  return (
    <div className="w-full py-10 bg-gradient-to-r from-green-50 to-white">
        <br />
        <br />
        <div className="text-center mb-12">
  <h2 className="text-4xl sm:text-5xl font-extrabold text-green-800 mb-4">
    Our Top Products
  </h2>
  <div className="mx-auto w-32 sm:w-52 h-1 bg-green-500 rounded-full mb-4"></div>
  <p className="text-gray-600 text-lg sm:text-xl">
    Trusted & Effective Medicines for Better Health
  </p>
</div>


      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-4 transform hover:scale-105">
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-contain mb-3"
              />
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-green-600 font-medium">{product.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopProductsSwiper;
