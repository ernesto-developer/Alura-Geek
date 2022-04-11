import React from 'react'
import { AuthRouter } from './AuthRouter';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<AuthRouter />} />
      </Routes>
    </BrowserRouter>
  );
};
