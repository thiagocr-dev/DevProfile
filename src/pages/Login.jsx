import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../context/AuthContext'
import { FaUser, FaLock, FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiOutlineCube } from 'react-icons/hi'
import './Login.css'

function Login() {

    const { login } = useAuth()
    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const success = login(username, password)

        if (success) {
            navigate('/')
        } else {
            setError('Credenciales incorrectas')
        }
    }

    return (
        <div className='login-container'>
            {/* Background Decorations */}
            <div className="bg-glow blob-1"></div>
            <div className="bg-glow blob-2"></div>
            
            <div className="bg-item cube-1"><HiOutlineCube /></div>
            <div className="bg-item cube-2"><HiOutlineCube /></div>
            <div className="bg-item cube-3"><HiOutlineCube /></div>
            <div className="bg-item cube-4"><HiOutlineCube /></div>

            <div className='login__card'>
                <h2 className="login-title">Login</h2>
                <p className="login-subtitle">Inicia sesión para descubrir nuevos talentos y conectar con desarrolladores.</p>
                
                {error && <p className='error'>{error}</p>}

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="input-group">
                        <FaUser className="input-icon" />
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <FaLock className="input-icon" />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="login-button">Ingresar</button>
                </form>
            </div>

            <footer className="login-footer">
                <div className="footer-content">
                    <p>Copyright © 2026 DevProfiles - Todos los derechos reservados</p>
                    <div className="footer-links">
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                        <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Login