import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const SwiperCard = () => {
  return (
    <div className="w-full px-4 py-10 max-w-6xl mx-auto">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 relative inline-block">
          Top Picks from Isha Pharma
          <span className="block w-24 h-1 bg-orange-500 mt-2 mx-auto rounded-full"></span>
        </h2>
        <p className="text-gray-500 mt-4 max-w-md mx-auto">
          Discover our most trusted and recommended pharmaceutical products.
        </p>
      </div>

      {/* Swiper Container with proper constraints */}
      <div className="relative w-full overflow-hidden">
        {/* Extra width container for slides */}
        <div className="w-[calc(100%+40px)] -ml-5">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="!pb-10" // Space for pagination
          >
            {cardData.map((card, index) => (
              <SwiperSlide key={index} className="!h-auto px-2.5">
                <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h2 className="text-white text-xl font-semibold">{card.title}</h2>
                    <p className="text-gray-300 mt-1">{card.subtitle}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};