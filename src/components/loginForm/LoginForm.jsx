

import React from 'react'

export const LoginForm = () => {
  return (
    <form className='LoginForm'>
      <span className='LoginForm-title' >Iniciar Sesión</span>
      <input className='LoginForm-input' type='text' placeholder='Escriba su correo electronico' />
      <input className='LoginForm-input' type='password' placeholder='Escriba su contraseña' />
      <button className='LoginForm-button' >Entrar</button>
    </form>
  )
}
