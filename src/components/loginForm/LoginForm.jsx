import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useForm } from '../../hooks/useform'
import { setError, removeError } from '../../actions/ui'
import { startLoginEmailPassword, startGoogleLogin } from '../../actions/auth'
import validator from 'validator';

export const LoginForm = () => {

  const dispatch = useDispatch()

  const [ formvalues, handleInputChange ] = useForm({
    email: '',
    password: ''
  });
  const {msgError,loading} = useSelector(state => state.ui);//esto es para obtener el error de ui del store de redux
  
  const { email, password } = formvalues;

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateForm) {
      dispatch(startLoginEmailPassword(email, password));
    }
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    dispatch(startGoogleLogin());
  };

  const validateForm = () => {
    if (email.trim() === "" || password.trim() === "") {
      dispatch(setError("Todos los campos son obligatorios"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("El email no es valido"));
      return false;
    } else if (password.length < 5) {
      dispatch(setError("La contraseña es muy corta"));
      return false;
    }
    dispatch(removeError());
    return true;
  };



  return (
    <form className="LoginForm" onSubmit={handleLogin}>
      <span className="LoginForm-title">Iniciar Sesión</span>
      {msgError && <div className='alert-error' > {msgError} </div>}
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
      <button 
      className="LoginForm-button"
      disabled={loading}
      >Entrar</button>
      <div className="google-btn" onClick={handleGoogleLogin} >
        <div className="google-icon-wrapper">
          <img
            className="google-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt='google'
          />
        </div>
        <p className="btn-text">
          <b>Sign in with google</b>
        </p>
      </div>
      <NavLink className="nav-Link" to="/register"> Registrate </NavLink>

    </form>
  );
}
