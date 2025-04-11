import { useEffect, useRef } from "react";

const Slider = () => {
  const imageListRef = useRef(null);
  const scrollbarThumbRef = useRef(null);
  const sliderScrollbarRef = useRef(null);

  const images = [
    "/img-1.jpeg",
    "/img-6.jpeg",
    "/img-5.jpeg",
    "/img-4.jpeg",
    "/img-3.jpeg",
    "/img-2.jpeg",
    "/img-1.jpeg",
    "/img-1.jpeg",
    "/img-1.jpeg",
    "/img-1.jpeg",
  ];

  useEffect(() => {
    const imageList = imageListRef.current;
    const scrollbarThumb = scrollbarThumbRef.current;
    const sliderScrollbar = sliderScrollbarRef.current;

    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    let autoScrollInterval;

    const startAutoScroll = () => {
      autoScrollInterval = setInterval(() => {
        if (imageList.scrollLeft >= maxScrollLeft) {
          imageList.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          imageList.scrollBy({ left: imageList.clientWidth, behavior: "smooth" });
        }
      }, 3000);
    };

    const stopAutoScroll = () => clearInterval(autoScrollInterval);

    imageList.addEventListener("mouseenter", stopAutoScroll);
    imageList.addEventListener("mouseleave", startAutoScroll);

    const handleScrollButtons = (direction) => {
      stopAutoScroll();
      const scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      startAutoScroll();
    };

    if (scrollbarThumb) {
      scrollbarThumb.addEventListener("mousedown", (e) => {
        stopAutoScroll();
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.offsetWidth - scrollbarThumb.offsetWidth;

        const handleMouseMove = (e) => {
          const deltaX = e.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;
          const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
          const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

          scrollbarThumb.style.left = `${boundedPosition}px`;
          imageList.scrollLeft = scrollPosition;
        };

        const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
          startAutoScroll();
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
      });
    }

    startAutoScroll();

    return () => {
      stopAutoScroll();
      imageList.removeEventListener("mouseenter", stopAutoScroll);
      imageList.removeEventListener("mouseleave", startAutoScroll);
    };
  }, []);

  return (
    <div className="container max-w-[1800px] w-full bg-[#C5DFE0] mx-auto">
      <div className="slider-wrapper relative">
        <h5 className="fp-section-title text-darkblue pt-8 font-light text-3xl">
          Our Trending Products
        </h5>

        <button
          id="prev-slide"
          className="slide-button absolute top-[70%] left-[-25px] transform -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 bg-[#f8f8f8] text-black text-3xl rounded-full cursor-pointer hover:bg-[#404040] hidden"
          onClick={() => handleScrollButtons(-1)}
        >
          &lt;
        </button>

        <ul
          ref={imageListRef}
          className="image-list pt-5 grid grid-cols-10 gap-4 overflow-x-auto scrollbar-none snap-x snap-mandatory"
        >
          {images.map((src, index) => (
            <li key={index}>
              <img
                className="image-item w-80 h-48 object-cover md:w-72 md:h-96"
                src={src}
                alt={`img-${index + 1}`}
              />
            </li>
          ))}
        </ul>

        <button
          id="next-slide"
          className="slide-button absolute top-[70%] right-[-25px] transform -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 bg-[#f8f8f8] text-black text-3xl rounded-full cursor-pointer hover:bg-[#404040]"
          onClick={() => handleScrollButtons(1)}
        >
          &gt;
        </button>
      </div>

      <div className="slider-scrollbar h-6 w-full flex items-center">
        <div className="scrollbar-track bg-[#ccc] w-full h-0.5 flex items-center rounded relative hover:h-1">
          <div
            ref={scrollbarThumbRef}
            className="scrollbar-thumb absolute bg-black h-full w-1/2 rounded cursor-grab active:cursor-grabbing active:h-2 active:-top-0.5"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;