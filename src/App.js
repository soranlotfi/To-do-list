import {BrowserRouter, Routes, Route} from "react-router-dom";

import About from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import TaskPage from "./pages/TaskPage";
import NotFoundPage from "./pages/404Page";
import TodoProvider from "./context/TodoProvider";
import {AppContextController} from "./context/TodoNewContext";

const App = () => {
    return (
        <TodoProvider>
            <AppContextController>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/tasks" element={<TaskPage/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Routes>
                </BrowserRouter>
            </AppContextController>

        </TodoProvider>
    )
}
export default App;
