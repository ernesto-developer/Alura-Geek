import React from 'react'
import Swal from 'sweetalert2'
import { NavLink } from 'react-router-dom'
import { useForm } from '../../hooks/useform'
import validator from 'validator';
import { useDispatch,useSelector } from 'react-redux'
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterForm = () => {

    const dispatch = useDispatch();
    const {msgError} = useSelector(state => state.ui);//esto es para obtener el error de ui del store de redux

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { name, email, password, confirmPassword } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if(isFormValid()) {
           dispatch( startRegisterWithEmailPasswordName(name, email, password) );
        }
    }

    const isFormValid = () => {
        if(name.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
            dispatch(setError('Todos los campos son obligatorios'));
            Swal.fire({title: 'Error', text: 'Todos los campos son obligatorios', icon: 'error'});
            return false;
        }else
        if(!validator.isEmail(email)) {
            dispatch(setError('El email no es valido'));
            Swal.fire('Error', 'El email no es valido', 'error');
            return false;
        }else
        if(password !== confirmPassword || password.length < 5) {
            dispatch(setError('Las contraseñas no coinciden o son muy cortas'));
            Swal.fire('Error', 'Las contraseñas no coinciden o tienen menos de 6 caracteres', 'error');
            return false;
        }
        dispatch(removeError());
        return true;    
    }


  return (
    <form className="RegisterForm" >
    <span className="RegisterForm-title"> Registrar </span>
    {msgError && <div className="alert-error"> {msgError} </div>}
    <input
      className="RegisterForm-input"
      type="text"
      name="name"
      placeholder="Nombre"
      value={name}
      onChange={handleInputChange}
    />
    <input
      className="RegisterForm-input"
      type="text"
      name="email"
      placeholder="Escriba su correo electronico"
      value={email}
      onChange={handleInputChange}
    />
    <input
      className="RegisterForm-input"
      type="password"
      name="password"
      placeholder="Contraseña"
      value={password}
      onChange={handleInputChange}
    />
    <input
      className="RegisterForm-input"
      type="password"
      name="confirmPassword"
      placeholder="Confirmar Contraseña"
      value={confirmPassword}
      onChange={handleInputChange}
    />
    <button type='button' className="RegisterForm-button" onClick={handleRegister}> Registrar </button>
    <NavLink id='RegisterButton' style={{display: 'none'}} className="nav-Link" to="/"></NavLink>
   
    <NavLink className="nav-Link" to="/login"> Ya estas Registrado</NavLink>

  </form>
  )
}
