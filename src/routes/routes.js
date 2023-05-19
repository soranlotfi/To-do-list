import HomePage from "../pages/HomePage";
import About from "../pages/AboutPage";
import TaskPage from "../pages/TaskPage";
import NotFoundPage from "../pages/404Page";

const RouteData = [
    {
        path:"/",
        element:<HomePage/>,
        key:1
    } ,
    {
        path:"/about",
        element:<About/>,
        key:3
    } ,
    {
        path:"/tasks",
        element:<TaskPage/>,
        key:4
    } ,
    {
        path:"*",
        element:<NotFoundPage/>,
        key:4
    } ,
]

export default RouteData;