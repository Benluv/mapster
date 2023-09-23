import TodoWrite from "../components/todoPage/TodoWrite"
import DefaultLayout from "../layouts/DefaultLayout"

const Todo: React.FC = () => {
    return(
        <DefaultLayout>
            <div className="columns-2">
                <TodoWrite />
            </div>
        </DefaultLayout>
    )
}

export default Todo