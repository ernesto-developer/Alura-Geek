import React from 'react';
// import { productsJson } from '../../resources/products';
import {useSelector} from 'react-redux';

export const ProductDescription = () => {

  const {active} = useSelector(state => state.products);
  const { id, title, price, imageUrl, description } = active;

  

  return (
    <div className='productDescription'  key={id} >
      <img src={imageUrl} alt='ImgDescription' ></img>
      <div className='productDescription__containerData' >
        <h2 > {title} </h2>
        <p> $ {price} </p>
        <h5 > {description} </h5>
        
      </div>
    </div>
  )
}
    