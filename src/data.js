// Storing common data that will be required throughout the website
import slider1 from "./images/slider1.jpg";
import slider2 from "./images/slider2.jpg";
import slider3 from "./images/slider3.jpg";
import slider4 from "./images/slider4.jpg";
import slider5 from "./images/slider5.jpg";
import hope from "./images/hope.jpg";
import jedi from "./images/jedi.jpg";
import sith from "./images/sith.jpg";
import menace from "./images/menace.jpg";
import clones from "./images/clones.jpg";
import strikes from "./images/strikes.jpg";

export const slides = [
  { url: slider1 },
  { url: slider2 },
  { url: slider3 },
  { url: slider4 },
  { url: slider5 },
];

export const filmImages = [
  {
    url: hope,
    title: "A New Hope",
    videoUrl: "https://www.youtube.com/embed/vZ734NWnAHA",
    articleLink: "https://bennettrcoles.com/star-wars-a-new-hope/",
  },
  {
    url: strikes,
    title: "The Empire Strikes Back",
    videoUrl: "https://www.youtube.com/embed/urhsYepFqs0",
    articleLink: "https://www.lucasfilm.com/productions/episode-v/",
  },
  {
    url: jedi,
    title: "Return of the Jedi",
    videoUrl: "https://www.youtube.com/embed/EcQKTTwLA-Y",
    articleLink: "https://www.rogerebert.com/reviews/return-of-the-jedi-1997",
  },
  {
    url: menace,
    title: "The Phantom Menace",
    videoUrl: "https://www.youtube.com/embed/bD7bpG-zDJQ",
    articleLink:
      "https://www.theguardian.com/film/article/2024/may/03/star-wars-the-phantom-menace-still-terrible-after-all-these-years",
  },
  {
    url: clones,
    title: "Attack of the Clones",
    videoUrl: "https://www.youtube.com/embed/gYbW1F_c9eM",
    articleLink:
      "https://www.theguardian.com/film/star-wars-episode-ii-attack-of-the-clones",
  },
  {
    url: sith,
    title: "Revenge of the Sith",
    videoUrl: "https://www.youtube.com/embed/P7PSSFq5F8w",
    articleLink:
      "https://www.theringer.com/movies/2020/5/19/21262896/revenge-of-the-sith-star-wars-15-years-later",
  },
];

export const tabItems = [
  { name: "Characters" },
  { name: "Species" },
  { name: "Vehicles" },
  { name: "Starships" },
];
