import React from 'react'

export const NavSearchBox = () => {

  const imagen = 'assets/LogoAluraGeek.png'

  
  return (
    <div>
    <img src={imagen} alt={'logo'} />
      <input type="text" placeholder="Search..."/>
      
    </div>
  )
}
