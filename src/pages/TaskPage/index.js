import PageLayout from "../../Components/Layouts/PageLayout";
import "./style.css"
import React from "react";
import TodoCard from "./components/TasktCard/index";
// import {v4 as uuid} from "uuid"
import {useFormik} from "formik";
import * as Yup from "yup"
import {useTodoContext} from "../../context/TodoProvider";
import {addTodo, useAppContextController} from "../../context/TodoNewContext";
import {v4 as uuid} from "uuid"

const validationSchema = Yup.object({
    taskName: Yup.string().max(20, "the max size of the first name is 20 ..!").required("taskName cannot be emptey"),
    taskDate: Yup.date().required("Todo date can not be empty ..!")
})

// export const ACTIONS = {
//     ADD_TODO: "add-task",
//     TOGGLE_TODO: "toggle-task",
//     DELETE_TODO: "delete-task",
// }

// The reducer function manages create toggle and delete
// export function reducer(todos, action) {
//     switch (action.type) {
//         case ACTIONS.ADD_TODO:
//             return [...todos, newTodo(action.payload.name, action.payload.date)]
//         case ACTIONS.TOGGLE_TODO:
//             return todos.map(task => {
//                 if (task.id === action.payload.id) {
//                     console.log(task.completed)
//                     return {...task, completed: !task.completed}
//                 }
//                 return task
//             })
//         case ACTIONS.DELETE_TODO:
//             return todos.filter(task => task.id !== action.payload.id)
//         default:
//             return todos
//     }
//
// }


// function newTodo(name, date) {
//     return {id: uuid(), name: name, date: date, completed: false}
// }

const TaskPage = () => {
    const {AddTodo, todoList} = useTodoContext()
    const [values, dispatch] = useAppContextController()

    let {todo} = values
    // const [todos, dispatch] = useReducer(reducer, [])
    const handleSubmit = (values) => {
        todo.push({
            id: uuid(),
            name: values.taskName,
            date: values.taskDate,
            completed: false
        });
        addTodo(dispatch, todo)
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
                                    <p className="error-message">{formik.errors.taskDate}</p> : null}
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
                                todo.map(e =>
                                    <TodoCard key={e.id} todo={e}/>
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



