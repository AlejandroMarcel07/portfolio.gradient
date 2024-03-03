import React from 'react'
import '../../ComponentePrincipal.css'

export function CompButton  ({IcoButton, margen}) {

  const buttonStyle = {
    margin: margen,
  };

  return (
    <button className='btnPersonalizado'  style={buttonStyle}>
        {IcoButton}
    </button>
  )
}
