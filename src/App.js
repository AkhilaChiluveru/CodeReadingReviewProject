import { Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from "react";

import './App.css';
import MainNews from './Components/News/MainNews'
import LaunchPage from './Components/LaunchPage/Launchpage';
import Events from "./Components/Events/events";

import Display from "./Components/DisplayEvent";
import { eventsConfig } from "./config";


function App() {
  const [isEvent, setIsEvent] = useState(false);
  const [displayData, setDisplayData] = useState();
  const createDisplayDataJoke = (data) => {
    console.log("data from joke call"+data)
    return (
        <div className="Jokedisplay">{data}</div>
    );
  };
  const apiResponseHandler = (url, eventName) => {
    
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsEvent(false);
        if (eventName === "jokes") {
          setDisplayData(createDisplayDataJoke(data.joke));
        }
      });
    }

  return (
<BrowserRouter>
  <LaunchPage />
    <div className = 'navContainer'>
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


