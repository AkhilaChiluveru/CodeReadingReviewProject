/* This is the main invoking file of this project,
browserrouter tag, renders all the content in the UI 
by calling various methods.
*/

import { BrowserRouter } from "react-router-dom";
import React, { useState } from "react";
import LaunchPage from "./Components/LaunchPage/Launchpage";
import Events from "./Components/Events/events";
import Display from "./Components/Events/index";
import { eventsConfig } from "./config";
import { SliderData } from "./Components/LaunchPage/SliderData";
import "./App.css";
function App() {
  const [isEvent, setIsEvent] = useState(false);
  const [displayData, setDisplayData] = useState();

  /*...
  This function will display different Joke when user hover over the icon
  ...*/

  const createDisplayDataJoke = (data) => {
    return <div className="Jokedisplay">{data}</div>;
  };

  /*....
  This function will display word and its meaning from dictionary data when user will hover over dictionary.
  It is done by first fetching word and definition and after that fetching pronounciation from API
  ....*/

  const createDisplayDataDictionary = (data) => {
    return (
      <>
        <div className="IconDisplay">
          <div className="dictionaryWord">{`${data.word}`}</div>
          <div className="dictionaryDefinition">{`Meaning: ${data.definition}`}</div>
          <div className="dictionaryPronunciation">{`Pronunciation:   ${data.pronunciation}`}</div>
        </div>
      </>
    );
  };

  /*...
  This function will display Advice, user can click on this to see the advice.
  ...*/
  const createDisplayDataAdvice = (data) => {
    return (
      <div className="IconDisplay">
        <h1 className="advice">
          <span>{`${data}`}</span>
        </h1>
      </div>
    );
  };

  /* ....
  ..This function will display the quotes and the name of the author of that quote
  ...*/
  const createDisplayDataQuotes = (data) => {
    let RandomNumber = Math.floor(Math.random() * 100);
    return (
      <div className="IconDisplay">
        <div className="Quote">
          <q>{data[RandomNumber].en}</q>
        </div>
        <div>
          <cite className="authorname">-{data[RandomNumber].author}</cite>
        </div>
      </div>
    );
  };

  /* ....
  ..This function will display new GIF every time user will hover over it
  ...*/

  const createDisplayDataGIFs = (data) => {
    return (
      <div className="IconDisplay">
        <img
          className="GIFimageDisplay"
          src={data.url}
          alt="GiFs"
          height="20%"
          width="20%"
        />
      </div>
    );
  };

  /* ....
  ..This function will display brief news to user with title, description, author name and image
  ...*/

  const createDisplayDataNews = (data) => {
    return (
      <>
        {data.map((val) => {
          return (
            <div className="IconDisplay" key={val.author}>
              <img
                src={val.urlToImage}
                height="20%"
                width="30%"
                alt="NewsImage"
                className="NewsImageIcon"
              />
              <div className="Newstitle">{` ${val.title}`}</div>
              <div className="Newsdescription"> {` ${val.description}`}</div>
              <div className="authorname"> {val.source.name}</div>
            </div>
          );
        })}
      </>
    );
  };
  /*..
  This is the response handler code for all the functions- jokes, dictionary, advice, quotes, news and gifs
  */
  const apiResponseHandler = (url, eventName) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setIsEvent(false);
        if (eventName === "jokes") {
          setDisplayData(createDisplayDataJoke(data.joke));
        } else if (eventName === "dictionary") {
          setDisplayData(createDisplayDataDictionary(data[0]));
        } else if (eventName === "advice") {
          setDisplayData(createDisplayDataAdvice(data.slip.advice));
        } else if (eventName === "quotes") {
          setDisplayData(createDisplayDataQuotes(data.slice(0, 100)));
        } else if (eventName === "news") {
          setDisplayData(createDisplayDataNews(data.articles.slice(0, 5)));
        } else if (eventName === "gifs/memes") {
          setDisplayData(createDisplayDataGIFs(data.memes[0]));
        }
      });
  };

  return (
    <BrowserRouter>
      <LaunchPage slides={SliderData} />
      <div className="navContainer">
        <div className="AllIconsDisplay">
          {eventsConfig.map((data) => {
            return <Events eventData={data} iconClick={apiResponseHandler} />;
          })}
        </div>
      </div>
      <div className="output">
        {displayData && <Display displayContent={displayData} />}
      </div>
    </BrowserRouter>
  );
}
export default App;
