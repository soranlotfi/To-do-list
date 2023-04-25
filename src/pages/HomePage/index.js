import {Link} from "react-router-dom";
import "./styles/styles.css"
import PageLayout from "../../Components/Layouts/PageLayout";
import Footer from "../../Components/Layouts/Footer";


const HomePage = () => {
    return (
        <PageLayout>
            <main className="app-introduce">
                <div className="container">
                    <img className="main-section-img" src={require('../../Assets/images/OIP.jpg')} alt=""/>
                    <div className="main-section-captions">
                        <h2>Soran's Todo List</h2>
                        <h3>Manage Your Time</h3>
                        <h4>We are here to make the diffrences</h4>
                        <p>A great experience of working with a to do list</p>
                        <button className="btn main-section-btn">
                            <Link to="/taskmanager">
                                Lets Go
                            </Link>
                        </button>
                    </div>
                </div>

            </main>
        </PageLayout>

    )
}
export default HomePage;