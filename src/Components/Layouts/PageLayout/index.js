import Footer from "../Footer";
import {Navbar} from "../Navbar";
import "./style.css"

const PageLayout = ({children, footer = true}) => {
    return(
        <div className="layOut">
            <Navbar/>
            {children}
            {footer === true && <Footer/>}
        </div>
    )


}
export default PageLayout