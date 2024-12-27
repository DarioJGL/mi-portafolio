import { Button } from '../../Button/Button.jsx'
import './CardProfile.css'

export function CardProfile () {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = 'Curriculum_DevJr.pdf'
    link.download = 'Curriculum Dario'
    link.click()
  }
  return (
    <div className='card-profile'>
      <div className='card-profile__info'>
        <h2 className='card-profile__title'>Dario Jose Gutierrez Lasso</h2>
        <p className='card-profile__profesion'>Frontend Developer</p>
      </div>
      <div className='div-logos'>
        <a className='fondo-logo' href='https://github.com/DarioJGL'><img className='img-logo' src='github-142-svgrepo-com.svg' alt='github-logo' /></a>

        <a className='fondo-logo' href='https://www.linkedin.com/in/dariojgl1102/'><img className='img-logo' src='linkedin-svgrepo-com.svg' alt='github-logo' /></a>
      </div>
      <div className='div-contact'>
        <div className='div-contact__card'>
          <div className='div-icon'>
            <img className='img-logo__contact' src='email.svg' alt='email' />
          </div>
          <div>
            <h4>Correo</h4>
            <p>dariojgl0211@gmail.com</p>
          </div>
        </div>
        <div className='line' />
        <div className='div-contact__card'>
          <div className='div-icon'>
            <img className='img-logo__contact' src='telephone.svg' alt='telefono' />
          </div>
          <div>
            <h4>Telefono</h4>
            <p>+57 302 8072004</p>
          </div>
        </div>
      </div>
      <div>
        <Button text='Download CV' onclick={handleDownload} />
      </div>

    </div>
  )
}
