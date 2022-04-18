import React from 'react'

export const NoProducts = () => {
  
    const img = 'assets/no-products.svg'

    return (
    <div className='NoProducts' >

        <div className='NoProducts__container'>

            <img src={img} alt='no-products' ></img>
            <h1> No hay productos para mostrar </h1>

        </div>

    </div>
  )
}
