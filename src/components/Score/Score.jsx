import React, { useState, useEffect } from "react";
import "./Score.css"
function Score ({playerScore , opponentScore}) { 

    return (
      <div className="score">
        <div> {playerScore} </div>
        <div> vs </div>
        <div> {opponentScore} </div>
      </div>
    );
}

  export default Score;