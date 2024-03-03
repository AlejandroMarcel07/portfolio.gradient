import React from 'react'
import '../../ComponentePrincipal.css'

export function CompAncor01 ( {ulrlink, icoAncor, fondo}) {

    const buttonStyle = {
        background: fondo,
      };

  return (
    <a className='Ancor02' href={ulrlink} style={buttonStyle}>
        {icoAncor}
    </a>
  )
}
