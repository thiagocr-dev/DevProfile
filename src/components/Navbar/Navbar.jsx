import './Navbar.css'
import { NavLink } from 'react-router'

function Navbar() {
    return (
        <nav className='navbar'>
            <h2 className='navbar__logo'>DevProfiles</h2>
            <div className='navbar__icons'>
                <NavLink to='/' className='navbar__icon' title='Home' aria-label='Home'>🏠</NavLink>
                <NavLink to='/dev/crear' className='navbar__icon' title='Crear perfil' aria-label='Crear perfil'>➕</NavLink>
            </div>
        </nav>
    )
}

export default Navbar