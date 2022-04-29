import React, {useEffect} from 'react'
import Swal from 'sweetalert2';
import { useDispatch,useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { useForm } from '../../hooks/useform'
import { setError, removeError } from '../../actions/ui'
import { startLoginEmailPassword, startGoogleLogin, changeUserName } from '../../actions/auth'
import validator from 'validator';
import { changeUser } from '../../actions/user';

export const LoginForm = () => {

  const dispatch = useDispatch();
  const [ formvalues, handleInputChange ] = useForm({
    email: '',
    password: ''
  });
  const {msgError,loading} = useSelector(state => state.ui);//esto es para obtener el error de ui del store de redux
  const {uid, name} = useSelector(state => state.auth);
  
  const { email, password } = formvalues;

  // const handleChangeEmailUser = (e) => {
  //   e.preventDefault();
  //   console.log(email);
  //   dispatch(changeUser(name));
  //   //TODO: TERMIANR LA ACTUALIZACION DEL CHANGEEMAIL POR EL CHANGEUSER
  // } 
  const handleLogin = (e) => {
   setTimeout(() => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
    Swal.fire({title: 'Cargando...', text: 'Espere por favor',timer:1500});
   },[1000]);
  };
  
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    dispatch(startGoogleLogin());
    Swal.fire({title: 'Cargando...', text: 'Espere por favor',timer:1500});
  };
  
  // useEffect(() => {
  //   console.log(name);
  //   dispatch(changeUser(name));
  //   },[dispatch,name]);
    
  return (
    <form className="LoginForm"  >
      <span className="LoginForm-title">Iniciar Sesión</span>
      {msgError && <div className="alert-error"> {msgError} </div>}
      <input
        className="LoginForm-input"
        type="text"
        name="email"
        value={email}
        placeholder="Escriba su correo electronico"
        onChange={handleInputChange}
      />
      <input
        className="LoginForm-input"
        type="password"
        name="password"
        value={password}
        placeholder="Escriba su contraseña"
        onChange={handleInputChange}
      />
      
        <button type='button' className="LoginForm-button" disabled={loading} onClick={ handleLogin} >
        Entrar{/* <NavLink className="nav-link" to={(msgError !== null) ? '/login': '/' }>Entrar</NavLink> */}
        </button>
        <NavLink id='ButtonLogin' style={{display: 'none'}} className="nav-link" to={ '/' }>Entrar</NavLink> 
        
      
      <div className="google-btn" onClick={handleGoogleLogin}>
        <div className="google-icon-wrapper">
          <img
            className="google-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="google"
          />
        </div>
        <p className="btn-text">
          <b>Sign in with google</b>
        </p>
      </div>
      <NavLink className="nav-Link" to="/register">
        {" "}
        Registrate{" "}
      </NavLink>
    </form>
  );
}
