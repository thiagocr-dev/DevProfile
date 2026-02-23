import { NavLink } from 'react-router'
import './Sidebar.css'

function Sidebar() {
    return (
        <aside className='sidebar'>
            <NavLink to='/' >
                Home
            </NavLink>

            <NavLink to='/crear' >
                Crear Perfil
            </NavLink>
        </aside>
    )
}

export default Sidebar
