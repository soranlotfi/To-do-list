import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-menu">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/tasks">Tasks</NavLink>
                    <NavLink to="/about">About</NavLink>
                </div>
                <h2 className="navbar-brand">
                    Todo List
                </h2>
            </div>
        </nav>
    )
}
export default Navbar;