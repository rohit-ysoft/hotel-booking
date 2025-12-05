import React from 'react'
import ImageSlider from "../../reusable/slider/ImageSlider";

function HomeSlider() {
 const sliderImages = [
    "src/assets/images/Slider/HomeSlider1.jpg",
    "src/assets/images/Slider/HomeSlider2.jpg",
    "src/assets/images/Slider/HomeSlider3.jpg",
    "src/assets/images/Slider/HomeSlider4.jpg",
    "src/assets/images/Slider/HomeSlider5.jpg",
  ];

  return (
   <div className="max-w-2xl  mx-auto ">
      <ImageSlider images={sliderImages} autoSlide={true} interval={3000} />
    </div>
  )
}

export default HomeSlider
