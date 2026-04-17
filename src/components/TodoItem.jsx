import { useState } from "react";

function TodoItems({ value, indexNumber, todoList, setTodoList }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(value);
    const [status, setStatus] = useState(false);

    const deleteRow = () => {
        const finalData = todoList.filter((_, i) => i !== indexNumber);
        setTodoList(finalData);
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

    return (
        <div className={`flex items-center justify-between p-4 rounded-lg mb-3 shadow-sm w-full transition-colors 
          ${status ? "bg-[#b9b1a9] opacity-60" : "bg-[#88a383]"}`}
        >

            <div
                className={`flex-1 min-w-0 mr-4 cursor-pointer transition-all ${status ? "opacity-50" : "opacity-100"}`}
                onClick={() => !isEditing && setStatus(!status)}
            >
                {isEditing ? (
                    <input
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        className="bg-transparent border-b border-white/50 w-full outline-none text-white font-medium block"
                        autoFocus
                        onClick={(e) => e.stopPropagation()}
                        onKeyDown={(e) => e.key === 'Enter' && saveEdit()}
                    />
                ) : (
                    <span className={`font-medium truncate block text-left transition-all 
                      ${status ? "line-through text-green-50" : "text-white"}`}
                     >
                        {value}
                    </span>
                )}
            </div>

            <div className="flex items-center gap-3 shrink-0">
                {isEditing ? (
                    <button onClick={saveEdit} className="cursor-pointer hover:opacity-80">✓</button>
                ) : (
                    <button onClick={() => setIsEditing(true)} className="cursor-pointer hover:opacity-80">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </button>
                )}
                <button onClick={deleteRow} className="cursor-pointer hover:opacity-80">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default TodoItems;
