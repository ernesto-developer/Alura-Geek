import React from 'react'
import {  NavLink } from 'react-router-dom'
import { contactLinks } from '../../../resources/contactLinks'

export const InfoLinks = () => {
  return (

      <ul className='skirtingBoard__container__links' >  

          {contactLinks.map((link, index) => 
                <NavLink 
                    key={index} 
                    className='skirtingBoard__container__links-link' 
                    to={`/login`}>{link}
                </NavLink>
          )} 

      </ul>
 
  )
}
