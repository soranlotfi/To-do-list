import "../styles/styles.css"
const Main = ()=>{
    return(
        <main className="app-introduce">
            <div className="container">
                <img className="main-section-img" src={require('../assets/OIP.jpg')} alt=""/>
                <div className="main-section-captions">
                    <h2>Soran's Todo List</h2>
                    <h3>Mange Your Time</h3>
                    <h4>We are here to make the diffrences</h4>
                    <p>A great experience of working with a to do list</p>
                </div>
            </div>
        </main>
    )
}
export default Main;