import React from "react";
import "./Player.css";
import { FaRegHandPaper, FaRegHandRock, FaRegHandScissors } from "react-icons/fa"

function Player(props) {
    return (
      <div>
        <div> <FaRegHandRock/> </div>
        <div> <FaRegHandScissors/> </div>
        <div> <FaRegHandPaper/> </div>
      </div>
    );
  }

  export default Player;

  