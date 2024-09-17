import { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Film from "./Film";
import banner from "./images/banner.jpg";
import slider1 from "./images/slider1.jpg";
import slider2 from "./images/slider2.jpg";
import slider3 from "./images/slider3.jpg";
import aboutImg from "./images/about.jpg";

import Header from "./Header";

const FILMS_QUERY = gql`
  query Query {
    allFilms {
      films {
        title
        director
        releaseDate
        episodeID
        producers
        id
        openingCrawl
        characterConnection {
          characters {
            id
            name
          }
        }
        speciesConnection {
          species {
            name
            classification
            homeworld {
              name
            }
          }
        }
        starshipConnection {
          starships {
            id
            name
            starshipClass
          }
        }
        vehicleConnection {
          vehicles {
            name
            id
            vehicleClass
          }
        }
      }
    }
  }
`;

function Home() {
  const slides = [
    { url: banner },
    { url: slider1 },
    { url: slider2 },
    { url: slider3 },
  ];
  const [currentIndex, setCurrentIndex] = useState(1);
  // fetching films data
  const { data, error } = useQuery(FILMS_QUERY);
  if (error) console.log(error.message);

  useEffect(() => {
    const autoplay = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(autoplay);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      <Header />
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="pt-14 w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] bg-center bg-cover duration-500"
      ></div>

      <div id="about">
        <h1 className="py-2 text-3xl border-b border-b-gray-400 px-4">
          History
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          <div>
            <p className="p-4">
              Star Wars is an American epic space opera media franchise created
              by George Lucas, which began with the eponymous 1977 film and
              quickly became a worldwide pop culture phenomenon. The franchise
              has been expanded into various films and other media, including
              television series, video games, novels, comic books, theme park
              attractions, and themed areas, comprising an all-encompassing
              fictional universe. Star Wars is one of the highest-grossing media
              franchises of all time. <br></br> <br></br>
              The original 1977 film, retroactively subtitled Episode IV: A New
              Hope, was followed by the sequels Episode V: The Empire Strikes
              Back (1980) and Episode VI: Return of the Jedi (1983), forming the
              original Star Wars trilogy. Lucas later returned to the series to
              write and direct a prequel trilogy, consisting of Episode I: The
              Phantom Menace (1999), Episode II: Attack of the Clones (2002),
              and Episode III: Revenge of the Sith (2005). In 2012, Lucas sold
              his production company to Disney, relinquishing his ownership of
              the franchise.
              <br></br> <br></br>
              This led to a sequel trilogy, consisting of Episode VII: The Force
              Awakens (2015), Episode VIII: The Last Jedi (2017), and Episode
              IX: The Rise of Skywalker (2019). All nine films, collectively
              referred to as the "Skywalker Saga", were nominated for Academy
              Awards, with wins going to the first two releases. Together with
              the theatrical live action "anthology" films Rogue One (2016) and
              Solo (2018), the combined box office revenue of the films equate
              to over US$10 billion, making Star Wars the third-highest-grossing
              film franchise of all time.
            </p>
          </div>
          <div className="px-5 pt-10">
            <img
              src={aboutImg}
              alt="about-img"
              className="w-full h-full object-top object-contain"
            />
          </div>
        </div>
      </div>

      <div id="films">
        <h1 className="py-2 text-3xl border-b border-b-gray-400 px-4">
          {" "}
          Films{" "}
        </h1>
        <Film data={data} />
      </div>
    </div>
  );
}

export default Home;
