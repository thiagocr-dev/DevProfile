import "./ProfileMetrics.css"


function ProfileMetrics({ developer }) {
    return (
        <div className="metrics__card">
            <h3>Estadísticas</h3>

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
    )
}


export default ProfileMetrics