import React from 'react'

export const Footer = () => {
  
  const date = new Date();
  const curretYear = date.getFullYear();

  return (
    <footer className='footer' >
      <span  >Desarrollado por Ernesto Ruiz</span>
      <span  >{curretYear}</span>
    </footer>
  )
}
