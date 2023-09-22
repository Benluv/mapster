import TodoWrite from "../components/TodoWrite"
import DefaultLayout from "../layouts/DefaultLayout"

const Todo: React.FC = () => {
    return(
        <DefaultLayout>
            <div className="columns-2">
                <TodoWrite />
                <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
                    <p className="text-gray-500 text-lg">
                        Todo list
                    </p>
                    <p className="text-3xl text-gray-700 font-bold mb-5">
                        TodoItem
                    </p>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Todo