import React from "react";
import "./MainContainer.css";
import Header from "./Header";
import Input from "./Input";
import Tasks from "./Tasks"

function MainContainer() {
  return <div className="mainContainer">
  <Header/>
  <Input/>
  <Tasks />

  </div>;
}

export default MainContainer;
