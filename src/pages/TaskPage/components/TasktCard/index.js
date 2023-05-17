import "./style.css"
import "../../style.css"
import {removeTodo, useAppContextController, toggleTodo, editTodo} from "../../../../context/TodoNewContext";
import React from "react";


const TodoCard = ({todo}) => {
    const [values, dispatch] = useAppContextController()
    let {todo: td} = values

    function RemoveTodo(id) {
        let newtd = td.filter(p => p.id !== id)
        console.log(newtd)
        removeTodo(dispatch, newtd)
    }

    function handleEdit(id) {
        td.map(todo => {
            return todo.id === id ? todo.editing = true : todo
        })
        editTodo(dispatch, td)
        console.log(td)
    }

    function completeTodo(id) {
        td.map(todo => {
            return id === todo.id ? todo.completed = !todo.completed : todo
        })
        toggleTodo(dispatch, td)
    }

    return (
        <>
            <div style={{opacity: todo.completed ? "0.3" : "1"}} className="task-card">
                <div className="taskCard-title">
                    <h3> {todo.name}</h3>
                    <h6>{todo.date}</h6>
                </div>

                {
                    todo.editing ? (
                        <form className="editForm">
                            <div className="input-container" id="name">
                                <label htmlFor="name" className="label">Name</label>
                                <i className="fa fa-chevron-left"></i>
                                <input
                                    autoComplete="none"
                                    type="text"
                                    name="taskName"
                                    id="taskName"
                                    className="name-input"
                                    /*value={formik.values.taskName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}*/
                                />
                                {/*{formik.errors.taskName && formik.touched.taskName ?
                                    <p>{formik.errors.taskName}</p> : null}*/}
                            </div>
                            <div className="input-container" id="date">
                                <label htmlFor="date" className="label">Date</label>
                                <input
                                    type="date"
                                    id="taskDate"
                                    className="date-input"
                                    name="taskDate"
                                   /* value={formik.values.taskDate}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}*/
                                />
                               {/* {formik.errors.taskDate && formik.touched.taskDate ?
                                    <p className="error-message">{formik.errors.taskDate}</p> : null}*/}
                            </div>
                            <button
                                /*disabled={Object.keys(formik.errors).length > 0}*/
                                className="btn submitBtn"
                                type="submit">
                                Submit
                            </button>

                        </form>
                    ) : console.log("false")
                }

                <div className="task-btns">
                    <button
                        onClick={() => RemoveTodo(todo.id)}
                        className="taskBtn deleteBtn">
                        <i className="fa fa-trash"></i>
                    </button>
                    <button className="taskBtn editBtn" onClick={() => handleEdit(todo.id)}>
                        <i className="fa fa-edit"></i>
                    </button>
                    <input type="checkbox" name="done" id="doneBtn"
                           onChange={() => completeTodo(todo.id)}
                    />
                </div>
            </div>
        </>
    )
}

export default TodoCard;