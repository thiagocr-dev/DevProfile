import "./ProfileMetrics.css"


function ProfileMetrics({ developer }) {
    return (
        <div className="metrics__card">
            <h3>Estadísticas</h3>

            <div className='metric'>
                <p>Años de experiencia</p>
                <h3>+{developer.metrics.experience_years}</h3>
            </div>

            <div className='metric'>
                <p>Proyectos</p>
                <h3>{developer.metrics.projects_completed}</h3>
            </div>

            <div className='metric'>
                <p>Repositorios</p>
                <h3>{developer.metrics.repositories}</h3>
            </div>

            <div className='metric'>
                <p>Nivel de ingles</p>
                <h3>{developer.metrics.english_level}</h3>
            </div>
        </div>
    )
}


export default ProfileMetrics