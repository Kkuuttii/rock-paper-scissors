import React, { useState, useEffect } from "react";
import "./Opponent.css";
import { FaHandRock, FaHandScissors, FaHandPaper } from "react-icons/fa"

function Opponent (props) {

//  let [selectedButton, setSelectedButton] = useState ('');
//  useEffect ((() => {
//      if (props.opponentSelectedHand === 1) {
//      setSelectedButton('rock');
//    } else if (props.opponentSelectedHand === 2) {
//      setSelectedButton('scissors');
//    } else if (props.opponentSelectedHand === 3) {
//      setSelectedButton('paper');
//    }
//  }), [props.playerSelectedHand]);  
  
    return (
      <div className = "game-field-wrapper">

        <div className = {`hand-button-wrapper ${(props.opponentSelectedHand === 1) ? "selected" : ""}`}> <FaHandRock className="hands"/ > </div>

        <div className = {`hand-button-wrapper ${(props.opponentSelectedHand === 2) ? "selected" : ""}`} > <FaHandScissors className="hands"/> </div>

        <div className = {`hand-button-wrapper ${(props.opponentSelectedHand === 3) ? "selected" : ""}`}> <FaHandPaper className="hands"/> </div>
        
      </div>
    );
  }
  
  export default Opponent;