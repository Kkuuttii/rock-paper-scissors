import React, { useState }  from "react";
import "./Player.css";
import { FaRegHandPaper, FaRegHandRock, FaRegHandScissors } from "react-icons/fa"


function Player(props) {
  let [selectedRock, setSelectedRock] = useState(false);
  let [selectedScissors, setSelectedScissors] = useState(false);
  let [selectedPaper, setSelectedPaper] = useState(false);

  function selectRockHandler() {
    setSelectedRock(prev => !prev.selection);
    setSelectedScissors(prev => prev ? prev.false : prev.false);
    setSelectedPaper(prev => prev ? prev.false : prev.false);

  }

  function selectScissorsHandler() {
    setSelectedScissors(prev => !prev);
    setSelectedRock(prev => prev ? false : false);
    setSelectedPaper(prev => prev ? false : false);
  }

  function selectPaperHandler() {
    setSelectedPaper(prev => !prev);
    setSelectedRock(prev => prev ? false : false);
    setSelectedScissors(prev => prev ? false : false);
  }


    return (
      <div className = "game-field-wrapper">

        <div 
        className={`hand-button-wrapper player-pointer ${selectedRock ? "selected" : ""} `} 
        onClick={selectRockHandler}> 
          <FaRegHandRock className="hands"/> 
        </div>

        <div 
        className={`hand-button-wrapper player-pointer ${selectedScissors ? "selected" : ""} `} 
        onClick={selectScissorsHandler}> 
          <FaRegHandScissors className="hands"/> 
        </div>

        <div 
        className={`hand-button-wrapper player-pointer ${selectedPaper ? "selected" : ""} `} 
        onClick={selectPaperHandler}> 
          <FaRegHandPaper className="hands"/> 
        </div>

        
      </div>
    );
  }

  export default Player;

  