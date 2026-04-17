import { useState } from "react";

function TodoItems({ value, indexNumber, todoList, setTodoList }) {
    const [status, setStatus] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(value);

    const deleteRow = () => {
        const finalData = todoList.filter((_, i) => i !== indexNumber);
        setTodoList(finalData);
    };

    const checkStatus = () => setStatus(!status);
    const startEdit = () => { setEditValue(value); setIsEditing(true); };
    const cancelEdit = () => { setIsEditing(false); setEditValue(value); };

    const saveEdit = () => {
        if (editValue.trim()) {
            const updatedList = todoList.map((item, i) =>
                i === indexNumber ? editValue.trim() : item
            );
            setTodoList(updatedList);
            setIsEditing(false);
        }
    };

    return (
        <div className="flex items-center gap-3 mb-3 w-full group">
            <div
                onClick={checkStatus}
                className={`flex-grow flex items-center p-4 rounded-xl transition-all duration-300 cursor-pointer shadow-sm border
                    ${status
                        ? "bg-gray-50 border-gray-200 opacity-60"
                        : "bg-white border-gray-100 hover:border-blue-300 hover:shadow-md"}`}
            >
                {isEditing ? (
                    <div className="flex items-center w-full gap-2">
                        <span className="text-blue-500 font-bold">#</span>
                        <input
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            className="bg-transparent w-full outline-none text-gray-700 font-medium border-b-2 border-blue-400 pb-1"
                            onClick={(e) => e.stopPropagation()}
                            autoFocus
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') saveEdit();
                                if (e.key === 'Escape') cancelEdit();
                            }}
                        />
                    </div>
                ) : (
                    <div className="flex items-center gap-3 overflow-hidden">
                        <span className={`font-bold transition-colors ${status ? "text-gray-400" : "text-blue-500"}`}>
                            {indexNumber + 1}.
                        </span>
                        <span className={`truncate font-medium transition-all ${status ? "line-through text-gray-400" : "text-gray-700"}`}>
                            {value}
                        </span>
                    </div>
                )}
            </div>


            <div className="flex gap-2 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {isEditing ? (
                    <>
                        <button
                            onClick={(e) => { e.stopPropagation(); saveEdit(); }}
                            className="p-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 shadow-lg shadow-blue-100 transition-all active:scale-95"
                            title="Save"
                        >
                            ✓
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); cancelEdit(); }}
                            className="p-2.5 bg-gray-100 text-gray-500 rounded-lg hover:bg-gray-200 transition-all active:scale-95"
                            title="Cancel"
                        >
                            ×
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            onClick={(e) => { e.stopPropagation(); startEdit(); }}
                            className="p-2.5 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition-all active:scale-95"
                            title="Edit"
                        >
                            ✏️
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); deleteRow(); }}
                            className="p-2.5 bg-rose-50 text-rose-600 rounded-lg hover:bg-rose-600 hover:text-white transition-all active:scale-95"
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
