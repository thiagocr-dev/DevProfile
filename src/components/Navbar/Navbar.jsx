import { useState } from 'react'
import { NavLink } from 'react-router'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { useAuth } from '../../context/AuthContext'
import './Navbar.css'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const { isAuthenticated, logout } = useAuth()

    const toggleMenu = () => setIsOpen(!isOpen)
    const closeMenu = () => setIsOpen(false)

    return (
        <nav className='navbar'>
            <h2 className='navbar__logo'>DevProfiles</h2>
            
            <button 
                className={`navbar__menu-btn ${isOpen ? 'active' : ''}`} 
                onClick={toggleMenu}
                aria-label='Menu'
            >
                {isOpen ? <FaXmark /> : <FaBars />}
            </button>

            <div className={`navbar__mobile-menu ${isOpen ? 'is-open' : ''}`}>
                <NavLink to='/' className='navbar__mobile-link' onClick={closeMenu}>
                    Home
                </NavLink>
                <NavLink to='/dev/crear' className='navbar__mobile-link' onClick={closeMenu}>
                    Crear Perfil
                </NavLink>
                
                {isAuthenticated ? (
                    <button className='navbar__mobile-link logout-btn' onClick={() => { logout(); closeMenu(); }}>
                        Cerrar Sesión
                    </button>
                ) : (
                    <NavLink to='/login' className='navbar__mobile-link' onClick={closeMenu}>
                        Iniciar Sesión
                    </NavLink>
                )}
            </div>
        </nav>
    )
}

export default Navbar