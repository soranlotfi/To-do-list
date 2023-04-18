import Navbar from "./components/navbar";
import {NavLink} from "react-router-dom";
import "./styles/styles.css"
import Main from "./components/main";
import Footer from "./components/footer";
const Homepage = () =>{
   return(
      <>
         <Navbar/>
          <Main/>
          <Footer/>
      </>
   )
}
export default Homepage;