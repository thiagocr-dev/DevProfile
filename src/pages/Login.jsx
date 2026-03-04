import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../context/AuthContext'
import './Login.css'

function Login() {

    const {login} = useAuth ()
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
        <div className='login__card'>
            <h2>Login</h2>
                {error && <p className='error'>{error}</p>}

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Ingresar</button>
            </form>
        </div>
    </div>    
    )
}

export default Login