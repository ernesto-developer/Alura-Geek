import React from 'react'

export const ContactForm = () => {
  return (
    <form className='skirtingBoard__contactForm' >
      <span className='skirtingBoard__contactForm-title' >Hable con nosotros</span>
      <div  className='skirtingBoard__contactForm__conatinerName'>
        <label>Nombre</label>
        <input type="text" />
      </div>
      <textarea className='skirtingBoard__contactForm-textArea' placeholder='Escriba su mensaje' ></textarea>
      <button className='skirtingBoard__contactForm-button' > Enviar Mensaje </button>
    </form>
  )
}
