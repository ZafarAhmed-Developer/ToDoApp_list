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
        <div className="flex items-center gap-4 mb-4 w-full">
            {/* Left Side: The Black Row (Content or Input) */}
            <div 
                className={`flex-grow flex items-center p-4 bg-black text-white rounded min-w-0 cursor-pointer ${status ? "opacity-50 line-through" : ""}`}
                onClick={checkStatus}
            >
                {isEditing ? (
                    <input
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        className="bg-transparent border-b border-white w-full outline-none text-white"
                        onClick={(e) => e.stopPropagation()}
                        autoFocus
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') saveEdit();
                            if (e.key === 'Escape') cancelEdit();
                        }}
                    />
                ) : (
                    <div className="flex items-center gap-2 overflow-hidden">
                        <span className="font-bold flex-shrink-0">{indexNumber + 1}.</span>
                        <span className="truncate">{value}</span>
                    </div>
                )}
            </div>

            {/* Right Side: Icons (Always outside the black row) */}
            <div className="flex gap-2 flex-shrink-0">
                {isEditing ? (
                    <>
                        <button
                            onClick={(e) => { e.stopPropagation(); saveEdit(); }}
                            className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
                            title="Save"
                        >
                            ✓
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); cancelEdit(); }}
                            className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                            title="Cancel"
                        >
                            ×
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            onClick={(e) => { e.stopPropagation(); startEdit(); }}
                            className="p-2 hover:bg-gray-100 rounded-full text-xl"
                            title="Edit"
                        >
                            ✏️
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); deleteRow(); }}
                            className="p-2 hover:bg-gray-100 rounded-full text-xl"
                            title="Delete"
                        >
                            🗑️
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default TodoItems;
