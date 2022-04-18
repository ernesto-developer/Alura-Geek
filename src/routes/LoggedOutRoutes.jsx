import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { PublicPage } from '../pages/PublicPage';
import { RegisterPage } from '../pages/RegisterPage';

export const LoggedOutRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={ <PublicPage /> }/>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
        </Routes>

    </div>
  )
}
