# React_ES6_Spread_Operator
{React Development Journey PT 10}

## Example Code || Get Started by Creating App.js and Index.JS
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

// Index

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

```

## Input 

Type your input into the textfield provided below.

<img width="199" alt="Capture" src="https://user-images.githubusercontent.com/91548582/143592095-9d392802-5fe9-4518-91c5-0c19f0be97d7.PNG">

## Output

On App execution, the example output for the app should display the users desired input as shown below! || Get in touch if you have trouble launching the app!

<img width="146" alt="Capture" src="https://user-images.githubusercontent.com/91548582/143592212-7cec3d5c-c1f7-4565-8b53-a9804f52e404.PNG">
