import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../../actions/auth';


export const NavButton = () => {

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  }


  return (
    <NavLink className="nav-link" to="/login">
      <button 
      className="navBar__container-button"
      onClick={handleLogout}
      >Logout</button>
    </NavLink>
  );
}
