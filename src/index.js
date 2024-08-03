import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const tasksData = [
  { task: "practise react", done: false },
  { task: "practise electronics", done: true },
  { task: "practise idk what", done: true },
  { task: "practise walking (just a kid)", done: false },
];

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Todo list</h1>
    </header>
  );
}

function TodoList() {
  const todoNum = tasksData.length; 
  return (
    <div>
      <p>you have {todoNum} todos</p>
      <ul id="list">
        {tasksData.map((task) => (
          <TodoItem
            key={task.task} 
            task={task}
          />
        ))}
      </ul>
    </div>
  );
}

function TodoItem({ task }) {
  return (
    <li className={task.done ? 'done' : ''}>
      {task.task}
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
