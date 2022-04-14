import React from 'react'
import { ProductsRows } from './ProductsRows';
import { productsJson } from '../../../resources/products';


export const ProductsSection = () => {
  return (
    <div className='productsPage' >
    
       {productsJson.map((row, index) => {
           return  <ProductsRows 
              key={index}
              title={row.title}
              index={index}
           />
       })}
   
    </div>
  )
}
