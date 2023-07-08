import { Proyect } from './Proyect/Proyect'
import './Proyects.css'

export function Proyects () {
  const screenWidth = window.innerWidth
  function moveRight () {
    const slider = document.querySelector('.slider')
    const screenWidth = window.innerWidth
    const scrollAmount = screenWidth > 750 ? 630 : 330
    slider.scrollLeft += scrollAmount
  }

  function moveLeft () {
    const slider = document.querySelector('.slider')
    const screenWidth = window.innerWidth
    const scrollAmount = screenWidth > 750 ? 630 : 330
    slider.scrollLeft -= scrollAmount
  }

  return (
    <section id='Proyects'>
      <h2 className='title-proyects'>Proyects</h2>
      <p id='text-proyects-sg'>Scroll right to see more projects.</p>
      <div className='container-proyects'>
        <div className={`control-div ${screenWidth <= 749 ? 'espacio' : ''}`} onClick={moveLeft}>
          <img className='control left' src='Arrow-left.svg' alt='' />
        </div>
        <div className='slider'>

          <Proyect
            className='item'
            img='fondo_home.jpg'
            title='Titulo'
            linkGithub='https://github.com/DarioJGL'
            linkPage='https://www.linkedin.com/in/dariojgl/'
          />
          <Proyect
            className='item'
            img='fondo_home.jpg'
            title='Titulo'
            linkGithub='https://github.com/DarioJGL'
            linkPage='https://www.linkedin.com/in/dariojgl/'
          />
          <Proyect
            className='item'
            img='fondo_home.jpg'
            title='Titulo'
            linkGithub='https://github.com/DarioJGL'
            linkPage='https://www.linkedin.com/in/dariojgl/'
          />
          <Proyect
            className='item'
            img='fondo_home.jpg'
            title='Titulo'
            linkGithub='https://github.com/DarioJGL'
            linkPage='https://www.linkedin.com/in/dariojgl/'
          />
          <Proyect
            className='item'
            img='fondo_home.jpg'
            title='Titulo'
            linkGithub='https://github.com/DarioJGL'
            linkPage='https://www.linkedin.com/in/dariojgl/'
          />
          <Proyect
            className='item'
            img='fondo_home.jpg'
            title='Titulo'
            linkGithub='https://github.com/DarioJGL'
            linkPage='https://www.linkedin.com/in/dariojgl/'
          />
        </div>
        <div className='control-div' onClick={moveRight}>
          <img className='control right' src='Arrow_right.svg' alt='' />
        </div>
      </div>
      <script src='./scroll.js' />
    </section>
  )
}
