import React, {useState} from 'react';
import { productsJson } from '../../../resources/products';
import { ProductCard } from './ProductCard';
import { NavLink } from 'react-router-dom';




export const ProductsRows = ({ title, index, page }) => {
    const row = productsJson[index].products;
   //#####################################################
    let screenSize = window.innerWidth;

//     const [products, setProducts] = useState(row);
    
//     // console.log(products.slice(0, 3));
//     window.addEventListener('resize', changeScreen);
    
//     function changeScreen(e){
//         screenSize = e.target.innerWidth;
//        if(screenSize < 1420){
//            setProducts(row.slice(0, 5));
//     //    }else if(screenSize < 1350){
//     //           setProducts(row.slice(0, 4));
//     //    }
//         console.log( "hola " + products);
//   }
//     }
//   console.log(screenSize);
//#####################################################
  return (
    <div className="ProductsSection">
      <div className="ProductsSection__titles">
        <h2> {title} </h2>
        <NavLink className='ProductsSection__AddProductButton' to='/addProucts' > <button> Agregar producto </button> </NavLink>
        {(page !== 'description') && 
        <div className='ProductsScetion__containerSeeAll' >
        <NavLink className="ProductsSection__sesAll" to="/login"> Ver Todo </NavLink>
        <NavLink to="/login" > <i className="fa-solid fa-arrow-right"></i> </NavLink>
        </div>
         }
      </div>
      <div className="RowProducts">
       
        {/* {products.map((product, index) => {

            return  <ProductCard 
               key={index}
               url={product.img}
               name={product.name}
               price={product.price}
               id={product.id}
            />

        }
        )} */}
       
        {row.map((product, index) => {
          if ( screenSize < 1320 ) {
            if(index < 4){
                return (
              <ProductCard
                key={index}
                url={product.img}
                name={product.name}
                price={product.price}
                id={index}
             
              />
            );
            }else{ return <div key={index} ></div>;}
          } else {
             return (
              <ProductCard
                key={index}
                url={product.img}
                name={product.name}
                price={product.price}
                id={index}
              />
            );
          }
        })}
      </div>
    </div>
  );
    }
