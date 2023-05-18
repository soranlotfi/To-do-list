import image from "../../../../Assets/images/no-found.gif"
import "./style.css"
const NotFound =()=>{
    return(
        <div className="notFound-container">
            <img className="notFound-image" src={image} alt=""/>
            <p className="notFound-text">Todo Not Found ... !</p>
        </div>
    )
 }

 export  default NotFound;