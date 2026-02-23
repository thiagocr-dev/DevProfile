import { use } from "react"
import "./Home.css"
import { useNavigate } from "react-router"

function Home(){

    const navigate = useNavigate()

    const developers = [
            {
                id: 1,
                name: "Juan Pérez",
                role: "Frontend Developer",
                tech: ["React", "JavaScript", "CSS"],
                avatar: "https://randomuser.me/api/portraits/men/1.jpg"
            },
            {
                id: 2,
                name: "María López",
                role: "Backend Developer",
                tech: ["Node.js", "Express", "MongoDB"],
                avatar: "https://randomuser.me/api/portraits/women/2.jpg"
            },
            {
                id: 3,
                name: "Mati Profe",
                role: "Full Stack Developer",
                tech: ["Angular", "JavaScript", "CSS"],
                avatar: "https://randomuser.me/api/portraits/men/3.jpg"
            }
    ]
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