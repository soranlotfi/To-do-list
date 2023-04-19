const TaskManager = ()=>{
    return(
        <div className="container">
            <div className="task-manager-container">
                <div className="task-top">
                    <h1>My Todo</h1>
                </div>
                <div className="task-body">
                    <label for="name">Name</label>
                    <div className="input-container" id="name">
                        <i className="fa fa-chevron-right"></i>
                        <input type="text" className="name-input"/>
                    </div>

                    <label htmlFor="name">Date</label>
                    <div className="input-container" id="date">
                        <i className="fa fa-calendar"></i>
                        <input type="date" className="date-input"/>
                    </div>

                </div>
                <div className="task-footer"></div>
            </div>
        </div>
    )
}
export default TaskManager;