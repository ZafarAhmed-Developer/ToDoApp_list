import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([
    "Complete the Lecture Notes",
    "Ready for the Mid-exam",
    "Complete the Journal"
  ]);

  return (
    <div className="min-h-screen bg-[#a3b18a] flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-[#1b4332] rounded-[2.5rem] p-8 md:p-12 shadow-2xl flex flex-col items-center">
        <h1 className="text-white text-3xl md:text-4xl font-bold text-center mb-8 tracking-wide block w-full">
          Get Things Done !
        </h1>

        <TodoForm todoList={todoList} setTodoList={setTodoList} />

        <div className="w-full">
          <TodoList todoList={todoList} setTodoList={setTodoList} />
        </div>
      </div>
    </div>
  );
}

export default App;
