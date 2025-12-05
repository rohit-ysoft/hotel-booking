import { useState, useEffect } from "react";

export default function ImageSlider({ images = [], autoSlide = true, interval = 3000 }) {
  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    if (!autoSlide) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval, autoSlide]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative  overflow-hidden group rounded-xl shadow-lg ">

      {/* Images Container */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            
            className={`  bg-cover object-cover flex-shrink-0`}
            alt={`Slide ${index}`}
          />
        ))}

      </div>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="hidden group-hover:block absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full"
      >
        ‹
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="hidden group-hover:block absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${current === index ? "bg-white" : "bg-gray-400"
              }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
