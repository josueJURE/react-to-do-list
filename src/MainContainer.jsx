import React, { useState } from "react";
import "./MainContainer.css";
import Header from "./Header";
import Input from "./Input";
import Tasks from "./Tasks"

function MainContainer() {

  // [tasks, setTaks] = useState([]);

  function addNote(note) {
  console.log(note)
  }



  return <div className="mainContainer">
  <Header/>
  <Input onAdd={addNote}/>
  <Tasks />

  </div>;
}

export default MainContainer;
