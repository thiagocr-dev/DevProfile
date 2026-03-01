import { NavLink } from 'react-router'
import './Sidebar.css'

function Sidebar() {
    return (
        <aside className='sidebar'>
            <NavLink className="sidebar__link" to='/' >
                Home
            </NavLink>

            <NavLink className="sidebar__link" to='/dev/crear' >
                Crear Perfil
            </NavLink>
        </aside>
    )
}

export default Sidebar
