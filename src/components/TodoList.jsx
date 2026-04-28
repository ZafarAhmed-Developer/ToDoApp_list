import TodoItems from "./TodoItem";

function TodoList({ todoList, deleteTodo, toggleTodo, updateTodo }) {
  return (
    <div className="space-y-1">
      {todoList.map((todo) => (
        <TodoItems
          key={todo._id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;