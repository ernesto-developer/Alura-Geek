import React from 'react'
import { Footer } from '../components/footer/Footer'
import { NavBar } from '../components/navBar/NavBar'
import { Banner } from '../components/publicPage/banner/Banner'
import { ProductsSection } from '../components/publicPage/productsSection/ProductsSection'
import { SkirtingBoard } from '../components/skirtingBoard/SkirtingBoard'

export const PublicPage = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <ProductsSection />
      <SkirtingBoard />
      <Footer />
    </div>
  )
}
