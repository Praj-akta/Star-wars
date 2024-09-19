import React, { useEffect, useState } from "react";
import { slides } from "./data";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  // This useEffect works on autoplaying slider images
  useEffect(() => {
    const autoplay = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(autoplay);
  }, [currentIndex]);

  return (
    <div className="pt-14 w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="slider relative w-full h-full bg-center bg-cover bg-no-repeat duration-500"
      >
        <div className="absolute background-overlay w-full h-full flex flex-col justify-center px-5">
          <h1 className="text-5xl bg-transparent w-96 text-wrap px-5 py-6 bold">
            "A long time ago in a galaxy far, far away..."
          </h1>
          <p className="text-2xl bg-transparent w-96 text-wrap p-5">
            Star wars information and latest film information at your door step.
          </p>
          <div className="buttons bg-transparent w-96 p-5 grid grid-cols-2 gap-6">
            <a
              href="#films"
              className="bg-[#fade4b] px-7 py-3 rounded-xl cursor-pointer text-center"
            >
              <strong className="bg-transparent text-black">Watch here</strong>
            </a>
            <a
              href="#about"
              className="border-[#fade4b] border px-7 py-3 rounded-xl cursor-pointer text-center"
            >
              <strong className="bg-transparent">Watch here</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
