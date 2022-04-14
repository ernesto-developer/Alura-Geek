import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'

export const AddProductForm = () => {

  const [sizeScreen, setSizeScreen] = useState(window.innerWidth);

  useEffect(() => {
    const changeScreen = (e) => {
      setSizeScreen(e.target.innerWidth);
    };
    window.addEventListener("resize", changeScreen);
    return () => {
      window.removeEventListener("resize", changeScreen);
    };
  }, []);

  return (
    <form className="addProductForm">
      <div className="addProductForm-containerAll">
        <h1 className="addProductForm-title"> Agregar nuevo producto </h1>
        <div className="addProductForm__boxOptionsImage">
          <div className="addProductForm__boxOptionsImage__dragImages">
            {sizeScreen > 530 
              ? (<i className="fa-solid fa-image"></i>)
              : (<i className="fa-solid fa-plus"></i>
            )}
            <h5>
              {sizeScreen < 530
                ? "Agregar una imagen para el producto"
                : "Arrastre para agregar una imagen para el producto"}
            </h5>
          </div>
          {sizeScreen > 530 && <p id="letter-O"> O </p>}
          {sizeScreen > 530 && (<button className="addProductForm__boxOptionsImage-buttonSearchImg">Buscar imagen</button>)}
        </div>
        <div className="addProductForm-input">
          <p>Nombre del producto</p>
          <input type="text"></input>
        </div>
        <div className="addProductForm-input">
          <p>Precio del producto</p>
          <div>
            <label>$</label>
            <input type="number"></input>
          </div>
        </div>
        <div className="addProductForm-textArea">
          <p> Descripcion del producto </p>
          <textarea></textarea>
        </div>
        <NavLink className=" addProductForm-buttonAddProduct " to="/">
          <button> Agregar producto </button>
        </NavLink>
      </div>
    </form>
  );
};
