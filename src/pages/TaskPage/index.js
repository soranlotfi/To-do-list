import PageLayout from "../../Components/Layouts/PageLayout";
import TaskManager from "../../Components/Layouts/taskmanager";
import TodoCard from "../../Components/Layouts/taskCard";
import {useRef, useState} from "react";

const TaskPage = () => {
    const [list, setList] = useState([1, 3, ]);
    const input1 = useRef(null);

    function handleClick() {
        console.log(input1.current)
    }

    return (
        <PageLayout footer={false}>
            <section className="taskpage-container">
                <div className="todo-container">
                    <div className="task-body">
                        <div className="task-top">
                            <h1>My Todo</h1>
                        </div>
                        {/*-------------------------------------*/}
                        <div className="todo-entry">
                            <div className="input-container" id="name">
                                <label htmlFor="name" className="label">Name</label>
                                <i className="fa fa-chevron-left"></i>
                                <input type="text" className="name-input" ref={input1}/>
                            </div>
                            <div className="input-container" id="date">
                                <label htmlFor="date" className="label">Date</label>

                                {/*<i className="fa fa-calendar"></i>*/}
                                {/*<DatePicker className="dt-pick"
                                          inputMode="none"
                                          editable={false}
                                          calendar={persian}
                                          locale={persian_fa}


                              />*/}
                                <input type="date" className="date-input"/>
                            </div>
                            <button className="btn submitBtn" onClick={handleClick}>
                                Submit
                            </button>
                        </div>
                    </div>
                    <div className="todos-show">
                        <div className="todoCard-container">
                            {list.map(r =>
                                <TodoCard/>
                            )}
                        </div>
                    </div>
                </div>

            </section>
        </PageLayout>
    )
}

export default TaskPage;