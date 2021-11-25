import { Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import MainNews from './Components/News/MainNews'
import LaunchPage from './Components/LaunchPage/Launchpage';
import jokeicon from './Logos/joke-icon.jpeg'
import dictionaryicon from './Logos/dictionary-icon.png'
import newsicon  from './Logos/news-icon.png'
import gifsicon from './Logos/GIfs-icon.gif'
import musicicon from './Logos/music-icon.png'
import quoteicon from './Logos/quote-icon.jpeg'
import adviceicon from './Logos/advice-icon.png'
import eventsicon from './Logos/events-icon.png'

function App() {
  return (
<BrowserRouter>
  <LaunchPage />
    <div className = 'navContainer'>
      <Nav className="ml-auto" >
          

          <NavItem className="navs">  
            <Link className="nav-link" to="/dictionary">
              <div className="dictionarydisplay">
                  <img id="dictionaryicon"src={dictionaryicon} alt="dictionary-logo" height="50em" width="50em"/>
                  <p>Dictionary</p>
              </div>
            </Link>
          </NavItem>
          <NavItem className="navs">  
            <Link className="nav-link" to="/news">
              <div className="newsdisplay">
                  <img id="newsicon"src={newsicon} alt="news-logo" height="50em" width="50em"/>
                  <p>News</p>
              </div>
            </Link> 
          </NavItem>
          <NavItem className="navs">
            <Link className="nav-link" to="/advice">
              <div className="advicedisplay">
                  <img id="adviceicon"src={adviceicon} alt="advice-logo" height="50em" width="50em"/>
                  <p>Advice</p>
              </div>
            </Link>
          </NavItem>
          <NavItem className="navs">
            <Link className="nav-link" to="/music">
                <div className="musicdisplay">
                  <img id="musicicon"src={musicicon} alt="music-logo" height="50em" width="50em"/>
                  <p>Music</p>
              </div>
            </Link> 
          </NavItem>
          <NavItem className="navs"> 
            <Link className="nav-link" to="/events">
             <div className="eventsdisplay">
                  <img id="eventsicon"src={eventsicon} alt="events-logo" height="50em" width="50em"/>
                  <p>Events</p>
              </div>
            </Link>
          </NavItem>
          <NavItem className="navs">
            <Link className="nav-link" to="/quotes">
              <div className="quotesdisplay">
                  <img id="quotesicon"src={quoteicon} alt="quotes-logo" height="50em" width="50em"/>
                  <p>Quotes</p>
              </div>
            </Link>
          </NavItem>
          <NavItem className="navs">  
            <Link className="nav-link" to="/gifs">
            <div className="gifsdisplay">
                  <img id="gifsicon"src={gifsicon} alt="gifs-logo" height="50em" width="50em"/>
                  <p>GIFs</p>
              </div>
              </Link> 
              </NavItem>
        </Nav>
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