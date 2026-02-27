import './TechChart.css'

function TechChart({tech}) {
    
    if(!tech || tech.length === 0) {
        return <p>No hay tecnologías disponibles</p>
    }
    return(
        <div className="tech-chart">
            <h3>Stack Tecnológico</h3>

            {tech.map((item, index) => (
                <div key={index} 
                    className="tech-items">
                    <span>{item.name}</span>
                    <span>{item.level}%</span>
                    
                    <div className="tech-level">
                        <div className='bar-fill'
                            style={{width: `${item.level}%`}}>
                        </div>
                </div>
        </div>
        ))}
        </div>
    )
}

export default TechChart