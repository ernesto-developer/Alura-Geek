import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {changeUser} from '../../../actions/user';
import { startLogout } from '../../../actions/auth';


export const NavButton = () => {
  
  const {actualUser} = useSelector(state => state.user);
  const dispatch = useDispatch();
  
  // const handleLogout = () => dispatch(changeUser(''));
  const handleLogout = () => dispatch(startLogout());
  
  //TODO: TERMIANR LA ACTUALIZACION DEL CHANGEEMAIL POR EL CHANGEUSER
  

  return (
    <NavLink className="nav-link" to={ (actualUser === 'UserGuest' ) ? '/login': '/' }>
      <button 
      type='button'
      className="navBar__container-button"
      onClick={ (actualUser !== 'UserGuest'  ) ? handleLogout : null  }
      > {(actualUser === 'UserGuest' ) ? 'Login' : 'Logout'  } </button>
    </NavLink>
  );
}
