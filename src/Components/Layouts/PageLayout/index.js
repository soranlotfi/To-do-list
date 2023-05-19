import Footer from "../Footer";
import {Navbar} from "../Navbar";
import "./style.css"
import LoginPage from "../../../pages/loginPage";
import {useAppContextController} from "../../../context/TodoNewContext";


const PageLayout = ({children, footer = true}) => {
    const [values] = useAppContextController()
    let isLoggedIn = values.isLogin

    return (
        <div className="layOut">
            {isLoggedIn ? (
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