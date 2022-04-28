import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { AddProductPage } from '../pages/AddProductPage';
import { DescriptionPage } from '../pages/DescriptionPage';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { PublicPage } from '../pages/PublicPage';
import { RegisterPage } from '../pages/RegisterPage';

export const AuthRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='products' element={ <ProductsPage /> } />
            <Route path='description' element={ <DescriptionPage /> } />
            <Route path='addProucts' element={ <AddProductPage /> } />
            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<RegisterPage />} />
            <Route path='/' element={ <PublicPage /> }/>
        </Routes>

    </div>
  )
}
