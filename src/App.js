import React, {useState} from "react";
// Adding Component
import Player from './components/Player';
import Song from './components/Song';
// importing stylehacks
import "./style/app.scss";
//importing utils
import data from "./util";

function App() {
  //STATE
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong = {currentSong}/>
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong= {currentSong}/>
    </div>
  );
}

export default App;
