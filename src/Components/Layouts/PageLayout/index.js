import Footer from "../Footer";
import {Navbar} from "../Navbar";
import "./style.css"
import LoginPage from "../../../pages/loginPage";

const PageLayout = ({children, footer = true}) => {
    return(
        <div className="layOut">
            <Navbar/>
            <LoginPage/>
            {/*{children}
            {footer === true && <Footer/>}*/}
        </div>
    )


}
export default PageLayout