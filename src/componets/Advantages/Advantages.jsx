import { Advantage } from './Advantage/Advantage'
import './Advantages.css'

export function Advantages () {
  return (
    <section id='Advantages'>
      <h2 className='title-proyects'>Advantages</h2>
      <ul className='container-advantages'>

        <Advantage
          Img='img1-services.webp'
          Title='Brilliant Designs'
          Descripcion='Visualize your dreams with exquisite UI/UX designs made to captivate and engage.'
        />
        <Advantage
          Img='img2-services.webp'
          Title='Cutting-Edge Tech'
          Descripcion='Unleash the power of modern frameworks and robust backend systems for an unrivaled experience.'
        />
        <Advantage
          Img='img3-services.webp'
          Title='Collaborative Genius'
          Descripcion='Harness the wisdom of a diverse, dedicated team driven to break boundaries.'
        />
        <Advantage
          Img='img4-services.webp'
          Title='Mobil Mastery'
          Descripcion='Conquer the world of mobile applications with sleek designs and lightning-fast performance.'
        />
        <Advantage
          Img='img5-services.webp'
          Title='Innovative Solutions'
          Descripcion='Tackle unique challenges with astounding out-of-the-box ideas and extraordinary problem-solving skills.'
        />
        <Advantage
          Img='img6-services.webp'
          Title='Limitless Horizons'
          Descripcion='Soar above and beyond expectations as DevDarioJGL takes your projects to uncharted heights.'
        />
      </ul>

    </section>
  )
}
