import './Profile.css'
import { useParams, useNavigate, Link } from 'react-router'
import developers from '../data/developers'
import TechBadge from '../components/TechBadge/TechBadge'
import ProfileMetrics from '../components/ProfileMetrics/ProfileMetrics'
import DeveloperCard from '../components/DeveloperCard/DeveloperCard'
import TechChart from '../components/TechChart/TechChart'

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
        <div>
            <button className="back-btn" onClick={() => navigate(-1)}>Volver</button>
                <div className="profile__container">
                    <div className="left-column">
                        <DeveloperCard developer={developer}/>
                        <Link to={developer.cv}
                            download={developer.cv} 
                            className='cv-btn'>
                            Descargar CV
                        </Link>
                    </div> 

                    <div className='right-column'>
                        <TechChart tech={developer.tech} />
                        <ProfileMetrics developer={developer} />
                    </div>
                </div>
        </div>
    )
}

export default Profile
