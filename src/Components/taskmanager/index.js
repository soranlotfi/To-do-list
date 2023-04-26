import "../../pages/TaskPage/style.css"
import "react-date-object/calendars/persian"
import TodoCard from "../../pages/TaskPage/components/TasktCard";
import {useRef, useState} from "react";


const TaskManager = () => {

    const [todo , setTodo]=useState();
    const inputRef=useRef(null);
/*    function generateTodo (){

        console.log("hello")
    }*/
    return (
        <section className="taskpage-container">
                <div className="todo-container">
                    <div className="task-body">
                        <div className="task-top">
                            <h1>My </h1>
                        </div>
                        {/*-------------------------------------*/}
                      <div className="todo-entry">
                          <h1>Hello world</h1>
                          <div className="input-container" id="name">
                              <label htmlFor="name" className="label">Name</label>
                              <i className="fa fa-chevron-left"></i>
                              {/*<input
                                  type="text" className="name-input"/>*/}
                          </div>
                          <div className="input-container" id="date">
                              <label htmlFor="date" className="label">Date</label>

                              <input type="date" className="date-input"/>
                      </div>
                          <button className="btn submitBtn" onClick={()=>{
                              console.log("hello world")
                          }}>
                              Submit
                          </button>
                        </div>
                    </div>
                    <div className="todos-show">
                        <div className="todoCard-container">
                            <TodoCard/>
                        </div>
                    </div>
                </div>

        </section>
    )


}
export default TaskManager;