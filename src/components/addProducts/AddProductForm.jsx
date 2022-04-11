import React from 'react'
import {NavLink} from 'react-router-dom'

export const AddProductForm = () => {
  return (
    <form className='addProductForm' >
     <div  className='addProductForm-containerAll' > 
     <h1 className='addProductForm-title' > Agregar nuevo producto </h1>
      <div className='addProductForm__boxOptionsImage' >
        <div className='addProductForm__boxOptionsImage__dragImages' >
          <i className="fa-solid fa-image"></i>
          <h5> Arrastre para agregar una imagen para el producto </h5>
        </div>
        <p> O </p>
        <button className='addProductForm__boxOptionsImage-buttonSearchImg' > Busque en su computadora </button>
      </div>
      <div className='addProductForm-input' >
          <p>Nombre del producto</p>
          <input type="text" ></input>
      </div>
      <div className='addProductForm-input' >
          <p>Precio del producto</p>
          <input type="number" ></input>
      </div>
      <div className= 'addProductForm-textArea' >
          <p> Descripcion del producto </p>
          <textarea></textarea>
      </div>   
      <NavLink className=' addProductForm-buttonAddProduct ' to="/" > <button> Agregar producto </button> </NavLink>
     </div>
    </form>
  );
}
