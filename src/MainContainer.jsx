import React, { useState } from "react";
import "./MainContainer.css";
import Header from "./Header";
import Input from "./Input";
import Tasks from "./Tasks";
import "./Tasks.css";
import ClearButton from "./ClearButton";
import TasksParent from "./TasksParent";
import "./Tasks.css";
import NumberOfTask from "./NumberOfTask";

function MainContainer() {
  const [items, setItems] = useState([]);

  function addNote(task) {
    setItems((previous) => {
      return [...previous, task];
    });
    console.log(items);
  }

  function deleteItem(id) {
    setItems((previous) => {
      return previous.filter((_, index) => {
        return id !== index;
      });
    });
  }

  function deleteEverything() {
    setItems([]);
  }

  return (
    <div className="mainContainer">
      <Header />
      <NumberOfTask />
      <ClearButton onDeletingAll={deleteEverything} />
      <TasksParent>
        {items.map((item, index) => {
          return (
            <Tasks
              task={item}
              key={index}
              number={index + 1}
              id={index}
              onDelete={deleteItem}
            />
          );
        })}
      </TasksParent>

      <Input onAdd={addNote} />
    </div>
  );
}

export default MainContainer;
