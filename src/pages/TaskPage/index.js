import PageLayout from "../../Components/Layouts/PageLayout";
import "./style.css"
import React, {useReducer, useState} from "react";
import TodoCard from "./components/TasktCard/index";
import {v4 as uuid} from "uuid"
import {useFormik} from "formik";
import * as Yup from "yup"
import button from "bootstrap/js/src/button";
import {useAppContextController} from "../../context/appContext";

const validationSchema = Yup.object({
    taskName: Yup.string().max(20, "the max size of the first name is 20 ..!").required("taskName cannot be emptey"),
    taskDate: Yup.date().required("Todo date can not be empty ..!")
})

export const ACTIONS = {
    ADD_TODO: "add-todo",
    TOGGLE_TODO: "toggle-todo",
    DELETE_TODO: "delete-todo",
}

// The reducer function manages create toggle and delete
export function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name, action.payload.date)]
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    console.log(todo.completed)
                    return {...todo, completed: !todo.completed}
                }
                return todo
            })
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id != action.payload.id)
        default:
            return todos
    }

}

// this function generates a new to do and stores it
function newTodo(name, date) {
    return {id: uuid(), name: name, date: date, completed: false}
}

const TaskPage = () => {
    const [todos, dispatch] = useReducer(reducer, [])
    
    const handleSubmit = (values) => {
        console.log(values)
        dispatch({type: ACTIONS.ADD_TODO, payload: {name: values.taskName, date: values.taskDate}})
    };
    const formik = useFormik({
        initialValues: {
            taskName: "",
            taskDate: ""
        },
        validationSchema,
        onSubmit: handleSubmit
    })
    // formik section

    return (
        <PageLayout footer={false}>
            <section className="taskpage-container">
                <div className="todo-container">
                    <div className="task-body">
                        <div className="task-top">
                            <h1>My Todo</h1>
                        </div>

                        {/*-------------------------------------*/}
                        <form className="todo-entry" onSubmit={formik.handleSubmit}>
                            <div className="input-container" id="name">
                                <label htmlFor="name" className="label">Name</label>
                                <i className="fa fa-chevron-left"></i>
                                <input
                                    autoComplete="none"
                                    type="text"
                                    name="taskName"
                                    id="taskName"
                                    className="name-input"
                                    value={formik.values.taskName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.taskName && formik.touched.taskName ?
                                    <p>{formik.errors.taskName}</p> : null}
                            </div>
                            <div className="input-container" id="date">
                                <label htmlFor="date" className="label">Date</label>

                                <input
                                    type="date"
                                    id="taskDate"
                                    className="date-input"
                                    name="taskDate"
                                    value={formik.values.taskDate}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.taskDate && formik.touched.taskDate ?
                                    <p className="error message">{formik.errors.taskDate}</p> : null}
                            </div>
                            <button
                                disabled={Object.keys(formik.errors).length > 0}
                                className="btn submitBtn"
                                type="submit">
                                Submit
                            </button>

                        </form>
                    </div>
                    <div className="todos-show">
                        <div className="todoCard-container">
                            {
                                todos.map(todo =>
                                    <TodoCard key={todo.id} todo={todo} dispatch={dispatch}/>
                                )
                            }
                        </div>
                    </div>
                </div>

            </section>
        </PageLayout>
    )
}

export default TaskPage;



