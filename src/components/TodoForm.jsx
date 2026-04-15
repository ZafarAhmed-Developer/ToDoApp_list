function TodoForm({ addTodo }) {
    const saveToDoList = (event) => {
        event.preventDefault();
        const toname = event.target.toname.value.trim();
        if (!toname) return;
        addTodo(toname);
        event.target.toname.value = "";
    };

    return (
        <form onSubmit={saveToDoList}>
            <input
                type="text"
                name="toname"
                className="border border-black rounded-md"
                placeholder=" Enter a new todo"
                
            />
            <button className="border border-black bg-blue-500 text-white rounded-md">
                Save
            </button>
        </form>
    );
}

export default TodoForm;
