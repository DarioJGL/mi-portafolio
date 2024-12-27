import { useState } from 'react'
import './ContactUs.css'
import { Form } from './form/Form'
import { Button } from '../Button/Button'

export function ContactMe () {
  const [formActive, setFormActive] = useState(true)
  const handleToggle = () => {
    setFormActive(!formActive)
  }
  const toggleForm = () => {
    handleToggle()
  }
  return (
    <section id='Contact-me'>
      <h2 className='title-proyects'>Contact Us</h2>
      <div className='container-contact-us'>

        {
        formActive

          ? <div className='container-info'>
            <p>Thank you for considering my development services and employment opportunities! I believe in collaboration and innovation. Let's connect for meaningful solutions that exceed expectations. Together, let's achieve growth and success!</p>
            <Button text='Contact Me' onclick={handleToggle} type='button' />
            </div>

          : <Form onCloseForm={toggleForm} />

        }

      </div>
    </section>
  )
}
