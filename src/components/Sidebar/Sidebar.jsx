import { NavLink } from 'react-router'
import { useAuth } from '../../context/AuthContext'
import './Sidebar.css'

function Sidebar() {
    const { isAuthenticated, logout } = useAuth()

    return (
        <aside className='sidebar'>
            <div className='sidebar__main-content'>
                <div className="sidebar__logo-container">
                    <h1 className="sidebar__logo">DevProfiles</h1>
                </div>
                
                <nav className="sidebar__nav">
                    <NavLink className="sidebar__link" to='/' >
                        Home
                    </NavLink>

                    <NavLink className="sidebar__link" to='/dev/crear' >
                        Crear Perfil
                    </NavLink>
                </nav>
            </div>

            <div className='sidebar__footer'>
                {isAuthenticated ? (
                    <button className="sidebar__link logout-btn" onClick={logout}>
                        Cerrar Sesión
                    </button>
                ) : (
                    <NavLink className="sidebar__link" to='/login'>
                        Iniciar Sesión
                    </NavLink>
                )}
            </div>
        </aside>
    )
}

export default Sidebar
