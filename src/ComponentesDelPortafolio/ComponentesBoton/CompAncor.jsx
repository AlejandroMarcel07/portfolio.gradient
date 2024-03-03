import React from 'react'
import '../../ComponentePrincipal.css'

export function CompAncor  ({urlLink, arcorIco}) {
  return (
    <a className='btnArcor' href={urlLink}>
      {arcorIco}
    </a>
  )
}
