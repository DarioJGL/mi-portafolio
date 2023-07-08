import './App.css'
import { AboutMe } from './componets/About Me/AboutMe'
import { Advantages } from './componets/Advantages/Advantages'
import { ContactMe } from './componets/ContactUs/ContactUs'
import { Footer } from './componets/Footer/Footer'
import { Header } from './componets/Header/Header'
import { Proyects } from './componets/Proyects/Proyects'

function App () {
  return (
    <>
      <Header />
      <main>
        <AboutMe />
        <Proyects />
        <Advantages />
        <ContactMe />
      </main>
      <Footer />

    </>
  )
}

export default App
