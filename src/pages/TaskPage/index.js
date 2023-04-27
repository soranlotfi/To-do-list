import PageLayout from "../../Components/Layouts/PageLayout";
import "./style.css"
import TodoCard from "./components/TasktCard/index";
import {useRef, useState} from "react";

const TaskPage = () => {
    var [data, setData] = useState([]);
    const input1 = useRef();
    const input2=useRef()


    const handleClick = (event) => {
        event.preventDefault();
        const name = input1.current.value;
        const date = input2.current.value;
        setData([...data, { name,date }]);
        input1.current.value = '';
        console.log(data)
    };

    return (
        <PageLayout footer={false}>
            <section className="taskpage-container">
                <div className="todo-container">
                    <div className="task-body">
                        <div className="task-top">
                            <h1>My Todo</h1>
                        </div>
                        {/*-------------------------------------*/}
                        <form className="todo-entry">
                            <div className="input-container" id="name">
                                <label htmlFor="name" className="label">Name</label>
                                <i className="fa fa-chevron-left"></i>
                                <input
                                    autoComplete="none"
                                    type="text" className="name-input" ref={input1}/>
                            </div>
                            <div className="input-container" id="date">
                                <label htmlFor="date" className="label">Date</label>

                                <input type="date" className="date-input" ref={input2}/>
                            </div>
                            <button className="btn submitBtn" onClick={handleClick}>
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className="todos-show">
                        <div className="todoCard-container">
                            {
                                data.map(r=>{
                                    <TodoCard/>
                                })
                            }
                        </div>
                    </div>
                </div>

            </section>
        </PageLayout>
    )
}

export default TaskPage;



