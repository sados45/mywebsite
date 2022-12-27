import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import AboutMe from './components/about/AboutMe'
import Services from './components/services/Services'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contacts from './components/contacts/Contacts'

function App() {
  
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contacts/>
    </>
  )
}

export default App