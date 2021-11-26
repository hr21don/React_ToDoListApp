import React, { useState } from "react";
import InputArea from "./InputArea";
import ToDoItem from "./Item_To_Do";

function App() {
  const [todoTasks, setTodoTasks] = useState([]);

  function addTask(todoInput) {
    setTodoTasks((prevTodoItems) => {
      return [...prevTodoItems, todoInput];
    });
  }

  function handleKeyPress(event) {
    return setTodoTasks((prevTodoInput) => {
      return [...prevTodoInput, event.target.value];
    });
  }

  function deleteTodoTask(id) {
    setTodoTasks((prevTodoItems) => {
      return prevTodoItems.filter((task, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <InputArea onAdd={addTask} onKeyPress={handleKeyPress} />
      </div>
      <div>
        <ul>
          {todoTasks.map((todoTasks, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoTasks}
              onChecked={deleteTodoTask}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
