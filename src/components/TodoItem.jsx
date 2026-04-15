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

    const startEdit = () => {
        setEditValue(value);
        setIsEditing(true);
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
                    <div className="flex gap-2 flex-shrink-0 ml-4">
                        <button
                            onClick={saveEdit}
                            className="px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded text-sm font-medium"
                        >
                            ✓
                        </button>
                        <button
                            onClick={cancelEdit}
                            className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded text-sm font-medium"
                        >
                            ×
                        </button>
                    </div>
                </>
            ) : (
                <>

                    <span className="mr-2 font-bold">{indexNumber + 1}.</span>
                    <span className="mr-4">{value}</span>
                    <div className="flex gap-2 flex-shrink-0 ml-4">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                startEdit();
                            }}
                            className="p-2 hover:bg-gray-100 rounded-full"
                            title="Edit"
                        >
                            ✏️
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                deleteRow();
                            }}
                            className="p-2 hover:bg-gray-100 rounded-full"
                            title="Delete"
                        >
                            🗑️
                        </button>
                    </div>
                </>
            )}
        </li>
    );
}

export default TodoItems;