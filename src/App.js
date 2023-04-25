import {BrowserRouter, Routes, Route} from "react-router-dom";

import About from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import TaskPage from "./pages/TaskPage";
import NotFoundPage from "./pages/404Page";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/tasks" element={<TaskPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;
