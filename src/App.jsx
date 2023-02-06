import './App.css'
// Components
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experiences from './components/experiences/Experiences'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/navBar/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Servises from './components/servises/Servises'
import Testimonial from './components/testimonial/Testimonial'

// React Icons
import { BsSunFill } from 'react-icons/bs'
import { BsMoonStarsFill } from 'react-icons/bs'

// States
import { useState } from 'react'



function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`App ${darkMode ? 'dark-theme' : ''}`}>
      <div className="dark__mode" onClick={() => setDarkMode(!darkMode)}>
        <div className='icon sun-icon'>
          {
            darkMode ? <BsSunFill /> : <BsMoonStarsFill style={{ color: "var(--color-hover-btn)" }} />
          }
        </div>
        {/* <div className='icon moon-icon' onClick={() => setDarkMode(true)}>
          
        </div> */}
      </div>
      <Header />
      <Nav />
      <About />
      <Experiences />
      {/* <Servises /> */}
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
