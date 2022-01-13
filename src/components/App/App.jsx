import React, { useState, useEffect }  from "react";
import Header from "../Header/Header";
import Player from "../Player/Player";
import Score from "../Score/Score";
import Opponent from "../Opponent/Opponent";
import Description from "../Description/Description";

import './App.css';

function App(props) {

  let [playerSelectedHand, setPlayerSelectedHand] = useState(null);
  let [opponentSelectedHand, setOpponentSelectedHand] = useState(null);

  let [playerScore, setPlayerScore] = useState(0);
  let [opponentScore, setOpponentScore] = useState(0);

  function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  function scoreCounter () {
    if((playerSelectedHand === "rock" && opponentSelectedHand === 2) || (playerSelectedHand === "scissor" && opponentSelectedHand === 3) || (playerSelectedHand === "paper" && opponentSelectedHand === 1)) {
      setPlayerScore((prev) => prev + 1);
    } else if ((playerSelectedHand === "rock" && opponentSelectedHand === 3)||(playerSelectedHand === "scissor" && opponentSelectedHand === 1)||(playerSelectedHand === "paper" && opponentSelectedHand === 2)) {
      setOpponentScore((prev) => prev + 1);
    } 
  }
//  function scoreCounter () расширенный вариант {
//     if (playerSelectedHand === "rock") {
//       if (opponentSelectedHand === 2) {
//         setPlayerScore((prev) => prev + 1);
//       } else if (opponentSelectedHand === 3) {
//         setOpponentScore((prev) => prev + 1);
//       } 
      
//     } else if (playerSelectedHand === "scissor") {
//         if (opponentSelectedHand === 1) {
//           setOpponentScore((prev) => prev + 1);
//         } else if (opponentSelectedHand === 3) {
//           setPlayerScore((prev) => prev + 1);
//         }

//     } else if (playerSelectedHand === "paper") {
//         if (opponentSelectedHand === 1) {
//           setPlayerScore((prev) => prev + 1);
//         } else if (opponentSelectedHand === 2) {
//           setOpponentScore((prev) => prev + 1);
//         } 
//       }
//   } 
  
  return (
    <div>
      <Header/>
      <Opponent opponentSelectedHand={opponentSelectedHand} playerSelectedHand = {playerSelectedHand}/>
      <Score playerScore = {playerScore} opponentScore={opponentScore}/> 
      <Player onHandClick = {(value) => {
        setPlayerSelectedHand(value); 
        setOpponentSelectedHand(randomInteger(1, 3));
        scoreCounter ();
        }
      }/>
      <Description playerSelectedHand = {playerSelectedHand} opponentSelectedHand={opponentSelectedHand}/> 
    </div>
  );
}

export default App;
