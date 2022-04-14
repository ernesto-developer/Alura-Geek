import React from 'react'
import { Footer } from '../components/footer/Footer'
import { NavBar } from '../components/navBar/NavBar'
import { SkirtingBoard } from '../components/skirtingBoard/SkirtingBoard'
import { RegisterForm } from '../components/register/RegisterForm'

export const RegisterPage = () => {
  return (
    <div>
        <NavBar />
        <RegisterForm />
        <SkirtingBoard />
        <Footer/>
    </div>
  )
}
