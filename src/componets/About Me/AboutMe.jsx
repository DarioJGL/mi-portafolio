import { CardProfile } from './CardProfile/CardProfile'
import { CardProfileDescription } from './CardProfileDescription/CardProfileDescription'
import './AboutMe.css'

export function AboutMe () {
  return (
    <section id='about-me'>
      <CardProfile />
      <CardProfileDescription />
    </section>
  )
}
