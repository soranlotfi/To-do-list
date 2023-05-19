import {BrowserRouter, Routes, Route} from "react-router-dom";
import RouteData from "./routes/routes";
import NotFoundPage from "./pages/404Page";
import {AppContextController} from "./context/TodoNewContext";
import {ToastContainer ,Slide, Zoom, Flip, Bounce} from "react-toastify";

const App = () => {
    return (

        <AppContextController>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="colored"
                transition={Flip}
            />
            <BrowserRouter>
                <Routes>
                    {
                        RouteData.map(route =>
                        <Route path={route.path} element={route.element} key={route.key}/>
                        )
                    }
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </BrowserRouter>
        </AppContextController>
    )
}
export default App;
