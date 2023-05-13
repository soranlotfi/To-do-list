import "./style.css"
import {ACTIONS} from "../../index";

const TodoCard = ({todo, dispatch}) => {
    console.log("here is :")
    console.log(todo.name)
    return (
        <div  style={{opacity: todo.completed ? "0.3" : "1"}}  className="task-card">
            <div className="taskCard-title">
                <h3> {todo.name}</h3>
                <h6>{todo.date}</h6>
            </div>
            <div className="task-btns">
                <button
                    onClick={()=>dispatch({type:ACTIONS.DELETE_TODO , payload:{id : todo.id}})}
                    className="taskBtn deleteBtn">
                    <i className="fa fa-trash"></i>
                </button>
                <button className="taskBtn editBtn">
                    <i className="fa fa-edit"></i>
                </button>
                <input type="checkbox" name="done" id="doneBtn"
                       onChange={() => dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id}})}
                />
            </div>
        </div>

    )
}

export default TodoCard;