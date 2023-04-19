import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./pages/home-page/Homepage";
import About from "./pages/about-page/About";

const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;
