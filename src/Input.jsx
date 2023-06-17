import React, { useState } from "react";

function Input(props) {
  const [input, setInput] = useState("");

  function HandleChange(e) {
    const newInput = e.target.value;
    setInput(newInput);
  }

  function submitNote() {
    if (input !== "") {
      props.onAdd(input);
      setInput("");
    } else alert("enter value")
  }

  return (
    <>
      <div className="addTakSection">
        {/* <i className="fa" aria-hidden="true"></i>
        <i id="add" class="fa-solid fa-plus-circle"></i> */}
        <button onClick={submitNote}>add</button>
        <input
          onChange={HandleChange}
          id="userInput"
          type="text"
          required=""
          value={input}
        ></input>
      </div>
    </>
  );
}

export default Input;
