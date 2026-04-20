import { Navigate, useLocation } from 'react-router'
import { useAuth } from '../../context/AuthContext'
import './ProtectedRoute.css'

function ProtectedRoute({children}) {
    const {isAuthenticated} = useAuth()
    const location = useLocation()

    if(!isAuthenticated){
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children
}

export default ProtectedRoute
