import PageLayout from "../../Components/Layouts/PageLayout";
import "./style.css"
import {aboutData} from "../../Data/Static/data";
import {useEffect, useState} from "react";
const About= ()=>{
    const [data,setData]=useState({})
    useEffect(()=>{
        setData(aboutData)
    },[])
    return(
        <PageLayout >
            <div className="about-page">
                <div className="container">
                    <h1>{data.title}</h1>
                    <p>{data.desc}</p>
                    <p>{data.desc}</p>
                    <p>{data.desc}</p>
                    <p>{data.desc}</p>
                    <p>{data.desc}</p>
                    <p>{data.desc}</p>
                    <p>{data.desc}</p>
                    <p>{data.desc}</p>
                    <p>{data.desc}</p>
                    <p>{data.desc}</p>
                    <p>{data.desc}</p>

                </div>
            </div>
        </PageLayout>
    )
}

export default About;