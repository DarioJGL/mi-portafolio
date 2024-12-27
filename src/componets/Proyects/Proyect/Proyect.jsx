import './Proyect.css'
import React, { useState } from 'react'

export function Proyect ({ img, title, linkGithub, linkPage }) {
  const [hovered, setHovered] = useState(false)

  const handleHover = () => {
    setHovered(true)
  }

  const handleMouseLeave = () => {
    setHovered(false)
  }
  return (
    <div className='proyect'>
      <h3>{title}</h3>
      <img
        className={`fondo-proyect ${hovered ? 'hovered' : ''}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave} src={img} alt=''
      />
      <div className='div-logos-proyect'>
        <a className='fondo-logo' href={linkGithub}><img className='img-logo' src='github-142-svgrepo-com.svg' alt='github-logo' /></a>

        <a className='fondo-logo' href={linkPage}><img className='img-logo' src='link-page.svg' alt='link-logo' /></a>
      </div>
    </div>
  )
}
