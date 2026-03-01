import './Profile.css'
import { useParams, useNavigate} from 'react-router'
import developers from '../data/developers'
import ProfileMetrics from '../components/ProfileMetrics/ProfileMetrics'
import TechChart from '../components/TechChart/TechChart'
import DeveloperCardProfile from '../components/DeveloperCardProfile/DeveloperCardProfile'

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
        <div className='profile-wrapper'>
            <button className="back-btn" onClick={() => navigate(-1)}>Volver</button>
                <div className="profile__container">
                    <div className="left-column">
                        <DeveloperCardProfile developer={developer}/>
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
