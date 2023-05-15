import Footer from "../Footer";
import {Navbar} from "../Navbar";
import "./style.css"
import LoginPage from "../../../pages/loginPage";
import {useTodoContext} from "../../../context/TodoProvider";

const PageLayout = ({children, footer = true}) => {
    const {LoginInfo} = useTodoContext()
    return (
        <div className="layOut">
            {LoginInfo ? (
                <>
                    <Navbar />
                    {children}
                    {footer === true && <Footer />}
                </>
            ) : (
                <LoginPage />
            )}
        </div>
    )


}
export default PageLayout