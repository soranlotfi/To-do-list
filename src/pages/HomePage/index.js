import {Link} from "react-router-dom";
import "./styles/styles.css"
import PageLayout from "../../Components/Layouts/PageLayout";
import {homeData} from "../../Data/Static/data";
import {useEffect, useState} from "react";


const HomePage = () => {

    const [HomeData,setHomeData]=useState({})

   useEffect(()=>{
       setHomeData(homeData)
   },[])
    return (
        <PageLayout>
            <main className="app-introduce">
                <div className="container">
                    <img className="main-section-img" src={require('../../Assets/images/OIP.jpg')} alt=""/>
                    <div className="main-section-captions">
                        <h2>{HomeData.todoListTitle}</h2>
                        <h3>{HomeData.todoListDesc}</h3>
                        <h4>{HomeData.todoListFirstLine}</h4>
                        <p>{homeData.todoListSecondLine}</p>
                        <button className="btn main-section-btn">
                            <Link to="/taskmanager">
                                {HomeData.todoListLetsGo}
                            </Link>
                        </button>
                    </div>
                </div>

            </main>
        </PageLayout>

    )
}
export default HomePage;