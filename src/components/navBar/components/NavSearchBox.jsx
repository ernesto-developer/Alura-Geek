import React from 'react'

export const NavSearchBox = () => {

  const imagen = 'assets/LogoAluraGeek.png'

  
  return (
    <div className='navBar__container'>
      <img className='navBar__container-img' src={imagen} alt={"logo"} />
      <div className="navBar__container__boxSearch">
        <input className='navBar__container__boxSearch-inputText' type="text" placeholder="¿Qué deseas buscar?" />
        <i className="fa-solid fa-magnifying-glass navBar__container__boxSearch-icon"></i>
      </div>
    </div>
  );
}
