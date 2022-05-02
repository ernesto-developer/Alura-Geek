import React, {useState} from 'react'
import { useForm } from '../../../hooks/useform'
import Swal from 'sweetalert2';

export const ContactForm = () => {

  const [formValues, handleInputChange, reset] = useForm({name: '', mesage: ''});
  const [errorMesage, setErrorMesage] = useState({
    nameError: false,
    mesageError: false
  });
  const { name, mesage } = formValues;


  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length <= 3 || name.length >= 40) {
      setErrorMesage({
        ...errorMesage,
        nameError: true,
      });
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El nombre debe tener entre 3 y 40 caracteres",
      });
    } else if (mesage.length <= 10 || mesage.length >= 120) {
      setErrorMesage({
        ...errorMesage,
        mesageError: true,
      });
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El mensaje debe tener entre 10 y 120 caracteres",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Mensaje enviado",
        text: "Gracias por contactarnos",
      });
      setErrorMesage({
        nameError: false,
        mesageError: false,
      });
      reset();
      document.getElementById('contactForm').reset();
    }
  };

 

  return (
    <form id='contactForm' className='skirtingBoard__contactForm' >
      <span className='skirtingBoard__contactForm-title' >Hable con nosotros</span>
      <div  className='skirtingBoard__contactForm__conatinerName'>
        <label>Nombre</label>
        <input name='name' onChange={handleInputChange} type="text"/>
      </div>
      <textarea name='mesage' onChange={handleInputChange} className='skirtingBoard__contactForm-textArea' placeholder='Escriba su mensaje' ></textarea>
      <button type='button' onClick={handleSubmit} className='skirtingBoard__contactForm-button' > Enviar Mensaje </button>
    </form>
  )
}
