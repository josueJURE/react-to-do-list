import React from "react";
import "./Tasks.css";

function Tasks(props) {
  return (
    <div className="row">
      <div>{props.number}</div>
      <input type="checkbox"></input>
      <div>{props.task}</div>
      <button>delete</button>
    </div>
  );
}

export default Tasks;
