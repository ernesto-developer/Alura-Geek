import React from 'react'
import { NavBar } from '../components/navBar/NavBar'
import { AddProductForm } from '../components/addProducts/AddProductForm'
import { SkirtingBoard } from '../components/skirtingBoard/SkirtingBoard'
import { Footer } from '../components/footer/Footer'

export const AddProductPage = () => {
  return (
    <div>
      <NavBar />
      <AddProductForm />
      <SkirtingBoard />
      <Footer />
    </div>
  )
}
