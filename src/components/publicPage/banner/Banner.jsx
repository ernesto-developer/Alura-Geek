import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
// import { changeUserName } from '../../../actions/auth';
import { activeProduct } from '../../../actions/products';
import {changeEmailUser} from '../../../actions/user';


export const Banner = () => {
  const dispatch = useDispatch();
  const {auth, products} = useSelector(state => state);
  const {uid} = auth;
  const {items} = products;

  useEffect(() => {
    dispatch( activeProduct(null) );
  } , []);

  const changeUserEmail = () => {

    dispatch(changeEmailUser('test de email'));
  }

  return (
    <div className='banner' >
        <h1>Febrero Promocional</h1>
        <h3> Productos seleccionados con 33% de descuento </h3>
        {(uid !== null && items.length === 0)
          ? <Link to='/addProucts' ><button> Agregar Productos </button></Link>
          : <button onClick={changeUserEmail} > Ver consolas </button>
        }

        
    </div>
  )
}
