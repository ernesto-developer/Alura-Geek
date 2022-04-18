import React, {useEffect,useState} from 'react'
import { useDispatch} from 'react-redux'
import { firebase } from '../firebase/firebase-config';
import { AuthRouter } from './AuthRouter';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { startLoadingProducts } from '../actions/products';


export const AppRouter = () => {
//########################################  Esto es para mantener el estado de la autenticacion del usuario ########################################
  const dispatch = useDispatch();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    
    firebase.auth().onAuthStateChanged( async(user) => {
      if(user?.uid){
          dispatch(login(user.uid, user.displayName));
          setCheckingAuth(false);
          setIsLoggedIn(true);
          dispatch(startLoadingProducts(user.uid));


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
            
      {/* TODO: review more about routes v6 */}
      {/* TODO: Insert in the routes the navbar, skirtingboard and the fotter component, 
        for this way render in all pages the same components */}
  

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
