import { Navigate } from 'react-router'
import { useAuth } from '../../context/AuthContext'
import './ProtectedRoute.css'

function ProtectedRoute({children}) {
    const {isAuthenticated} = useAuth()

    if(!isAuthenticated){
        return <Navigate to="/login" />
    }
    return children
}

export default ProtectedRoute
