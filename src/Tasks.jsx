import React from "react";
import "./Tasks.css";

function Tasks(props) {
  return (
    <div id={props.id} className="row">
      <div>{props.number}</div>
      <input type="checkbox"></input>
      <div>{props.task}</div>
      <button onClick={()=> props.onDelete(props.id)}>delete</button>
    </div>
  );
}

export default Tasks;
