import React from 'react'
import { Footer } from '../components/footer/Footer'
import { LoginForm } from '../components/loginForm/LoginForm'
import { NavBar } from '../components/navBar/NavBar'
import { SkirtingBoard } from '../components/skirtingBoard/SkirtingBoard'

export const LoginPage = () => {
  return (
    <div>
      <NavBar />
      <LoginForm />
      <SkirtingBoard />
      <Footer/>
    </div>
  )
}
