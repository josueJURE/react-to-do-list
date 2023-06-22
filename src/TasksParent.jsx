import React from "react";
import "./Tasks.css";

function TasksParent(props) {
  return <div className="taskList">{props.children}</div>;
}

export default TasksParent;
