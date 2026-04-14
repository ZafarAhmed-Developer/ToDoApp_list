import React from "react";
import TodoItems from "./TodoItem";

function TodoList({ todoList, setTodoList }) {
    return (
        <ul>
            {todoList.map((item, index) => (
                <TodoItems
                    key={index}
                    value={item}
                    indexNumber={index}
                    todoList={todoList}
                    setTodoList={setTodoList}
                />
            ))}
        </ul>
    );
}

export default TodoList;
