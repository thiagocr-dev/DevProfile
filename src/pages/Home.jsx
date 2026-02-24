import "./Home.css"
import { use } from "react"
import { useNavigate } from "react-router"
import { useState } from "react"
import developers from "../data/developers"
import DeveloperCard from "../components/DeveloperCard/DeveloperCard"

function Home(){

    const [search, setSearch] = useState("")
    const [selectedTech, setSelectedTech] = useState("Todos");
    /* const techFilters = ["Todos", "React", "JavaScript", "CSS", "HTML", "Angular", "Vue", "Node.js", "Python", "TypeScript", "Express", "MongoDB", "C++", "C#", "php", "Swift" ] // falta importar valor, por ahora asi; */
    const allTechs = ["Todos", ...new Set(developers.flatMap(dev => dev.tech))]

    const filteredDevelopers = 
    developers.filter(dev => {
        const searchLower = search.toLowerCase();

        const MatchSearch =
            dev.name.toLowerCase().includes(searchLower)
            ||
            dev.role.toLowerCase().includes(searchLower)
            ||
                dev.tech.some(tech => 
                tech.toLowerCase().includes(searchLower)
            )
        const matchTech = 
            selectedTech === "Todos" 
            || 
            dev.tech.includes(selectedTech);
            return matchTech && MatchSearch
        })
    

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

            <div className="tech-filter">
                {allTechs.map((tech, index) => (
                    <button
                        key={index}
                        className={`tech-filter-btn ${selectedTech === tech 
                            ? "active" 
                            : ""}`}
                        onClick={() => setSelectedTech(tech)}
                    >
                        {tech}
                    </button>
                ))}
            </div>

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