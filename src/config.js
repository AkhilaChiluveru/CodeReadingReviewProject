import jokeicon from "./Logos/joke-icon.jpeg";
import dictionaryicon from "./Logos/dictionary-icon.png";
import newsicon from "./Logos/news-icon.png";
import gifsicon from "./Logos/GIfs-icon.gif";
import musicicon from "./Logos/music-icon.png";
import quoteicon from "./Logos/quote-icon.jpeg";
import adviceicon from "./Logos/advice-icon.png";
import eventsicon from "./Logos/events-icon.png";

export const eventsConfig = [
  {
    name: "Jokes",
    iconUrl: jokeicon,
    apiUrl: "https://geek-jokes.sameerkumar.website/api?format=json",
  },
  {
    name: "Advice",
    iconUrl: adviceicon,
    apiUrl: "https://api.adviceslip.com/advice",
  },
  {
    name: "Dictionary",
    iconUrl: dictionaryicon,
    apiUrl: "https://random-words-api.vercel.app/word",
  },
  {
    name: "Quotes",
    iconUrl: quoteicon,
    apiUrl: "https://programming-quotes-api.herokuapp.com/Quotes",
  },
  {
    name: "News",
    iconUrl: newsicon,
    apiUrl:
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=e3bf50ba66e14c15a67b4d44091e78d3",
  },
  {
    name: "GIFs",
    iconUrl: gifsicon,
    apiUrl: "https://g.tenor.com/v1/random?q=excited&key=LIVDSRZULELA",
  },
];

