import PageLayout from "../../Components/Layouts/PageLayout";
import "./style.css"
import React from "react";
import TodoCard from "./components/TasktCard/index";
import {v4 as uuid} from "uuid"
import {useFormik} from "formik";
import * as Yup from "yup"
import {addTodo, useAppContextController} from "../../context/TodoNewContext";


const validationSchema = Yup.object({
    taskName: Yup.string().max(20, "the max size of the first name is 20 ..!").required("taskName cannot be emptey"),
    taskDate: Yup.date().required("Todo date can not be empty ..!")
})



const TaskPage = () => {
    const [values, dispatch] = useAppContextController()
    let {todo} = values
    const handleSubmit = (values , {resetForm}) => {
        todo.push({
            id: uuid(),
            name: values.taskName,
            date: values.taskDate,
            completed: false
        });
        addTodo(dispatch, todo)
        resetForm()
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
                                todo.map(todo =>
                                    <TodoCard key={todo.id} todo={todo}/>
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



