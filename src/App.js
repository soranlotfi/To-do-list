import {BrowserRouter,Routes,Route} from "react-router-dom";
import Homepage from "./pages/home-page/Homepage";

const App = () =>{
    return(
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;
