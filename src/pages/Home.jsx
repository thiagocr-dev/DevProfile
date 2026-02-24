import "./Home.css"
import { use } from "react"
import { useNavigate } from "react-router"
import developers from "../data/developers"
import DeveloperCard from "../components/DeveloperCard/DeveloperCard"

function Home(){

    const navigate = useNavigate()
    return(

        <div className="home__container">
            <section className="home__leyend">
                <h1 className="title">Descubre desarrolladores</h1>
                <p className="subtitle">Explora perfiles y conecta con talento tech</p>
            </section>

            <div className="cards-container">
                {developers.map(dev => (
                    <DeveloperCard key={dev.id} developer={dev} />
                ))}</div>
            </div>
    )
}

export default Home