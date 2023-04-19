import {BrowserRouter, Routes, Route} from "react-router-dom";

import About from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import TaskPage from "./pages/TaskPage";
const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/tasks" element={<TaskPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;
