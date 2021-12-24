import React from "react";
import "./Description.css"
function Description (props) {
    return (
      <div className="description">
        <p> You have a {props.selected}. The opponent has a stone. raw.</p>
      </div>
    );
  }

  export default Description;