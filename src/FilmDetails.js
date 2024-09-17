import React, { useEffect, useState } from 'react';
import Header from "./Header";
import { useLocation } from 'react-router-dom';

const FilmDetails = () => {
  const location = useLocation(); 
  const filmDetails = location.state; 
  const [modifiedDate, updateReleaseDate] = useState();
  const {title, url, episodeID, releaseDate, producers, openingCrawl} = filmDetails;

  useEffect(() => {
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const [year, month, day] = releaseDate.split('-');
    const formattedDate = `${months[parseInt(month) - 1]} ${parseInt(day)}, ${year}`;
    updateReleaseDate(formattedDate);
  }, [releaseDate]);

  console.log(filmDetails)

  return (
    <div className='film-details'>
      <Header />
      <div className='pt-14 grid grid-cols-2 gap-4'>
          <div className='poster mt-5 ml-5'>
            <img src={url} alt="poster" className='w-full object-center' />
          </div>
          <div className='details mt-5 pl-8 pr-5 pt-3'>
            <h1 className='font-bold text-3xl text-wrap'> 
              Star Wars: {title} (Episode {episodeID})
            </h1>
            <p className='text-[#b5b7b7] text-sm mt-3'> 
              <strong className='text-[#b5b7b7]'>Rating:</strong> PG - 13
            </p>
            <p className='text-[#b5b7b7] text-sm'> 
              <strong className='text-[#b5b7b7]'>Runtime:</strong> 2h 20min
            </p>
            <p className='text-[#b5b7b7] text-sm'> 
              <strong className='text-[#b5b7b7]'>
                Release Date:
              </strong> {modifiedDate}
            </p>
            <p className='text-[#b5b7b7] text-sm'> 
              <strong className='text-[#b5b7b7]'>
                Producers:
              </strong> {producers.join(', ')}
            </p>
            <p className='text-[#b5b7b7] text-lg mt-3'> 
              {openingCrawl}
            </p>
            <div className="pt-5 pb-2 text-xl border-b border-b-gray-400">
              Databank: {title}
            </div>
          </div>
      </div>
    </div>
  )
}

export default FilmDetails