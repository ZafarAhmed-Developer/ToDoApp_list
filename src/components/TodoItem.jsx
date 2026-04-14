import { useState } from "react";

function TodoItems({ value, indexNumber, todoList, setTodoList }) {
    const [status, setStatus] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(value);

    const deleteRow = () => {
        const finalData = todoList.filter((_, i) => i !== indexNumber);
        setTodoList(finalData);
    };

    const checkStatus = () => {
        setStatus(!status);
    };

    const saveEdit = () => {
        if (editValue.trim()) {
            const updatedList = todoList.map((item, i) =>
                i === indexNumber ? editValue.trim() : item
            );
            setTodoList(updatedList);
            setIsEditing(false);
        }
    };

    const cancelEdit = () => {
        setIsEditing(false);
        setEditValue(value);
    };

    return (
        <li
            className={status ? "completetodo" : ""}
            onClick={checkStatus}
        >
            {isEditing ? (
                <>
                    <input
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        className="border p-1 w-40"
                        onClick={(e) => e.stopPropagation()}
                        autoFocus
                    />


                    <button
                        onClick={saveEdit}
                        className="ml-2 px-2 py-1 bg-green-500 text-white rounded text-xs"
                    >
                        ✓
                    </button>
                    <button
                        onClick={cancelEdit}
                        className="ml-1 px-2 py-1 bg-gray-500 text-white rounded text-xs"
                    >
                        ✕
                    </button>
                </>
            ) : (
                <>
                    {indexNumber + 1}. {value}
                    <span
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsEditing(true);
                            setEditValue(value);
                        }}
                        className="ml-3 cursor-pointer text-blue-500 hover:text-blue-700"
                        title="Edit"
                    >
                        ✏️
                    </span>
                    <span
                        onClick={(e) => {
                            e.stopPropagation();
                            deleteRow();
                        }}
                        className="ml-2 cursor-pointer text-red-500 hover:text-red-700"
                        title="Delete"
                    >
                        🗑️
                    </span>
                </>
            )}
        </li>
    );
}

export default TodoItems;
