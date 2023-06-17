import React from "react";
import "./ClearButton.css";

function ClearButton(props) {



  return <div className="clear">
    <button onClick={props.onDeletingAll}>clear list</button>
  </div>;
}

export default ClearButton;
