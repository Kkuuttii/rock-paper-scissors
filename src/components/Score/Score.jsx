import React, { useState, useEffect } from "react";
import "./Score.css"
function Score (props) { 

    return (
      <div className="score">
        <div> {props.playerScore} </div>
        <div> vs </div>
        <div> {props.opponentScore} </div>
      </div>
    );
}

  export default Score;