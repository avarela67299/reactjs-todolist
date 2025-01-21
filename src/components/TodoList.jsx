import TodoCard from "./TodoCard"

export default function TodoList({todos, deleteTodo, editTodo}) {

    const mapTodos = (element, index) => {
        return (
            <TodoCard todoIndex={index} deleteTodo = {deleteTodo} editTodo={editTodo}>
                <p>{element}</p>
            </TodoCard>
        )
    }
    
    return(
        <div>
            <ul className="main">
                {todos.map(mapTodos)} 
            </ul>
        </div>
    )
}