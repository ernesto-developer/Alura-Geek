import React from 'react'
import { NavLink } from 'react-router-dom'
export const NavButton = () => {
  return (
    
      <NavLink className="nav-link" to='/login' > <button className='navBar__container-button' >Login</button> </NavLink>
    
  )
}
