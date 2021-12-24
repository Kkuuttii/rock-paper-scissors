import React, { useState } from "react";
import Header from "../Header/Header";
import Player from "../Player/Player";
import Score from "../Score/Score";
import Opponent from "../Opponent/Opponent";
import Description from "../Description/Description";

import './App.css';

function App(props) {

  // let [playerSelectedHand, setplayerSelectedHand] = useState();

  return (
    <div>
      <Header/>
      <Opponent/>
      <Score/>
      <Player/>
      <Description /> 
      {/* selected={playerSelectedHand} */}
    </div>
  );
}

export default App;
