import "./style.css"
import DatePicker from "react-multi-date-picker";
import "react-date-object/calendars/persian"
import Example from "../DatePicker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import {func} from "prop-types";

const TaskManager = () => {
    {
        function change() {
            const input = document.querySelector(".rmdp-input")
            console.log(input)
        }
    }
    return (
        <section className="taskpage-container">
            <div className="container">
                <div className="todo-container">
                    <div className="task-top">
                        <h1>My Todo</h1>
                    </div>
                    <div className="task-body">
                        <label htmlFor="name">Name</label>
                        <div className="input-container" id="name">
                            <i className="fa fa-chevron-right"></i>
                            <input type="text" className="name-input"/>
                        </div>
                        <div className="input-container">
                            <i className="fa fa-calendar"></i>
                            <DatePicker className="dt-pick"
                                        placeholder="click to open"
                                        inputMode="none"
                                        editable={false}
                                        calendar={persian}
                                        locale={persian_fa}
                            />

                        </div>
                    </div>
                    <div className="task-footer">

                    </div>
                </div>
            </div>
        </section>
    )


}
export default TaskManager;