import "./Home.css"
import { use } from "react"
import { useNavigate } from "react-router"
import { useState } from "react"
import developers from "../data/developers"
import DeveloperCard from "../components/DeveloperCard/DeveloperCard"

function Home(){

    const [search, setSearch] = useState("")

    const filteredDevelopers = developers.filter(dev => 
        dev.name.toLowerCase().includes(search.toLowerCase())
        ||
        dev.role.toLowerCase().includes(search.toLowerCase())
        ||
        dev.tech.some(tech => tech.toLowerCase().includes(search.toLowerCase()))
    )
    
    return(
    
        <div className="home__container">
            <section className="home__leyend">
                <h1 className="title">Descubre desarrolladores</h1>
                <p className="subtitle">Explora perfiles y conecta con talento tech</p>
            </section>
                
            <input 
                type="text"
                placeholder="Buscar desarrollador..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-input"
            />

            <div className="cards-container">
                {filteredDevelopers.length > 0 ? (
                    filteredDevelopers.map((dev) => (
                        <DeveloperCard key={dev.id} developer={dev} />
                    ))
                ) : (
                    <p className="no-results">No se encontraron desarrolladores</p>
                )}
            </div>
        </div>
    )
}

export default Home