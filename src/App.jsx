import { useState } from "react";
import "./App.css";

function App() {
  let [todoList, setTodoList] = useState([]);
  let saveToDoList = (event) => {
    event.preventDefault();

    let toname = event.target.toname.value.trim();
    if (!toname) return;
      
    let isDuplicate = todoList.some(
      (item) => item.toLowerCase() === toname.toLowerCase(),
    );
    if (!isDuplicate) {
      let finalList = [...todoList, toname];
      setTodoList(finalList);
    } else {
      alert("Todo List already exist ......");
    }
    event.target.toname.value = "";
    
  };

  let list = todoList.map((item, index) => {
    return (
      <TodoListItem
        value={item}
        key={index}
        indexNumber={index}
        todoList={todoList}
        setTodoList={setTodoList}
      />
    );
  });

  return (
    <div className="App  mt-20">
      <h1 className="text-[50px] font-bold text-center ">ToDo List</h1>
      <form onSubmit={saveToDoList}>
        <input
          type="text"
          name="toname"
          className="border border-black rounded-md"
        />
        <button className="border border-black bg-blue-500 text-white rounded-md">
          save
        </button>
      </form>

      <div className="outerDiv ">
        <ul>{list}</ul>
      </div>
    </div>
  );
}
export default App;

function TodoListItem({ value, indexNumber, todoList, setTodoList }) {
  let [staus, setSatus] = useState(false);
  let deleteRow = () => {
    let finalData = todoList.filter((v, i) => i !== indexNumber);
    setTodoList(finalData);
  };
  let checkStatus = () => {
    setSatus(!staus);
  };
  return (
    <li className={staus ? "completetodo" : ""} onClick={checkStatus}>
      {" "}
      {indexNumber + 1}
      {value}
      <span onClick={deleteRow}>&times;</span>
    </li>
  );
}
