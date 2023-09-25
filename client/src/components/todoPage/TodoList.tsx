import { TodoCardType } from "./TodoWrite"

type TodoListProps = {
    todoCards: TodoCardType[]
    removeTodo: (id: number) => void
}

const TodoList: React.FC<TodoListProps> = ({ todoCards, removeTodo }) => {
    return (
        <p id='todo-list' className="text-gray-800">
            {todoCards.map((todoCard: TodoCardType) => (
                <div key={todoCard.id} className="rounded-xl text-lg shadow border p-8 m-10">
                    {todoCard.text}
                    <button 
                        className="top-0 right-0 bg-gray-200 text-sm text-gray-800" 
                        onClick={() => removeTodo(todoCard.id)}>
                            X
                        </button>
                </div>
            ))}
        </p>
    )
}

export default TodoList