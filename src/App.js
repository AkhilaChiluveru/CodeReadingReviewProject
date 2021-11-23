import './App.css';
//import JokeDataFecth from './Components/Joke/jokedatafecth.js'
//import LaunchPage from './Components/LaunchPage/Launchpage.js';
import Joke from './Components/Joke/joke'
import { Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
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
              <Link className="nav-link" to="/joke"> 
                <div className="jokedisplay">
                  <label for="jokeicon">
                    <img id="jokeicon"src={jokeicon} alt="joke-logo" height="50em" width="50em"/>
                    <p>Joke</p>
                  </label>
                </div>
              </Link>
            </NavItem>

          <NavItem className="navs">  
            <Link className="nav-link" to="/dictionary">
              <div className="dictionarydisplay">
                <label for="dictionaryicon">
                  <img id="dictionaryicon"src={dictionaryicon} alt="dictionary-logo" height="50em" width="50em"/>
                  <p>Dictionary</p>
                </label>
              </div>
            </Link>
          </NavItem>
          <NavItem className="navs">  
            <Link className="nav-link" to="/news">
              <div className="newsdisplay">
                <label for="newsicon">
                  <img id="newsicon"src={newsicon} alt="news-logo" height="50em" width="50em"/>
                  <p>News</p>
                </label>
              </div>
            </Link> 
          </NavItem>
          <NavItem className="navs">
            <Link className="nav-link" to="/advice">
              <div className="advicedisplay">
                <label for="adviceicon">
                  <img id="adviceicon"src={adviceicon} alt="advice-logo" height="50em" width="50em"/>
                  <p>Advice</p>
                </label>
              </div>
            </Link>
          </NavItem>
          <NavItem className="navs">
            <Link className="nav-link" to="/music">
                <div className="musicdisplay">
                <label for="musicicon">
                  <img id="musicicon"src={musicicon} alt="music-logo" height="50em" width="50em"/>
                  <p>Music</p>
                </label>
              </div>
            </Link> 
          </NavItem>
          <NavItem className="navs"> 
            <Link className="nav-link" to="/events">
             <div className="eventsdisplay">
                <label for="eventsicon">
                  <img id="eventsicon"src={eventsicon} alt="events-logo" height="50em" width="50em"/>
                  <p>Events</p>
                </label>
              </div>
            </Link>
          </NavItem>
          <NavItem className="navs">
            <Link className="nav-link" to="/quotes">
              <div className="quotesdisplay">
                <label for="quotesicon">
                  <img id="quotesicon"src={quoteicon} alt="quotes-logo" height="50em" width="50em"/>
                  <p>Quotes</p>
                </label>
              </div>
            </Link>
          </NavItem>
          <NavItem className="navs">  
            <Link className="nav-link" to="/gifs">
            <div className="gifsdisplay">
                <label for="gifsicon">
                  <img id="gifsicon"src={gifsicon} alt="gifs-logo" height="50em" width="50em"/>
                  <p>GIFs</p>
                </label>
              </div>
              </Link> 
              </NavItem>
        </Nav>
      </div>

      <Routes>
          <Route exact path='/joke' element={<Joke />}></Route>
         
        </Routes>
</BrowserRouter>
   
  );
}
export default App;


/*
 <Route exact path='/advice' element={<Advice />}></Route>
          <Route exact path='/News' element={<News />}></Route>
*/