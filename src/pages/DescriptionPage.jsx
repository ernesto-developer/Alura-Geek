import React from 'react'
import { ProductDescription } from '../components/productDescription/ProductDescription'
import { SimilarProducts} from '../components/productDescription/SimilarProducts'
import { Footer } from '../components/footer/Footer'
import { NavBar } from '../components/navBar/NavBar'
import { SkirtingBoard } from '../components/skirtingBoard/SkirtingBoard'

export const DescriptionPage = () => {
  return (
    <div>
      <NavBar />
      <ProductDescription />
      <SimilarProducts /> 
      <SkirtingBoard />
      <Footer />
    </div>
  )
}
