import React, {useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'; 
import { getItemsByCategory } from '../helpers/getItemsByCategory';
import { ProductCard } from '../components/publicPage/productsSection/ProductCard';

export const SeeAllProductsByCategory = () => {

  const params = useLocation();
  const category = params.state;
  const [products, setProducts] = useState([]);
  const {items} = useSelector(state => state.products);
  const itemsSelectedByCategory =  getItemsByCategory(items, category);
  console.log(itemsSelectedByCategory);

  const getProducts = () => {
    setProducts(itemsSelectedByCategory);
  }

  useEffect(() => {
    getProducts();
  },[items]);

  return (
    <div className='seeAllProds' >
      <h1 className='seeAllProds__title' > {category} </h1>
      <div>
      <div className='seeAllProds__sectionCards' >
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

    </div>
  )
}
