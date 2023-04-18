import Navbar from "./components/navbar";
import {NavLink} from "react-router-dom";
import "./styles/styles.css"
import Main from "./components/main";
const Homepage = () =>{
   return(
      <>
         <Navbar/>
          <Main/>
      </>
   )
}
export default Homepage;