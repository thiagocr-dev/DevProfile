import "./ProfileMetrics.css"
import { FaBriefcase, FaCode, FaGithub, FaLanguage } from "react-icons/fa"
import { HiOutlineChartBar } from "react-icons/hi"


function ProfileMetrics({ developer }) {
    return (
        <div className="metrics__card">
            <div className="metrics-header">
                <HiOutlineChartBar className="header-icon" />
                <h3>Estadísticas</h3>
            </div>

            <div className='metric-item'>
                <div className="metric-info">
                    <FaBriefcase className="metric-icon" />
                    <p>Años de experiencia</p>
                </div>
                <h3 className="metric-value">+{developer.metrics.experience_years}</h3>
            </div>

            <div className='metric-item'>
                <div className="metric-info">
                    <FaCode className="metric-icon" />
                    <p>Proyectos finalizados</p>
                </div>
                <h3 className="metric-value">{developer.metrics.projects_completed}</h3>
            </div>

            <div className='metric-item'>
                <div className="metric-info">
                    <FaGithub className="metric-icon" />
                    <p>Repositorios</p>
                </div>
                <h3 className="metric-value">{developer.metrics.repositories}</h3>
            </div>

            <div className='metric-item'>
                <div className="metric-info">
                    <FaLanguage className="metric-icon" />
                    <p>Nivel de inglés</p>
                </div>
                <h3 className="metric-value">{developer.metrics.english_level}</h3>
            </div>
        </div>
    )
}


export default ProfileMetrics