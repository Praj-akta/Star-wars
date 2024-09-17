import { useEffect, useState } from "react";
import Film from "./Film";
import Header from "./Header";
import { slides } from "./data";
import aboutImg from "./images/about.jpg";
import { useQuery, gql } from "@apollo/client";

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
  // fetching films data
  const { data, error } = useQuery(FILMS_QUERY);
  if (error) console.log("error", error.message);

  const [currentIndex, setCurrentIndex] = useState(1);
  const [selectedSortValue, setSortedValue] = useState("title");
  const [sortedFilms, setSortedFilms] = useState([]);

  // storing the data in sortedFilms array
  useEffect(() => {
    setSortedFilms(data?.allFilms?.films);
  }, [data]);

  // This useEffect works on autoplaying slider images
  useEffect(() => {
    const autoplay = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(autoplay);
  }, [currentIndex]);

  // This will set the selected sorted value
  useEffect(() => {
    sortFilms(selectedSortValue);
  }, [selectedSortValue]);

  const sortFilms = (value) => {
    const films = [...sortedFilms]; 
    const sorted = films.sort((a, b) => {
      if (value === "title") {
        return a.title.localeCompare(b.title);
      } else if (value === "releaseDate") {
        return new Date(a.releaseDate) - new Date(b.releaseDate);
      } else if (value === "episodeID") {
        return a.episodeID - b.episodeID;
      }
      return 0;
    });

    setSortedFilms(sorted);
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
        <div className="flex justify-between py-2 border-b border-b-gray-400 px-4">
          <h1 className="text-3xl">Films</h1>
          <h3>
            Sort by:
            <select
              id="sort"
              value={selectedSortValue}
              onChange={(e) => setSortedValue(e.target.value)}
            >
              <option value="title">Title</option>
              <option value="releaseDate">Release Date</option>
              <option value="episodeID">Episode Number</option>
            </select>
          </h3>
        </div>

        <Film data={sortedFilms} />
      </div>
    </div>
  );
}

export default Home;
