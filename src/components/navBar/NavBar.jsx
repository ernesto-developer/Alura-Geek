import React from 'react'
import { NavButton } from './components/NavButton'
import { NavSearchBox } from './components/NavSearchBox'

export const NavBar = () => {
  return (
    <div>
        <nav>
            <NavSearchBox/>
            <NavButton/>
        </nav>
    </div>
  )
}
