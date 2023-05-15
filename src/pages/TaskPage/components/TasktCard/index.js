import "./style.css"
import {useTodoContext} from "../../../../context/TodoProvider";
import {removeTodo, useAppContextController} from "../../../../context/TodoNewContext";


const TodoCard = ({todo}) => {
    var id = todo.id
    const {ToggleTodo} = useTodoContext()
    const [values, dispatch] = useAppContextController()
    let {todo: td} = values

    function RemoveTodo(id) {
        let newtd = td.filter(p => p.id !== id)
        removeTodo(dispatch, newtd)
    }

    return (
        <div style={{opacity: todo.completed ? "0.3" : "1"}} className="task-card">
            <div className="taskCard-title">
                <h3> {todo.name}</h3>
                <h6>{todo.date}</h6>
            </div>
            <div className="task-btns">
                <button
                    onClick={() => RemoveTodo(todo.id)}
                    className="taskBtn deleteBtn">
                    <i className="fa fa-trash"></i>
                </button>
                <button className="taskBtn editBtn">
                    <i className="fa fa-edit"></i>
                </button>
                <input type="checkbox" name="done" id="doneBtn"
                       onChange={() => ToggleTodo(todo)}
                />
            </div>
        </div>

    )
}

export default TodoCard;