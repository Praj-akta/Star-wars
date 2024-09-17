import React from "react";
import hope from "./images/hope.jpg";
import jedi from "./images/jedi.jpg";
import sith from "./images/sith.jpg";
import menace from "./images/menace.jpg";
import clones from "./images/clones.jpg";
import strikes from "./images/strikes.jpg";

const Film = ({ data }) => {
  const filmImages = [
    { url: hope, title: "A New Hope" },
    { url: strikes, title: "The Empire Strikes Back" },
    { url: jedi,  title: "Return of the Jedi" },
    { url: menace, title: "The Phantom Menace" },
    { url: clones, title: "Attack of the Clones"},
    { url: sith, title: "Revenge of the Sith"}
  ];
  
  return (
    <div className="flex flex-wrap w-full h-full">
      {data?.allFilms?.films?.map((value, index) => {
        return (
          <div
            key={index}
            className="h-[300px] w-[120px] sm:w-[160px] md:w-[200px] lg:w-[240px] 
                inline-block cursor-pointer relative p-1 bg-slate-500 mx-2 mt-5"
          >
            <h2 className="text-xl font-bold text-wrap text-ellipsis">
              {value.title}
            </h2>
          </div>
        );
      })}
      {/* <div className="w-[120px] sm:w-[160px] md:w-[200px] lg:w-[240px] inline-block cursor-pointer relative p-1">
        <img
          src={banner}
          alt="demo"
          className="w-full h-auto block rounded-sm"
        />
      </div>
      <div className="w-[120px] sm:w-[160px] md:w-[200px] lg:w-[240px] inline-block cursor-pointer relative p-1">
        <img
          src={slider1}
          alt="demo"
          className="w-full h-auto block rounded-sm"
        />
      </div>
      <div className="w-[120px] sm:w-[160px] md:w-[200px] lg:w-[240px] inline-block cursor-pointer relative p-1">
        <img
          src={slider2}
          alt="demo"
          className="w-full h-auto block rounded-sm"
        />
      </div>
      <div className="w-[120px] sm:w-[160px] md:w-[200px] lg:w-[240px] inline-block cursor-pointer relative p-1">
        <img
          src={slider3}
          alt="demo"
          className="w-full h-auto block rounded-sm"
        />
      </div> */}
    </div>
  );
};

export default Film;
