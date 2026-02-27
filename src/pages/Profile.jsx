import './Profile.css'
import { useParams, useNavigate, Link } from 'react-router'
import developers from '../data/developers'
import TechBadge from '../components/TechBadge/TechBadge'

function Profile() {
    const {id} = useParams()
    const navigate = useNavigate()

    const developer = developers.find(dev => dev.id === parseInt(id))

    if (!developer) {
        return (
            <div className="profile__container">
                <h1>Desarrollador no encontrado</h1>
            </div>
        )
    }

    return (
        <div className="profile__container">
            <button className="back-btn" onClick={() => navigate(-1)}>Volver</button>
            <div className="profile__card">
                <img 
                    src={developer.avatar}
                    alt={developer.name}
                    className='avatar'
                />

                <h1>{developer.name}</h1>
                <h3 className='role'>{developer.role}</h3>
                <p className='bio'>{developer.bio}</p>
                <div className='tech'>
                    {developer.tech.map((tech, index) => (
                        <TechBadge key={index} tech={tech} />
                    ))}
                </div>

                <div className="profile__metrics">
                    <div className='metric'>
                        <h3>{developer.metrics.experience_years}+</h3>
                        <p>Años de experiencia</p>
                    </div>

                    <div className='metric'>
                        <h3>{developer.metrics.projects_completed}</h3>
                        <p>Proyectos</p>
                    </div>

                    <div className='metric'>
                        <h3>{developer.metrics.repositories}</h3>
                        <p>Repositorios</p>
                    </div>

                    <div className='metric'>
                        <h3>{developer.metrics.english_level}</h3>
                        <p>Nivel de ingles</p>
                    </div>
                </div>
            
                <Link 
                    to={developer.cv}
                    download={developer.cv} 
                    className='cv-btn'
                >
                    Descargar CV
                </Link>
            </div>
        </div>
    )
}

export default Profile
