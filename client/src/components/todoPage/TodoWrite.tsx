import { useEffect, useState } from "react"

const TodoWrite = () => {
    const [value, setValue] = useState("")

    const onSubmit = (value: string) => {
        const todoList = document.getElementById('todo-list')
        if (todoList) {
            todoList.innerHTML = value
        }
        
    }

    const handleSubmit = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            onSubmit(value)
            setValue("")
        }
    }

    return (
        <>
            <div className="mb-5 container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
                <p className="font-bold text-3xl text-gray-700">
                    TodoWrite
                </p>
                <input 
                    type='text' 
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={handleSubmit}
                    placeholder="UwU" 
                    className="border-2 border-gray-500 text-white-700 rounded-lg p-2 m-2" 
                />
            </div>
            <div className="mb-5 container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
                <p className="text-3xl text-gray-700 font-bold mb-5">
                    Todo list
                </p>
                <p id='todo-list' className="text-gray-500 text-lg">
                    onChange
                </p>
            </div>
        </>
    );
}

export default TodoWrite