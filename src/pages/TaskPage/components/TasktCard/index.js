import "./style.css"

const TodoCard = ({name,date})=>{

    return(

        <>

            <div className="task-card">
                <div className="taskCard-title">
                    <h3> {name}</h3>
                    <h6>{date}</h6>
                </div>
                <div className="task-btns">
                    <button className="taskBtn deleteBtn">
                        <i className="fa fa-trash"></i>
                    </button>
                    <button className="taskBtn editBtn">
                        <i className="fa fa-edit"></i>
                    </button>
                    <input type="checkbox" name="done" id="doneBtn"/>
                </div>
            </div>
        </>
    )
}

export default TodoCard;