import React from "react";
import "./Description.css"
function Description ({ playerSelectedHand , opponentSelectedHand , whoWin}) {


    return (
      <div className="description">
        <p> You have a {playerSelectedHand}. The opponent has a {opponentSelectedHand}. {whoWin}</p>
      </div>
    );
  }

  export default Description;