import { CardProfile } from './CardProfile/CardProfile'
import { CardProfileDescription } from './CardProfileDescription/CardProfileDescription'
import './AboutMe.css'

export function AboutMe () {
  const sectionStyle = {
    backgroundImage: `url('fondo_aboutme.jpg')`,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '86vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '@media screen and (min-width: 1500px)': {
    height: '88vh',
  },
  
  // Media query para pantalla con ancho máximo de 1000px
  '@media screen and (max-width: 1000px)': {
    flexDirection: 'column',
    height: '100%',
  },
    
  }
  
  return (
    <section id='about-me' style={sectionStyle}>
      
      <CardProfile />
      <CardProfileDescription />
     
    </section>
  )
}
