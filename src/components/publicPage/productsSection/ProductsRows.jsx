import React, {useState, useEffect } from 'react';
import { productsJson } from '../../../resources/products';
import { ProductCard } from './ProductCard';
import { NavLink } from 'react-router-dom';

export const ProductsRows = ({ title, index, page }) => {
  const [sizeScreen, setSizeScreen] = useState(window.innerWidth);
  const [products, setProducts] = useState([]);
  const [amountProductsShow, setamountProductsShow] = useState(6);

  const getProducts = async () => {
    const rowProducts = /*await*/ productsJson[index].products;
    setProducts(rowProducts);
    return rowProducts;
  };

  //useEffect Products
  useEffect(() => {
    getProducts();
  }, []);
  //useEffect Screen
  useEffect(() => {
    const changeScreen = (e) => {
      setSizeScreen(e.target.innerWidth);
    };
    window.addEventListener('resize', changeScreen);
    return () => {
      window.removeEventListener('resize', changeScreen);
    };
  }, [])

  useEffect(() => {
  
    if(sizeScreen > 1280){
      setamountProductsShow(6);
    }else if(sizeScreen < 1280 && sizeScreen > 1070){
      setamountProductsShow(5);
    }else if(sizeScreen < 1070 && sizeScreen > 865){
      setamountProductsShow(4);
    }else if(sizeScreen < 865 && sizeScreen > 658){
      setamountProductsShow(3);
    }else if(sizeScreen < 658 ){
      setamountProductsShow(2);
    }


  },[sizeScreen]);
  

  useEffect(() => {

    switch (amountProductsShow) {
      case 6:
        getProducts();
        break;
      case 5:
      // getProducts();
        setProducts(products.slice(0, 5));
        break;
      case 4:
        // getProducts();
        setProducts(products.slice(0, 4));
        break;
      case 3:
        // getProducts();
        setProducts(products.slice(0, 3));
        break;
      case 2:
        // getProducts();
        setProducts(products.slice(0, 2));
        break;
      default:
        break;
    }

  },[amountProductsShow]);

  return (
    <div className="ProductsSection">
      <div className="ProductsSection__titles">
        <h2> {title} </h2>
        <NavLink className="ProductsSection__AddProductButton" to="/addProucts">
          <button> Agregar producto </button>
        </NavLink>
        {page !== "description" && (
          <div className="ProductsScetion__containerSeeAll">
            <NavLink className="ProductsSection__sesAll" to="/login">
              Ver Todo
            </NavLink>
            <NavLink to="/login">
              <i className="fa-solid fa-arrow-right"></i>
            </NavLink>
          </div>
        )}
      </div>
      <div className="RowProducts">
        {products.map(({ id, name, price, img }, index) => {
          return (
            <ProductCard
              key={index}
              url={img}
              name={name}
              price={price}
              id={id}
            />
          );
        })}
      </div>
    </div>
  );
};
