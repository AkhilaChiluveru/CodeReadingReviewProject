import jokeicon from "./Logos/joke-icon.jpeg";
import dictionaryicon from "./Logos/dictionary-icon.png";
export const eventsConfig = [
  {
    name: "Jokes",
    iconUrl: jokeicon,
    apiUrl: "https://geek-jokes.sameerkumar.website/api?format=json",
  },
  {
    name: "Dictionary",
    iconUrl: dictionaryicon,
    apiUrl: "https://random-words-api.vercel.app/word",
  },
];
