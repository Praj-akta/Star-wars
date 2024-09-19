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

  const convertDate = (releaseDate) => {
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const [year, month, day] = releaseDate.split('-');
    const formattedDate = `${months[parseInt(month) - 1]} ${parseInt(day)}, ${year}`;
    return formattedDate;
  }

  return (
    <div className="px-3 py-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {data && data.length > 0 ? data.map((value, index) => {
        const image = filmImages.find((film) => film.title === value.title);
        const modifiedDate = convertDate(value.releaseDate);
        
        return (
          <div
            key={index}
            className="cursor-pointer relative p-1 mt-3"
            onClick={() => handleImageClick({...value, ...image, modifiedDate})}>
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
              {value.title} (Episode {value.episodeID})
            </h2>
            <p className='text-[#b5b7b7] text-sm pt-1'> 
              <strong className='text-[#b5b7b7]'>
                Released Date:
              </strong> {modifiedDate}
            </p>
            <p className='text-[#b5b7b7] text-sm pt-1'> 
              <strong className='text-[#b5b7b7]'>
                Director:
              </strong> {value.director}
            </p>
            <p className='text-[#3b3be1] text-sm pt-1 underline'> Click here for more details.. </p>
          </div>
        );
      }) : (
        <div className="text-center text-3xl text-gray-400">
          No films to display
        </div>
      )}
    </div>
  );
};

export default Film;
