import React from 'react';
import {ProductsRows} from '../publicPage/productsSection/ProductsRows';
import {useSelector} from 'react-redux';
// import { ProductsRows } from 'productsSection/productsRows'
export const SimilarProducts = () => {

  const {active: {category}} = useSelector(state => state.products);

  return (
    <div>
    <ProductsRows
      title="Productos Similares"
      index={0}
      page='description'
      category={category}
    />
    </div>
  )
}
