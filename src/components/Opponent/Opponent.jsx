import React from "react";
import "./Opponent.css";
import { FaHandRock, FaHandScissors, FaHandPaper } from "react-icons/fa"

function Opponent (props) {
    return (
      <div className = "game-field-wrapper">
        <div className = "hand-button-wrapper"> <FaHandRock className="hands"/ > </div>
        <div className = "hand-button-wrapper"> <FaHandScissors className="hands"/> </div>
        <div className = "hand-button-wrapper"> <FaHandPaper className="hands"/> </div>
      </div>
    );
  }

  export default Opponent;