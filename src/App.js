import {BrowserRouter, Routes, Route} from "react-router-dom";

import About from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import TaskPage from "./pages/TaskPage";
import NotFoundPage from "./pages/404Page";
import TodoProvider from "./context/TodoProvider";

const App = () => {
    return (
        <TodoProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/tasks" element={<TaskPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </BrowserRouter>
        </TodoProvider>
    )
}
export default App;
