import { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import banner from "./images/banner.jpg";
import slider1 from "./images/slider1.jpg";
import slider2 from "./images/slider2.jpg";
import slider3 from "./images/slider3.jpg";
import "./App.css";
import Film from "./Film";

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
      }
    }
  }
`;

function App() {
  const slides = [{ url: banner }, { url: slider1 }, { url: slider2 }, { url: slider3 }];
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
    setCurrentIndex((prevIndex) => prevIndex === slides.length - 1 ? 0 : prevIndex + 1);
  }

  return (
    <div className="relative group m-auto py-5 px-2">
      {/* slider */}
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-[600px] rounded-2xl bg-center bg-cover duration-500"
      ></div>

      {/* films */}
      <div>
        <h1 className="mx-3 py-2 text-3xl border-b border-b-gray-400"> Films </h1>
        <Film data={data} />
      </div>
    </div>
  );
}

export default App;
