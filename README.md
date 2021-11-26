# React_ES6_Spread_Operator-

```
import React, { useState } from "react";

function App() {
  const [inputText, SetInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newvalue = event.target.value;
    SetInputText(newvalue);
    // console.log(newvalue);
  }
  function add_Item() {
    setItems((prevValue) => {
      return [...prevValue, inputText];
    });
    SetInputText("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={add_Item}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((singleItem) => (
            <li>{singleItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;


```
