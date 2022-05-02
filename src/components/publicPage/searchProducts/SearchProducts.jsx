import React, {useEffect,useState} from 'react'
import { getItemsByTitle } from '../../../helpers/getItemsByTitle';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { ProductCard } from '../productsSection/ProductCard';

export const SearchProducts = () => {
    const {items} = useSelector(state => state.products);
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    const [productsFinded, setProductsFinded] = useState([]);

    const getProductsFinded = () => {
            setProductsFinded(getItemsByTitle(items, q));
    }

    useEffect(() => {
        getProductsFinded();
      } , [q]);
  
  return (
    <div className='seeAllProds' >
      <h1  > Resultados de la busqueda de:</h1>
      <h3> { q } </h3>
      <div>
      <div className='seeAllProds__sectionCards' >
        {productsFinded.map(({ id, title, price, imageUrl, description, category }, index) => {
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
