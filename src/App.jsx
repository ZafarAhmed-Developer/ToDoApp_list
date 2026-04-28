import { useEffect, useState } from "react";
import axios from "axios";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const API = "http://localhost:5000/api/todos";

function App() {
  const [todoList, setTodoList] = useState([]);

  //  GET (fetch data)
  const fetchTodos = async () => {
    const res = await axios.get(API);
    setTodoList(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  //  ADD
  const addTodo = async (title) => {
    // Check for duplicate (case-insensitive)
    const isDuplicate = todoList.some(
      (todo) => todo.title.toLowerCase() === title.toLowerCase()
    );

    if (isDuplicate) {
      alert(`❌ Task "${title}" already exists! Please add a different task.`);
      return;
    }

    await axios.post(API, { title });
    fetchTodos();
  };

  //  DELETE
  const deleteTodo = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchTodos();
  };

  const updateTodo = async (id, title) => {
    await axios.put(`${API}/${id}`, { title });
    fetchTodos();
  };

  const editTodo = (id, title) => {
    setTodoList((prevList) =>
      prevList.map((todo) =>
        todo._id === id ? { ...todo, title } : todo
      )
    );
  };

  //  COMPLETE / UPDATE
  const toggleTodo = async (id, completed) => {
    await axios.put(`${API}/${id}`, {
      completed: !completed,
    });
    fetchTodos();
  };

  return (
    <div className="min-h-screen bg-[#a3b18a] flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-[#1b4332] rounded-[2.5rem] p-8 md:p-12 shadow-2xl flex flex-col items-center">
        <h1 className="text-white text-3xl md:text-4xl font-bold text-center mb-8 tracking-wide block w-full">
          Get Things Done !
        </h1>

        <TodoForm addTodo={addTodo} />

        <div className="w-full">
          <TodoList
            todoList={todoList}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            updateTodo={updateTodo}
            editTodo={editTodo}

          />
        </div>
      </div>
    </div>
  );
}

export default App;