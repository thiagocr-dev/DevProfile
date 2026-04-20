import './TechChart.css'

function TechChart({tech}) {
    
    if(!tech || tech.length === 0) {
        return <p>No hay tecnologías disponibles</p>
    }
    return(
        <div className="tech-chart">
            <h3>Stack Tecnológico</h3>

            {tech.map((item, index) => (
                <div key={index} className="tech-group">
                    <div className="tech-info">
                        <span className="tech-name">{item.name}</span>
                        <span className="tech-percentage">{item.level}%</span>
                    </div>
                    
                    <div className="tech-level">
                        <div className='bar-fill'
                            style={{ '--level': `${item.level}%` }}>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TechChart