import {NavLink} from "react-router-dom";
import {useAppContextController, setTest} from "../../../context/appContext";

export const Navbar = () => {
    const [controller, dispatch] = useAppContextController()

    return <nav className="navbar">
        <div className="container">
            <div className="navbar-menu">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/tasks">TaskManager</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
            <div onClick={() => setTest(dispatch, !controller.test)}>K</div>
            <h2 className="navbar-brand">
                Todo List
            </h2>
        </div>
    </nav>
}