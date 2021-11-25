import { Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from "react";

import './App.css';
import MainNews from './Components/News/MainNews'
import LaunchPage from './Components/LaunchPage/Launchpage';
import Events from "./Components/Events/events";
import dictionaryicon from './Logos/dictionary-icon.png'
import Display from "./Components/DisplayEvent";
import { eventsConfig } from "./config";
import newsicon  from './Logos/news-icon.png'
import gifsicon from './Logos/GIfs-icon.gif'
import musicicon from './Logos/music-icon.png'
import quoteicon from './Logos/quote-icon.jpeg'
import adviceicon from './Logos/advice-icon.png'
import eventsicon from './Logos/events-icon.png'

function App() {
  const [isEvent, setIsEvent] = useState(false);
  const apiResponseHandler = (url, eventName) => {
    //let headers = {};
    /* if(eventName === 'gifs'){
      headers ={
        method:'GET',
        headers:{"api_key":'frr4Czt15JJUC0jn5Vyl5Rgp8Dg9IHSO'}
      }
    } */
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsEvent(false);
        if (eventName === "jokes") {
          //setDisplayData(createDisplayDataJoke(data.joke));
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
      <Routes>
          <Route exact path='#' element={<LaunchPage />}></Route>         
          <Route exact path='/news' element={<MainNews />}></Route>
         
        </Routes>
</BrowserRouter>
   
  );
}
export default App;


/*
 <Route exact path='/joke' element={<Joke />}></Route>
          <Route exact path='/advice' element={<Joke />}></Route>
          
          <Route exact path='/quotes' element={<Joke />}></Route>
          <Route exact path='/dictionary' element={<Joke />}></Route>
          <Route exact path='/music' element={<Joke />}></Route>
            <Route exact path='/gifs' element={<GIFs />}></Route>
*/