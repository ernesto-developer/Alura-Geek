import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {changeEmailUser} from '../../../actions/user';


export const NavButton = () => {
  
  const {email} = useSelector(state => state.user);
  const dispatch = useDispatch();
  
  const handleLogout = () => dispatch(changeEmailUser(''));
  

  return (
    <NavLink className="nav-link" to={ (email === '') ? '/login': '/' }>
      <button 
      type='button'
      className="navBar__container-button"
      onClick={ (email !== '' ) ? handleLogout : null  }
      > {(email === '') ? 'Login' : 'Logout'  } </button>
    </NavLink>
  );
}
