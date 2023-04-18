import {BrowserRouter,Routes,Route} from "react-router-dom";
import Homepage from "./pages/home-page/Homepage";

const App = () =>{
    return(
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage/>}>
                        <Route path="/tasks" element={<h1>hell </h1>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;
