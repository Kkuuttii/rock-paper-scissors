import React from "react";
import "./Player.css";
import { FaRegHandPaper, FaRegHandRock, FaRegHandScissors } from "react-icons/fa"

function Player(props) {
  //let [selectedRock, setSelectedRock] = useState(false);
  //let [selectedScissors, setSelectedScissors] = useState(false);
  //let [selectedPaper, setSelectedPaper] = useState(false);

  let [selectedButton, setSelectedButton] = useState ('');

  function selected (string) {
      setSelectedButton(string);
      props.onHandClick(string);
  }

  // function selected (string) развернутое {
  //   function selectRockHandler() {
  //     props.onHandClick("rock");
  //     setSelectedRock(true);
  //     setSelectedScissors(false);
  //     setSelectedPaper(false);
  //   }

  //   function selectScissorsHandler() {
  //     props.onHandClick("scissor");
  //     setSelectedScissors(true);
  //     setSelectedRock(false);
  //     setSelectedPaper(false);
  //   }

  //   function selectPaperHandler() {
  //     props.onHandClick("paper");
  //     setSelectedPaper(true);
  //     setSelectedRock(false);
  //     setSelectedScissors(false);
  //   }
  // }


    return (
      <div className = "game-field-wrapper">

        <div 
        className={`hand-button-wrapper player-pointer ${ (selectedButton === "rock") ? "selected" : ""} `} 
        onClick={() => selected("rock")}> 
          <FaRegHandRock className="hands"/> 
        </div>

        <div 
        className={`hand-button-wrapper player-pointer ${(selectedButton === "scissor") ? "selected" : ""} `} 
        onClick={() => selected("scissor")}> 
          <FaRegHandScissors className="hands"/> 
        </div>

        <div 
        className={`hand-button-wrapper player-pointer ${(selectedButton === "paper") ? "selected" : ""} `} 
        onClick={() => selected("paper")}> 
          <FaRegHandPaper className="hands"/> 
        </div>

      </div>
    );
  }

  export default Player;

  