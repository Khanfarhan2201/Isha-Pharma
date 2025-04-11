import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const cardData = [
  {
    title: 'Explore Nature',
    subtitle: 'Wild & Free',
    image: 'https://source.unsplash.com/random/800x600?nature',
  },
  {
    title: 'Urban Living',
    subtitle: 'City Lights',
    image: 'https://source.unsplash.com/random/800x600?city',
  },
  {
    title: 'Desert Dreams',
    subtitle: 'Sandy Silence',
    image: 'https://source.unsplash.com/random/800x600?desert',
  },
  {
    title: 'Ocean Life',
    subtitle: 'Blue Deep',
    image: 'https://source.unsplash.com/random/800x600?ocean',
  },
];

const SwiperCard = () => {
  return (
    <div className="w-full overflow-hidden px-4 md:px-6 lg:px-8 py-10 max-w-6xl mx-auto">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 relative inline-block">
          Top Picks from Isha Pharma
          <span className="block w-24 h-1 bg-orange-500 mt-2 mx-auto rounded-full"></span>
        </h2>
        <p className="text-gray-500 mt-4 max-w-md mx-auto">
          Discover our most trusted and recommended pharmaceutical products, specially curated for your health and wellness.
        </p>
      </div>

      {/* Swiper Cards */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="w-full"
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
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
  );
};

export default SwiperCard;
