import React from "react";
import "./Description.css"
function Description (props) {

  let opponentSelectedHand = null;
  if (props.opponentSelectedHand === 1) {
    opponentSelectedHand = 'rock';
  } else if (props.opponentSelectedHand === 2) {
    opponentSelectedHand = 'scissors';
  } else if (props.opponentSelectedHand === 3) {
    opponentSelectedHand = 'paper';
  }

    return (
      <div className="description">
        <p> You have a {props.playerSelectedHand}. The opponent has a {opponentSelectedHand}. raw.</p>
      </div>
    );
  }

  export default Description;