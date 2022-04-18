import React, {useState, useEffect } from 'react';
import { ProductCard } from './ProductCard';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getItemsByCategory } from '../../../helpers/getItemsByCategory';
import { activeProduct } from '../../../actions/products';

export const ProductsRows = ({ category, productsByCategory }) => {
  const [sizeScreen, setSizeScreen] = useState(window.innerWidth);
  const [products, setProducts] = useState([]);
  const [amountProductsShow, setamountProductsShow] = useState(6);
  const {name} = useSelector(state => state.auth);
  const {items} = useSelector(state => state.products);

  const itemsSelectedByCategory =  getItemsByCategory(items, category);
  // console.log(itemsSelectedByCategory);

  const getProducts = () => {

    setProducts(itemsSelectedByCategory);
  }
  
  useEffect(() => {
    getProducts();
    console.log('uploading products');
  } , [items]);
  const dispatch = useDispatch();


  const handleAddProduct = () => {

    dispatch(activeProduct(null));
  }

  //useEffect Products
  useEffect(() => {
    // getProducts();
  }, []);
  //useEffect Screen
  useEffect(() => {
    const changeScreen = (e) => {
      // console.log(e.target.innerWidth);
      // console.log(items);
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
      if(sizeScreen === 865){
        getProducts();
      }
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
        getProducts();
        setProducts(products.slice(0, 5));
        // slicerOfProducts(5);
        break;
        case 4:
        getProducts();
        setProducts(products.slice(0, 4));
        // slicerOfProducts(4);
        break;
        case 3:
        getProducts();
        setProducts(products.slice(0, 3));
        // slicerOfProducts(3);
        break;
      case 2:
        // getProducts();
        setProducts(products.slice(0, 2));
        // slicerOfProducts(2);
        break;
      default:
        break;
    }

  },[amountProductsShow]);

  return (
    <div className="ProductsSection">
      <div className="ProductsSection__titles">
        <h2> {category} </h2>
        {(name) 
        ?<NavLink className="ProductsSection__AddProductButton" to="/addProucts">
          <button onClick={handleAddProduct} > Agregar producto </button>
        </NavLink>
        :
          <div className="ProductsScetion__containerSeeAll">
            <NavLink className="ProductsSection__sesAll" to="/login">
              Ver Todo
            </NavLink>
            <NavLink to="/login">
              <i className="fa-solid fa-arrow-right"></i>
            </NavLink>
          </div>
        }
        
      </div>
      <div className="RowProducts">
        {products.map(({ id, title, price, imageUrl, description, category }, index) => {
          return (
            <ProductCard
              key={index}
              imageUrl={imageUrl}
              title={title}
              price={price}
              id={id}
              description={description}
              category={category}
            />
          );
        })}
      </div>
    </div>
  );
};
