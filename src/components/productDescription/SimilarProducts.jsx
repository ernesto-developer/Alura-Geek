import React from 'react';
import {ProductsRows} from '../publicPage/productsSection/ProductsRows';
// import { ProductsRows } from 'productsSection/productsRows'
export const SimilarProducts = () => {
  return (
    <div>
    <ProductsRows
      title="Productos Similares"
      index={0}
      page='description'
    />
    </div>
  )
}
