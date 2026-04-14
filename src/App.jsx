import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (newTodo) => {
    const isDuplicate = todoList.some(
      (item) => item.toLowerCase() === newTodo.toLowerCase()
    );
    if (!isDuplicate) {
      setTodoList([...todoList, newTodo]);
    } else {
      alert("Todo List already exist ......");
    }
  };

  return (
    <div className="App mt-20">
      <h1 className="text-[50px] font-bold text-center">ToDo List</h1>
      <TodoForm addTodo={addTodo} />
      <div className="outerDiv">
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      </div>
    </div>
  );
}

export default App;
