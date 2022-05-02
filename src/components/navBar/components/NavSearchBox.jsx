import React from 'react';
import queryString from 'query-string';
import {Link} from 'react-router-dom';
import { useForm } from '../../../hooks/useform';
import { useNavigate, useLocation } from 'react-router-dom';

export const NavSearchBox = () => {

  const imagen = 'assets/LogoAluraGeek.png';
  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const [formValues, handleInputChange] = useForm( {search: q});
  // console.log(location);
  // console.log(location.search);
  // console.log(q);

  const goHome = () => {
    document.getElementById('LinkToHome').click();
  }

  const handleSearch = (e) => {
    e.preventDefault();
    // console.log('search: ', formValues);
    navigate(`?q=${formValues.search}`);
  }


  
  return (
    <div className='navBar__container'>
      <Link id='LinkToHome' to='/'/>
      <img  onClick={goHome} className='navBar__container-img' src={imagen} alt={"logo"} />
      <div className="navBar__container__boxSearch">
        <input 
          className='navBar__container__boxSearch-inputText' 
          type="text" 
          placeholder="¿Qué deseas buscar?" 
          name="search"
          value={formValues.search}
          onChange={handleInputChange}
        />
        <i 
          className="fa-solid fa-magnifying-glass navBar__container__boxSearch-icon"  
          onClick={handleSearch}
        ></i>
      </div>
    </div>
  );
}
