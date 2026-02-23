import "./Home.css"
import { use } from "react"
import { useNavigate } from "react-router"
import developers from "../data/developers"

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
                    <div key={dev.id} className="card">
                    <img src={dev.avatar} alt={dev.name} className="avatar"/>
                    <h3>{dev.name}</h3>
                    <p className="role">{dev.role}</p>
                    <p className="tech">{dev.tech.join(", ")}</p>
                    <button className="profile-btn" onClick={() => navigate(`/profile/${dev.id}`)}>Ver Perfil</button>
                    </div>
                ))}</div>
            </div>
    )
}

export default Home