import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { activeProduct, startDeletingProduct } from '../../../actions/products';
import { useDispatch, useSelector } from 'react-redux';

export const ProductCard = ({imageUrl, title, price, id, description, category}) => {

  const dispatch = useDispatch();
  const {actualUser} = useSelector(state => state.user);

  const handleClick = () => {
    dispatch(activeProduct(id, {title, price, imageUrl, description, category}));
  }

  const handleDelete = () => {
      dispatch( startDeletingProduct( id ) );
  }



  return (
    <div key={id} className='productCard'  >
        <div className='productCard__boxImg'>
          <img className='productCard__img'  src={imageUrl} alt=''></img>
          {(actualUser !== 'UserGuest') && (<div className='productCard__img__icons'>
            <i className="fa-solid fa-trash-can " onClick={handleDelete} ></i>
            <Link to='/addProucts' onClick={handleClick} ><i className="fa-solid fa-pen "></i></Link>
          </div>)}
        </div>
        <span className='productCard__name' > {title} </span>
        <span className='productCard__price' >$ {price} </span>
        <NavLink className="productCard__link" to='/description' onClick={handleClick} > Ver producto </NavLink>
    </div>
  )
}
