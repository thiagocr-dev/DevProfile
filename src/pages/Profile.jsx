import './Profile.css'
import { useParams, useNavigate} from 'react-router'
import { useDevelopers } from '../context/DevelopersContext'
import ProfileMetrics from '../components/ProfileMetrics/ProfileMetrics'
import TechChart from '../components/TechChart/TechChart'
import DeveloperCardProfile from '../components/DeveloperCardProfile/DeveloperCardProfile'
import { HiOutlineCube } from 'react-icons/hi'
import '../pages/Login.css' // Reusing background decoration styles

function Profile() {
    const {id} = useParams()
    const navigate = useNavigate()
    const { devs } = useDevelopers()

    const developer = devs.find(dev => dev.id === parseInt(id))

    if (!developer) {
        return (
            <div className="profile__container">
                <h1>Desarrollador no encontrado</h1>
            </div>
        )
    }

    return (
        <div className='profile-wrapper'>
            {/* Background Decorations */}
            <div className="bg-glow blob-1"></div>
            <div className="bg-glow blob-2"></div>
            
            <div className="bg-item cube-1"><HiOutlineCube /></div>
            <div className="bg-item cube-2"><HiOutlineCube /></div>
            <div className="bg-item cube-3"><HiOutlineCube /></div>
            <div className="bg-item cube-4"><HiOutlineCube /></div>

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
