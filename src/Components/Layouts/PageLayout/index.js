import Footer from "../Footer";
import {Navbar} from "../Navbar";

const PageLayout = ({children, footer = true}) => {
    return <>
        <Navbar/>
        {children}
        {footer === true && <Footer/>}
    </>

}
export default PageLayout