import './Profile.css'
import { useParams, useNavigate } from 'react-router'
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
            </div>
        </div>
    )
}

export default Profile
