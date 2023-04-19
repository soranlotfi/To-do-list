import Navbar from "./pages/home-page/components/navbar";
import Footer from "./pages/home-page/components/footer";
import {Outlet} from "react-router-dom";

const PageLayout = ({children}) => {
    console.log(children)
    return <>
        <Navbar/>
        {children}
        <Footer/>
    </>

}
export default PageLayout