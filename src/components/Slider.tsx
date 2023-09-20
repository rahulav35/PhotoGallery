import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Slider = ({ slides }: any) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="gallery" className="max-w-[1240px] mx-auto ">
      <h1 className="text-2xl font-bold font-Raleway p-4 box-border text-center">Gallery</h1>
      <div className="flex relative justify-center p-4">
      {SliderData.map((slides, index) => {
        return (
          <div
            key={index}
            className={`${index === current ? 'opacity-[1] ease-in duration-1000' : 'opacity-0'}`}
          >
            
            <FaArrowCircleLeft
            onClick={prevSlide}
              size={50}
              className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2] "
            />

            {index === current && (
              <img
                className=" py-2 box-border  flex items-center justify-center"
                src={slides.image}
                alt=""
              />
            )}

            <FaArrowCircleRight
            onClick={nextSlide}
              size={50}
              className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2] "
            />
            </div>
          
        );
      })}
      </div>
    </div>
  );
};

export default Slider;
