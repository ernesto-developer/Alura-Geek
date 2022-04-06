import React from 'react'
import { ContactForm } from './components/ContactForm'
import { InfoLinks } from './components/InfoLinks'

export const SkirtingBoard = () => {
  const imagen = 'assets/LogoAluraGeek.png'
  return (
    <div className='skirtingBoard' >
        <img className='skirtingBoard__container-img' src={imagen} alt={"logo"} />
        <InfoLinks />
        <ContactForm />
    </div>
  )
}
