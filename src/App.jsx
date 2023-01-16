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

function App() {

  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experiences />
      <Servises />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
