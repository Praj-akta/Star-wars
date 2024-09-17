import React from "react";
import { filmImages } from "./data";
import poster from "./images/poster.jpg";
import { useNavigate } from "react-router-dom";

const Film = ({ data }) => {
  const navigate = useNavigate();
  const handleImageClick = (filmDetails) => {
    navigate(`/film/${filmDetails.title}`, {
      state: filmDetails
    })
  }

  return (
    <div className="px-3 py-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {data?.map((value, index) => {
        const image = filmImages.find((film) => film.title === value.title);
        return (
          <div
            key={index}
            className="cursor-pointer relative p-1 mt-3"
            onClick={() => handleImageClick({...value, ...image})}
          >
            {image ? (
              <img
                src={image.url}
                alt="film-images"
                className="shadow-md shadow-black w-full h-[300px] sm:h-[330px] md:h-[350px] lg:h-[400px] xl:h-[350px] block rounded-md"
              />
            ) : (
              <img
                src={poster}
                alt="film-images"
                className="w-full h-[300px] sm:h-[330px] md:h-[350px] lg:h-[400px] xl:h-[350px] block rounded-md shadow-md"
              />
            )}
            <h2 className="mt-3 text-xl font-bold text-wrap text-ellipsis hover:text-red-800">
              {value.title}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default Film;
