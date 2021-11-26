import React, { useState } from "react";

function InputArea(props) {
  const [todoInput, setTodoInput] = useState("");

  function handleChange(event) {
    const newInput = event.target.value;
    setTodoInput(newInput);
  }

  return (
    <div className="form">
      <input
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            props.onKeyPress(event);
            setTodoInput("");
          }
        }}
        onChange={handleChange}
        type="text"
        value={todoInput}
      />
      <button
        onClick={() => {
          props.onAdd(todoInput);
          setTodoInput("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
