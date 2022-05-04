import React, {useEffect,useState} from 'react'
import { useDispatch} from 'react-redux'
import { firebase } from '../firebase/firebase-config';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { startLoadingProducts } from '../actions/products';
import { login, startLoginEmailPassword} from '../actions/auth';
import { AddProductPage } from '../pages/AddProductPage';
import { DescriptionPage } from '../pages/DescriptionPage';
import { LoginPage } from '../pages/LoginPage';
import { PublicPage } from '../pages/PublicPage';
import { RegisterPage } from '../pages/RegisterPage';
import { changeUser } from '../actions/user';
import { SeeAllProductsByCategory } from '../pages/SeeAllProductsByCategory';
import { NavBar } from '../components/navBar/NavBar';
import { SkirtingBoard } from '../components/skirtingBoard/SkirtingBoard';
import { Footer } from '../components/footer/Footer';



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

  return (
   
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path='/' element={<PublicPage />}/>
            <Route path="description" element={<DescriptionPage />} />
            <Route path="addProucts" element={<AddProductPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="seeAllProd" element={<SeeAllProductsByCategory />} />
            <Route path="*" element={<PublicPage/>} />
        </Routes>
        <SkirtingBoard />
        <Footer />
      </BrowserRouter>


  
  );
};
