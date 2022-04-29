import React, {useEffect,useState} from 'react'
import { useDispatch} from 'react-redux'
import { firebase } from '../firebase/firebase-config';
import { AuthRouter } from './AuthRouter';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
// import { LoginPage } from '../pages/LoginPage';
// import { RegisterPage } from '../pages/RegisterPage';
import { startLoadingProducts } from '../actions/products';
import { login, startLoginEmailPassword} from '../actions/auth';

import { AddProductPage } from '../pages/AddProductPage';
import { DescriptionPage } from '../pages/DescriptionPage';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { PublicPage } from '../pages/PublicPage';
import { RegisterPage } from '../pages/RegisterPage';
import { changeUser } from '../actions/user';



export const AppRouter = () => {
//########################################  Esto es para mantener el estado de la autenticacion del usuario ########################################
  const dispatch = useDispatch();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {

    

    //  setIsLoggedIn(true);
          // dispatch(startLoadingProducts("8bKwlVmR3TXmdTlqCRuTlr2cQGl1"));
    
    firebase.auth().onAuthStateChanged( async(user) => {
      if(user?.uid){
          dispatch(login(user.uid, user.displayName));
          setCheckingAuth(false);
          setIsLoggedIn(true);
          // dispatch(startLoadingProducts(user.uid));
          dispatch(startLoadingProducts("8bKwlVmR3TXmdTlqCRuTlr2cQGl1"));
          dispatch(changeUser(user.displayName));
          
          
        }else  {
          // setIsLoggedIn(false);
          dispatch( startLoginEmailPassword('userguest@guest.com', 'pokpok'));
          
      }
    });
  }, [dispatch, setCheckingAuth, setIsLoggedIn]);
  
//#################################################################################################################################################

  // if(checkingAuth){
  //   return <div>Cargando...</div>
  // }

  return (
    <BrowserRouter>
      {/* <Routes> */}
            
      {/* TODO: review more about routes v6 */}
      {/* TODO: Insert in the routes the navbar, skirtingboard and the fotter component, 
        for this way render in all pages the same components */}
  

        <Routes>
            <Route path='products' element={ <ProductsPage /> } />
            <Route path='description' element={ <DescriptionPage /> } />
            <Route path='addProucts' element={ <AddProductPage /> } />
            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<RegisterPage />} />
            <Route path='/' element={ <PublicPage /> }/>
        </Routes>


        {/* <Route path="/login" element={
          <PublicRoute isLoggedIn={isLoggedIn} >
          
           <LoginPage/>
           <RegisterPage/>

          </PublicRoute>
        }/>  
        
           
        
     
        <Route path="/*" element={
          <PrivateRoute isLoggedIn={isLoggedIn} >
            <AuthRouter />
          </PrivateRoute>
        } /> */}
      {/* </Routes> */}
    </BrowserRouter>
  );
};
