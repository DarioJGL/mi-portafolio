import './header.css'
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'

export function Header () {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header>
      <div className='div-img'><img src='DevDarioJGL-logo.svg' alt='Logo' /></div>
      <div className='div-list'>
        <nav className='list-nav'>
          <ul className='botones'>
            <li><a className='link' href='#'>Home</a></li>
            <li><a className='link' href='#Proyects'>Proyects</a></li>
            <li><a className='link' href='#Advantages'>Advantages</a></li>
            <li><a className='link' href='#Contact-me'>Contact Me</a></li>
          </ul>
        </nav>
        <nav className='icon-nav'>
          <div className={`navbar-toggle ${isOpen ? 'superponer' : ''}`} onClick={handleToggle}>
            {isOpen ? <FaTimes /> : <GiHamburgerMenu />}
          </div>
          {isOpen &&
            <div className='overlay'>
              <ul className='navbar-menu'>
                <li><a className='link-phone' onClick={handleToggle} href='#'>Home</a></li>
                <li><a className='link-phone' onClick={handleToggle} href='#Proyects'>Proyects</a></li>
                <li><a className='link-phone' onClick={handleToggle} href='#Advantages'>Advantages</a></li>
                <li><a className='link-phone' onClick={handleToggle} href='#Contact-me'>Contact Me</a></li>
              </ul>
            </div>}

        </nav>
      </div>

    </header>
  )
}
