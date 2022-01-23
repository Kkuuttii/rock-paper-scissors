import React, { useState, useEffect }  from "react";
import Header from "../Header/Header";
import Player from "../Player/Player";
import Score from "../Score/Score";
import Opponent from "../Opponent/Opponent";
import Description from "../Description/Description";

import './App.css';

function App() {

  let [playerSelectedHand, setPlayerSelectedHand] = useState('nothing');
  let [opponentSelectedHand, setOpponentSelectedHand] = useState('nothing');

  let [playerScore, setPlayerScore] = useState(0);
  let [opponentScore, setOpponentScore] = useState(0);

  let [whoWin, setWhoWin] = useState ('Raw :/');

  function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  function scoreCounter (playerFigure, opponentFigure) {
    if((playerFigure === "rock" && opponentFigure === "scissors") || (playerFigure === "scissors" && opponentFigure === "paper") || (playerFigure === "paper" && opponentFigure === "rock")) {
      setPlayerScore((prev) => prev + 1);
    } else if ((playerFigure === "rock" && opponentFigure === "paper")||(playerFigure === "scissors" && opponentFigure === "rock")||(playerFigure === "paper" && opponentFigure === "scissors")) {
      setOpponentScore((prev) => prev + 1);
    } 
  }

	// useEffect(() => {
  //   if((playerSelectedHand === "rock" && opponentSelectedHand === "scissors") || (playerSelectedHand === "scissors" && opponentSelectedHand === "paper") || (playerSelectedHand === "paper" && opponentSelectedHand === "rock")) {
  //     setPlayerScore((prev) => prev + 1);
  //   } else if ((playerSelectedHand === "rock" && opponentSelectedHand === "paper")||(playerSelectedHand === "scissors" && opponentSelectedHand === "rock")||(playerSelectedHand === "paper" && opponentSelectedHand === "scissors")) {
  //     setOpponentScore((prev) => prev + 1);
  //   } 
	// }, [playerSelectedHand, opponentSelectedHand]);

//  function scoreCounter () расширенный вариант {
//     if (playerSelectedHand === "rock") {
//       if (opponentSelectedHand === 2) {
//         setPlayerScore((prev) => prev + 1);
//       } else if (opponentSelectedHand === 3) {
//         setOpponentScore((prev) => prev + 1);
//       } 
      
//     } else if (playerSelectedHand === "scissors") {
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

let getOpponentSelectedHand = () => {
	const randomNumber = randomInteger(1, 3);
	if (randomNumber === 1) {
    return 'rock';
  } else if (randomNumber === 2) {
    return 'scissors';
  } else if (randomNumber === 3) {
    return 'paper';
  }
}
  function decribeWhoWin (player, opponent) {
    if (playerScore === opponentScore) {
      setWhoWin ('Raw :/');
    } else if (playerScore > opponentScore) {
      setWhoWin ('You win :)');
    } else if (playerScore < opponentScore) {
      setWhoWin ('You lose :(');
    }
  }


  return (
    <div>
      <Header/>
      <Opponent opponentSelectedHand={opponentSelectedHand} playerSelectedHand = {playerSelectedHand}/>
      <Score playerScore = {playerScore} opponentScore={opponentScore}/> 
      <Player onHandClick = {(value) => {
        setPlayerSelectedHand(value); // ОБНОВИ ЭТОТ СТЕЙТ ЗНАЧЕНИЕМ value (НУЖНО БУДЕТ ОБНОВИТЬ КОМПОНЕНТ)
				let opponentFigure = getOpponentSelectedHand();
        setOpponentSelectedHand(opponentFigure); // ОБНОВИ ЭТОТ СТЕЙТ ЗНАЧЕНИЕМ opponentFigure
        scoreCounter(value, opponentFigure);
        decribeWhoWin (playerScore, opponentScore)
        }
      }/>
      <Description playerSelectedHand = {playerSelectedHand} opponentSelectedHand={opponentSelectedHand} playerScore = {playerScore} opponentScore={opponentScore} whoWin={whoWin}/> 
    </div>
  );
}

export default App;
