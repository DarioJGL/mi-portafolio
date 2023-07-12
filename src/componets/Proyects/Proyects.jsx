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
            img='newton-en-accion.png'
            title='Newton En Accion'
            linkGithub='https://github.com/DarioJGL/NewtonEnAccion'
            linkPage='https://dariojgl.github.io/NewtonEnAccion/'
          />
          <Proyect
            className='item'
            img='sudoku.png'
            title='Sudoku'
            linkGithub='https://github.com/DarioJGL/Sudoku'
            linkPage='https://dariojgl.github.io/Sudoku/'
          />
          <Proyect
            className='item'
            img='react-shop.png'
            title='Titulo'
            linkGithub='https://github.com/DarioJGL/react-shop'
            linkPage='https://dariojgl.github.io/react-shop/'
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
