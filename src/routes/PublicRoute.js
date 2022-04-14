
import { Navigate } from 'react-router-dom';




export const PublicRoute = ({ children, isLoggedIn }) => {


    console.log('Public '+children, isLoggedIn);
    
    return isLoggedIn
    ? <Navigate to="/" />
    : children
}
