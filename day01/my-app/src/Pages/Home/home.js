import About from "../../Components/About/about";
import Header from "../../Components/Header/header";
import Portfolio from "../../Components/Portfolio/portfolio";
import Skill from "../../Components/Skill/skill";
import Footer from "../../Components/Footer/footer";
import './home.css';

const Home=()=>{
    return(
        <div className="container">
            <Header/>
            <About/>
            <Skill/>
            <Portfolio/>
            <Footer/>
        </div>
    )
}

export default Home;