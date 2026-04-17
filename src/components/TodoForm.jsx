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
                className="border rounded-md"
                placeholder=" Enter a new todo"
                
            />
            <button className="border border-black bg-blue-500 text-white rounded-md hover:bg-green-500 transition-colors duration-200 active:scale-95 ml-2 px-4 py-2">
                Save
            </button>
        </form>
    );
}

export default TodoForm;
