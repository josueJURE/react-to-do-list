import React, { useState } from "react";
import "./MainContainer.css";
import Header from "./Header";
import Input from "./Input";
import Tasks from "./Tasks"

function MainContainer() {

  const [items, setItems] = useState([]);

  function addNote(task) {
    setItems(previous => {
      return [...previous, task]
    })

  }



  return <div className="mainContainer">
  <Header/>
  <Input onAdd={addNote}/>
  {items.map((item, index) => {
    return  <Tasks
     task={item}
     key={index}
     number={index + 1}

     />
     
  })}
 

  </div>;
}

export default MainContainer;
