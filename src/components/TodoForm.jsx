import { useState } from "react";

function TodoForm({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (inputValue.trim()) {
      addTodo(inputValue.trim()); // ✅ backend call
      setInputValue("");
    }
  };

  return (
    <div className="flex mb-10 border border-[#88a383] rounded-md overflow-hidden w-full">
      <input
        type="text"
        placeholder="What is the task today?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="bg-transparent text-white placeholder-white/50 px-4 py-3 flex-1 outline-none min-w-0"
        onKeyDown={(e) => e.key === 'Enter' && addTask()}
      />
      <button
        onClick={addTask}
        className="bg-[#88a383] text-white px-6 py-3 font-bold hover:bg-[#7a9275] transition-colors shrink-0 cursor-pointer"
      >
        Add Task
      </button>
    </div>
  );
}

export default TodoForm;