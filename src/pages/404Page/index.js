import "./style.css"
import {Link} from "react-router-dom";
const NotFoundPage = ()=>{
    return(
        <div className="nfContainer">
            <div className="container">
                <h1 className="nfTitle">
                    404
                </h1>
                <p className="nfText">Sorry..! but it seems the page that you are searching for is not in this website...</p>

                <Link to="/" className="toHome">
                    <button className="btn">Back to Home</button>
                </Link>
            </div>
        </div>
    )
}

export default NotFoundPage;