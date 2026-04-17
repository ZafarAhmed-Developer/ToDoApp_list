
import TodoItems from "./TodoItem";

function TodoList({ todoList, setTodoList }) {
    return (
        <div className="space-y-1">
            {todoList.map((todo, index) => (
                <TodoItems
                    key={index}
                    indexNumber={index}
                    value={todo}
                    todoList={todoList}
                    setTodoList={setTodoList}
                />
            ))}
        </div>
    );
}

export default TodoList;
