import './App.css';
import JokeDataFecth from '/Users/akhila/AkhilaFrontend/frontend-homework/stressfree/src/Joke/jokedatafecth.js'
import LaunchPage from '/Users/akhila/AkhilaFrontend/frontend-homework/stressfree/src/LaunchPage/Launchpage.js';
//import Joke from '/Users/akhila/AkhilaFrontend/frontend-homework/stressfree/src/Joke/joke.js'
function App() {
  return (
    <div>
       <LaunchPage />
       <JokeDataFecth />
    </div>
   
  );
}
export default App;
