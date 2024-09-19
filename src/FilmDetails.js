import React, { useEffect, useState } from "react";
import Header from "./Header";
import { tabItems } from "./data";
import { useLocation } from "react-router-dom";
import "./App.css";

const FilmDetails = () => {
  const location = useLocation();
  const filmDetails = location.state;
  const {
    title,
    url,
    videoUrl,
    director,
    episodeID,
    articleLink,
    modifiedDate,
    producers,
    openingCrawl,
    characterConnection,
    speciesConnection,
    starshipConnection,
    vehicleConnection,
  } = filmDetails;
  const [selectedTab, setTabValue] = useState("Characters");
  const [tabContent, setTabContent] = useState(characterConnection?.characters);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedTab === "Characters") {
      setTabContent(characterConnection?.characters);
    } else if (selectedTab === "Species") {
      setTabContent(speciesConnection?.species);
    } else if (selectedTab === "Vehicles") {
      setTabContent(vehicleConnection?.vehicles);
    } else if (selectedTab === "Starships") {
      setTabContent(starshipConnection?.starships);
    }
  }, [
    selectedTab,
    characterConnection,
    speciesConnection,
    vehicleConnection,
    starshipConnection,
  ]);

  return (
    <div className="film-details">
      <Header />
      {filmDetails ? (
        <div className="pt-20">
          {videoUrl && (
            <div className="video-container mx-5">
              <iframe
                width="100%"
                height="450"
                src={videoUrl}
                title={title}
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          )}
          <div className="film-details-content">
            <div className="poster m-5">
              <img src={url} alt="poster" className="w-full object-center" />
            </div>
            <div className="details mt-5 mx-5 pt-3">
              <h1 className="font-bold text-3xl text-wrap">
                Star Wars: {title} (Episode {episodeID})
              </h1>
              <p className="text-[#b5b7b7] text-md mt-3">
                <strong className="text-[#b5b7b7]">Rating:</strong> PG - 13
              </p>
              <p className="text-[#b5b7b7] text-md">
                <strong className="text-[#b5b7b7]">Runtime:</strong> 2h 20min
              </p>
              <p className="text-[#b5b7b7] text-md">
                <strong className="text-[#b5b7b7]">Release Date:</strong>
                {modifiedDate}
              </p>
              <p className="text-[#b5b7b7] text-md">
                <strong className="text-[#b5b7b7]">Director:</strong> {director}
              </p>
              <p className="text-[#b5b7b7] text-md">
                <strong className="text-[#b5b7b7]">Producers:</strong>
                {producers.join(", ")}
              </p>
              <p className="text-[#b5b7b7] text-md">
                <strong className="text-[#b5b7b7]">Relatable article:</strong>
                <a
                  href={articleLink}
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-blue-700">
                  {articleLink}
                </a>
              </p>
              <p className="text-[#b5b7b7] text-lg mt-3">{openingCrawl}</p>
              <div className="pt-5 pb-2 text-xl border-b border-b-gray-400">
                Databank: {title}
              </div>
              <div className="grid grid-cols-4 bg-black">
                {tabItems.map((tab, index) => (
                  <p
                    key={index}
                    className={`bg-transparent p-3 cursor-pointer text-center ${
                      selectedTab === tab.name
                        ? "active bg-slate-800 border-b"
                        : ""
                    }`}
                    onClick={() => setTabValue(tab.name)}>
                    {tab.name}
                  </p>
                ))}
              </div>
              {/* show the selected tab value */}
              <div className="mt-2 mb-4 flex flex-wrap list-none">
                {tabContent?.map((character, index) => (
                  <li
                    key={index}
                    className="font-bold p-3 text-slate-900 bg-slate-300 m-2 rounded-lg"
                  >
                    {character.name}
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center pt-56">
          <h1 className=" text-3xl text-gray-400">No data to display</h1>
          <a href="/" className="underline text-blue-900">
            Go back home
          </a>
        </div>
      )}
    </div>
  );
};

export default FilmDetails;
