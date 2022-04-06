import React from 'react'
import { LoginForm } from '../components/loginForm/LoginForm'
import { NavBar } from '../components/navBar/NavBar'
import { SkirtingBoard } from '../components/skirtingBoard/SkirtingBoard'

export const LoginPage = () => {
  return (
    <div>
      <NavBar />
      <LoginForm />
      <SkirtingBoard />
    </div>
  )
}
