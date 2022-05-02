import React from 'react'
import { Banner } from '../components/publicPage/banner/Banner'
import { NoProducts } from '../components/publicPage/productsSection/NoProducts'
import { ProductsSection } from '../components/publicPage/productsSection/ProductsSection'
import {useSelector} from 'react-redux';
import { SearchProducts } from '../components/publicPage/searchProducts/SearchProducts';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

export const PublicPage = () => {

  const {items} = useSelector(state => state.products);
  const location = useLocation();
  const { q = ''} = queryString.parse(location.search);
  console.log(`esto es el q: ${q}`);

  return (
    <div>
      <Banner />
      {(items.length === 0) 
      ? 
      <NoProducts /> 
      : 
      <>
       {(q !== '') && <SearchProducts/>}
      <ProductsSection />
      </>

      }
    </div>
  )
}
