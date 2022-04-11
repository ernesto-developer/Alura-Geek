import React from 'react'
import { NavLink } from 'react-router-dom'

export const LoginForm = () => {
  return (
    <form className='LoginForm'>
      <span className='LoginForm-title' >Iniciar Sesión</span>
      <input className='LoginForm-input' type='text' placeholder='Escriba su correo electronico' />
      <input className='LoginForm-input' type='password' placeholder='Escriba su contraseña' />
      <NavLink className='nav-Link' to='/' > <button className='LoginForm-button' >Entrar</button> </NavLink>
    </form>
  )
}
