import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { useForm } from '../../hooks/useform';
import { activeProduct, starNewProduct, startUpdateProduct, startUploading } from '../../actions/products';

export const AddProductForm = () => {

  const [sizeScreen, setSizeScreen] = useState(window.innerWidth);
  const {active} = useSelector(state => state.products);
  const dispatch = useDispatch();

  const [values, handleInputChange, handleNewData] = useForm((active !== null) ? active : {
    title: '',
    price: '',
    description: '',
    imageUrl: '',
    id: '',
    category: '',
  });

  const {title, price, description, imageUrl, category} = values;
 
  console.log(active);
  // console.log(values);

  useEffect(() => {
    const changeScreen = (e) => {
      setSizeScreen(e.target.innerWidth);
    };
    window.addEventListener("resize", changeScreen);
    return () => {
      window.removeEventListener("resize", changeScreen);
    };
  }, []);

  const handleAddProduct = () => {
    dispatch( starNewProduct( {title, description, imageUrl, price, category} ) );
}

  useEffect(() => {
    dispatch(activeProduct(values.id, values));
  } , [values, dispatch]);

  const handleEditProduct = () => {
    dispatch( startUpdateProduct(values));
  }

  const handlePictureClick = (e) => {
    e.preventDefault();
    document.getElementById("fileSelector").click();
  }
  const handleFileChange = (e) => {
    // console.log(e.target.files);
    const file = e.target.files[0];
      if( file ){
        dispatch( startUploading( file) );
      }
  }

  useEffect(() => {
    handleNewData(
     active.imageUrl,
     console.log('pase por imgurl')
    )
  } , [active.imageUrl]);


  return (
    <form className="addProductForm">
      <div className="addProductForm-containerAll">
        <h1 className="addProductForm-title"> Agregar nuevo producto </h1>
        <div className="addProductForm__boxOptionsImage">
          <div className="addProductForm__boxOptionsImage__dragImages">
            <input 
            id='fileSelector'
            type='file' 
            style={{display: 'none'}}
            onChange={handleFileChange}
            />
           {(  values.imageUrl !== undefined) ? 
            <img className='' src={imageUrl} alt='img' ></img>
            : <div>
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
           }
          </div>
          {sizeScreen > 530 && <p id="letter-O"> O </p>}
          {sizeScreen > 530 && (<button onClick={handlePictureClick} className="addProductForm__boxOptionsImage-buttonSearchImg">Buscar imagen</button>)}
        </div>
        <div className="addProductForm-input">
          <p>Categoria</p>
          <input 
            type="text"
            name='category'
            onChange={handleInputChange}
            value={category}
            ></input>
        </div>
        <div className="addProductForm-input">
          <p>Nombre del producto</p>
          <input 
            type="text"
            name='title'
            onChange={handleInputChange}
            value={title}
            ></input>
        </div>
        <div className="addProductForm-input">
          <p>Precio del producto</p>
          <div>
            <label>$</label>
            <input 
            type="number"
            name='price'
            onChange={handleInputChange}
            value={price}
            ></input>
          </div>
        </div>
        <div className="addProductForm-textArea">
          <p> Descripcion del producto </p>
          <textarea 
            onChange={handleInputChange}
            name='description'
            value={description}
          ></textarea>
        </div>
        {(values.id !== null) 
          ? <NavLink className=" addProductForm-buttonAddProduct " to="/">
            <button onClick={handleEditProduct} > Editar producto </button>
            </NavLink>

          : <NavLink className=" addProductForm-buttonAddProduct " to="/">
            <button onClick={handleAddProduct} > Agregar producto </button>
            </NavLink>
        }
      </div>
    </form>
  );
};
