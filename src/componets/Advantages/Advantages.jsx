import { Advantage } from './Advantage/Advantage'
import './Advantages.css'

export function Advantages () {
  return (
    <section id='Advantages'>
      <h2 className='title-proyects'>Advantages</h2>
      <ul className='container-advantages'>

        <Advantage
          Img='../../../public/Advantages/img1-services.webp'
          Title='Brilliant Designs'
          Descripcion='Visualize your dreams with exquisite UI/UX designs made to captivate and engage.'
        />
        <Advantage
          Img='../../../public/Advantages/img2-services.webp'
          Title='Brilliant Designs'
          Descripcion='Visualize your dreams with exquisite UI/UX designs made to captivate and engage.'
        />
        <Advantage
          Img='../../../public/Advantages/img3-services.webp'
          Title='Brilliant Designs'
          Descripcion='Visualize your dreams with exquisite UI/UX designs made to captivate and engage.'
        />
        <Advantage
          Img='../../../public/Advantages/img4-services.webp'
          Title='Brilliant Designs'
          Descripcion='Visualize your dreams with exquisite UI/UX designs made to captivate and engage.'
        />
        <Advantage
          Img='../../../public/Advantages/img5-services.webp'
          Title='Brilliant Designs'
          Descripcion='Visualize your dreams with exquisite UI/UX designs made to captivate and engage.'
        />
        <Advantage
          Img='../../../public/Advantages/img6-services.webp'
          Title='Brilliant Designs'
          Descripcion='Visualize your dreams with exquisite UI/UX designs made to captivate and engage.'
        />
      </ul>

    </section>
  )
}
