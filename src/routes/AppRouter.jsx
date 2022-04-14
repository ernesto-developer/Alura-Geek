import React, {useEffect,useState} from 'react'
import { useDispatch} from 'react-redux'
import { firebase } from '../firebase/firebase-config';
import { AuthRouter } from './AuthRouter';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { LoggedOutRouter } from './LoggedOutRoutes';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';


export const AppRouter = () => {
//########################################  Esto es para mantener el estado de la autenticacion del usuario ########################################
  const dispatch = useDispatch();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    
    firebase.auth().onAuthStateChanged((user) => {
      if(user?.uid){
          dispatch(login(user.uid, user.displayName));
          setCheckingAuth(false);
          setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false);
      }
    });
  }, [dispatch, setCheckingAuth, setIsLoggedIn]);
  
//#################################################################################################################################################

  // if(checkingAuth){
  //   return <div>Cargando...</div>
  // }

  return (
    <BrowserRouter>
      <Routes>
            

        <Route path="/login" element={
          <PublicRoute isLoggedIn={isLoggedIn} >
          
           <LoginPage/>
          <RegisterPage/>
          </PublicRoute>
        }/>  
        
           
        
     
        <Route path="/*" element={
          <PrivateRoute isLoggedIn={isLoggedIn} >
            <AuthRouter />
          </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
};
