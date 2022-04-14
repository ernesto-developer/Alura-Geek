
import { Navigate } from 'react-router-dom';




export const PrivateRoute = ({ children, isLoggedIn }) => {
    
    console.log('Prived '+children, isLoggedIn);

    return (isLoggedIn)
        ? children
        : <Navigate to="/login" />
}
