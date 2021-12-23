import React, { useState } from "react";
import Header from "../Header/Header";
import Player from "../Player/Player";
import Score from "../Score/Score";
import Opponent from "../Opponent/Opponent";
import Description from "../Description/Description";

import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Opponent/>
      <Score/>
      <Player/>
      <Description/>
    </div>
  );
}

export default App;
