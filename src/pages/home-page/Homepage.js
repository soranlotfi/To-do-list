import Navbar from "./components/navbar";
import {NavLink, Outlet} from "react-router-dom";
import "./styles/styles.css"
import Main from "./components/main";
import PageLayout from "../../PageLayout";

const Homepage = () => {
    return (
        <PageLayout>
            <Main/>
        </PageLayout>

    )
}
export default Homepage;