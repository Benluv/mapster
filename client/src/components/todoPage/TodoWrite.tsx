import { useState } from "react"

interface TodoCardType {
    id: number
    text: string
}

const TodoWrite = () => {
    const [value, setValue] = useState("")
    const [todoCards, setTodoCards] = useState<TodoCardType[]>([])
    
    const addTodo = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            const newTodoCard: TodoCardType = {
                id: todoCards.length + 1,
                text: value
            }
            
            setTodoCards([...todoCards, newTodoCard])
            setValue("")
        }
    }

    const removeTodo = (id: number) => {
        const updateTodoCards = todoCards.filter(card => card.id !== id)
        setTodoCards(updateTodoCards)
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
                    onKeyDown={addTodo}
                    placeholder="UwU" 
                    className="border-2 border-gray-500 text-white-700 rounded-lg p-2 m-2" 
                />
            </div>
            <div className="mb-5 container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
                <p className="text-3xl text-gray-700 font-bold mb-5">
                    Todo list
                </p>
                <p id='todo-list' className="text-gray-800">
                    {todoCards.map((todoCard: TodoCardType) => (
                        <div key={todoCard.id} className="rounded-xl text-lg shadow border p-8 m-10">
                            {todoCard.text}
                            <button className="top-0 right-0 bg-gray-200 text-sm text-gray-800" onClick={() => removeTodo(todoCard.id)}>X</button>
                        </div>
                    ))}
                </p>
            </div>
        </>
    );
}

export default TodoWrite