import "./style.css"
import "../../style.css"
import {removeTodo, useAppContextController, toggleTodo, toggleEditTodo,todoEditor} from "../../../../context/TodoNewContext";
import React from "react";
import {useFormik} from "formik";
import * as Yup from "yup"

const validationSchema = Yup.object({
    editName: Yup.string().max(20, "the max size of the name is 20").required("name input can not be empty"),
    editDate: Yup.date().required("date input can not be empty"),
})

const TodoCard = ({todo}) => {
    const [values, dispatch] = useAppContextController()
    let {todo: td} = values

    const formik = useFormik({
        initialValues: {
            editName: "",
            editDate: "",
        },
        validationSchema,
        onSubmit:handleEdit,
    })

    function RemoveTodo(id) {
        let newtd = td.filter(p => p.id !== id)
        console.log(newtd)
        removeTodo(dispatch, newtd)
    }

    function editToggler(id) {
        td.map(todo => {
            return todo.id === id ? todo.editing = !todo.editing : todo
        })
        toggleEditTodo(dispatch, td)
    }

    function handleEdit(values , {resetForm}){
        console.log(values)
        td.map(todo => {
            if(todo.editing){
                todo.name = values.editName
                todo.date = values.editDate
                todo.editing=false
            }
        })
        todoEditor(dispatch,td)
        resetForm()
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
                        <form className="editForm" onSubmit={formik.handleSubmit}>
                            <div className="input-container" id="name">
                                <label htmlFor="name" className="label">Name</label>
                                <i className="fa fa-chevron-left"></i>
                                <input
                                    autoComplete="none"
                                    type="text"
                                    name="editName"
                                    id="editName"
                                    className="name-input"
                                    value={formik.values.editName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.editName && formik.touched.editName ?
                                    <p>{formik.errors.editName}</p> : null}
                            </div>
                            <div className="input-container" id="date">
                                <label htmlFor="date" className="label">Date</label>
                                <input
                                    type="date"
                                    id="editDate"
                                    className="date-input"
                                    name="editDate"
                                    value={formik.values.editDate}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.editDate && formik.touched.editDate ?
                                    <p className="error-message">{formik.errors.editDate}</p> : null}
                            </div>
                            <button
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
                    <button className="taskBtn editBtn" onClick={() => editToggler(todo.id)}>
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