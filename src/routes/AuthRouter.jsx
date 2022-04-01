import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { DescriptionPage } from '../pages/DescriptionPage';
import { ProductsPage } from '../pages/ProductsPage';

export const AuthRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='products' element={ <ProductsPage /> } />
            <Route path='description' element={ <DescriptionPage /> } />
            <Route path='/' element={ <ProductsPage /> }/>
        </Routes>

    </div>
  )
}
