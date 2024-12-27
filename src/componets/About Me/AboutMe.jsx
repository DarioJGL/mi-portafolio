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
    
  }
  
  return (
    <section id='about-me' style={sectionStyle}>
      
      <CardProfile />
      <CardProfileDescription />
     
    </section>
  )
}
