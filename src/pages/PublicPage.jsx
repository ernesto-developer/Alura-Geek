import React from 'react'
import { Footer } from '../components/footer/Footer'
import { NavBar } from '../components/navBar/NavBar'
import { Banner } from '../components/publicPage/banner/Banner'
import { NoProducts } from '../components/publicPage/productsSection/NoProducts'
import { ProductsSection } from '../components/publicPage/productsSection/ProductsSection'
import { SkirtingBoard } from '../components/skirtingBoard/SkirtingBoard'
import {useSelector} from 'react-redux';

export const PublicPage = () => {

  const {items} = useSelector(state => state.products);

  return (
    <div>
      <NavBar />
      <Banner />
      {(items.length === 0) 
      ? 
      <NoProducts /> 
      : 
      <ProductsSection />

      }
      <SkirtingBoard />
      <Footer />
    </div>
  )
}
