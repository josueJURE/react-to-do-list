import React, { useState } from "react";

function Input() {

    const [input, setInput] = useState("");
    
    function HandleChange(e) {
        const newInput = e.target.value;
        setInput(newInput)
        console.log(newInput)
        

    }



  return (
    <>
      <div class="addTakSection">
        <i class="fa" aria-hidden="true"></i>
        <i id="add" class="fa-solid fa-plus-circle"></i>
        <input onChange={HandleChange} id="userInput" type="text" required="" value={input}></input>
      </div>
    </>
  );
}

export default Input;
