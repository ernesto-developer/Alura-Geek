import React from 'react';
import { productsJson } from '../../resources/products';

export const ProductDescription = () => {

  const {id, img, name, price, description} = productsJson[0].products[2];
  

  return (
    <div className='productDescription'  key={id} >
      <img src={img} alt='ImgDescription' ></img>
      <div className='productDescription__containerData' >
        <h2 > {name} </h2>
        <p> $ {price} </p>
        <h5 > {description} </h5>
        
      </div>
    </div>
  )
}
    