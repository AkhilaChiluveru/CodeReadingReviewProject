import './App.css';
import JokeDataFecth from './Components/Joke/jokedatafecth.js'
import LaunchPage from './Components/LaunchPage/Launchpage.js';
import Joke from './Components/Joke/joke'
function App() {
  return (
    <div>
       <LaunchPage />
       <JokeDataFecth />
    </div>
   
  );
}
export default App;
