import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import { activeProduct } from '../../../actions/products';


export const Banner = () => {
  const dispatch = useDispatch();
  const {auth, products} = useSelector(state => state);
  const {uid} = auth;
  const {items} = products;

  useEffect(() => {
    dispatch( activeProduct(null) );
  } , []);

  return (
    <div className='banner' >
        <h1>Febrero Promocional</h1>
        <h3> Productos seleccionados con 33% de descuento </h3>
        {(uid !== null && items.length === 0)
          ? <Link to='/addProucts' ><button> Agregar Productos </button></Link>
          : <button> Ver consolas </button>
        }

        
    </div>
  )
}
