import React from 'react';
import { productsJson } from '../../../resources/products';
import { ProductCard } from './ProductCard';



export const ProductsRows = () => {
  

const products = []; 
productsJson.map(product => {
  return  products.push(product.products);
});
// console.log(products);

  return (
    <div >
      {productsJson.map((row, index) => {
        return (
          <div  key={index} >
          <h2> {row.title} </h2>

           <div className='RowProducts'>
           {products.map((product, i) => {
               console.log(product)
              return (
                <ProductCard
                  key={i}
                  name={product[i].name}
                  price={product[i].price}
                  url={product[i].img}
                />
              );
            })}
           </div>
          </div>
        );
      })}
    </div>
  );
};
