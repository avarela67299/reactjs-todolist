export default function TodoCard(props){
    return(
        <div>
            <li className ="todoItem">
                {props.children}
                <div className="actionsContainer">
                    <button onClick={() => props.editTodo(props.todoIndex)}>
                        <i className="fa-solid fa-pen-to-square"></i> 
                    </button>
                    <button onClick={() => props.deleteTodo(props.todoIndex)}>
                        <i className="fa-solid fa-trash"></i>
                    </button> 
                </div>    
            </li>
        </div>
    )
}