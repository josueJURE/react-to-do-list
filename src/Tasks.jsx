import React, { useState } from "react";
import "./Tasks.css";

function Tasks(props) {

  const [isDone, setIsDone] = useState("false")

  function handleChange() {
    setIsDone(previous => !previous)
  }


  return (
    <div id={props.id} className="row">
      <div>{props.number}</div>
      <input onChange={handleChange} type="checkbox"></input>
      <div style={{textDecoration: isDone ? "line-through" : "none"}}>{props.task}</div>
      <button onClick={()=> props.onDelete(props.id)}>delete</button>
    </div>
  );
}

export default Tasks;
