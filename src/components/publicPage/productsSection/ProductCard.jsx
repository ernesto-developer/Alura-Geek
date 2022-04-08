import React from 'react'
import { NavLink } from 'react-router-dom'

export const ProductCard = ({url, name, price, id}) => {
  return (
    <div key={id} className='productCard' >
        <img className='productCard__img'  src={url} alt=''></img>
        <span className='productCard__name' > {name} </span>
        <span className='productCard__price' > {price} </span>
        <NavLink className="productCard__link" to='/login'> Ver producto </NavLink>
    </div>
  )
}
