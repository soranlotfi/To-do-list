import {NavLink} from "react-router-dom";
import "./styles/styles.css"
export const Navbar = () => {
    return <nav className="navbar">
        <div className="container">
            <div className="navbar-menu">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/tasks">TaskManager</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
            <h2 className="navbar-brand">
                Todo List
            </h2>
        </div>
    </nav>
}