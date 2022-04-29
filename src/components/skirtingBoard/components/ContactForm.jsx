import React, {useState,useEffect} from 'react'
import { useForm } from '../../../hooks/useform'

export const ContactForm = () => {

  const [formValues, handleInputChange] = useForm({name: '', mesage: ''});
  const [errorMesage, setErrorMesage] = useState({
    nameError: false,
    mesageError: false
  });
  const { name, mesage } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();

    (name.length <= 3 || name.length >= 40) ? setErrorMesage({
      ...errorMesage,
      nameError: true
    }) : setErrorMesage({
      ...errorMesage,
      nameError: false
      });

    (mesage.length <= 10 || mesage.length >= 120 ) ? setErrorMesage({
      ...errorMesage,
      mesageError: true
    }) : setErrorMesage({
      ...errorMesage,
      mesageError: false
      });
  
      console.log(errorMesage);
  }

  //TODO:  TERMINAR EL FORMULARIO

  useEffect(() => {




  } , []);

  




  return (
    <form className='skirtingBoard__contactForm' >
      <span className='skirtingBoard__contactForm-title' >Hable con nosotros</span>
      <div  className='skirtingBoard__contactForm__conatinerName'>
        <label>Nombre</label>
        <input name='name' onChange={handleInputChange} type="text"/>
      </div>
      {(errorMesage.nameError) && 
      <span>
        {(name === '')? 'Nombre obligatorio' : 'El nombre debe tener al menos 3 caracteres y maximo 30'}
      </span>}
      <textarea name='mesage' onChange={handleInputChange} className='skirtingBoard__contactForm-textArea' placeholder='Escriba su mensaje' ></textarea>
      { (errorMesage.mesageError) && 
      <span>
        {(mesage === '')? 'Mensaje es obligatorio' : 'El mensaje debe tener al menos 10 caracteres y maximo 120'}
      </span>}
      <button type='button' onClick={handleSubmit} className='skirtingBoard__contactForm-button' > Enviar Mensaje </button>
    </form>
  )
}
