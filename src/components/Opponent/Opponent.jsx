import React from "react";
import "./Opponent.css";
import { FaHandRock, FaHandScissors, FaHandPaper } from "react-icons/fa"

function Opponent (props) {
    return (
      <div className = "game-field-wrapper">
        <div> <FaHandRock/> </div>
        <div> <FaHandScissors/> </div>
        <div> <FaHandPaper/> </div>
      </div>
    );
  }

  export default Opponent;