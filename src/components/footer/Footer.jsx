import React, { useState } from 'react'
import './footer.css'
import { FiLinkedin, FiYoutube, FiGithub } from 'react-icons/fi'

const Footer = () => {
    const [activeNav, setActiveNav] = useState('#')

    // año actual - update

    const fecha = new Date()
    const year = fecha.getFullYear()

    return (
        <footer>
            <a href="#" className='footer__logo'>GaboProgramer's</a>

            <ul className='permalinks'>
                <li><a href="#"></a></li>
                <li><a href="#about" className={activeNav === '#' ? 'active' : ''}>Sobre Mi</a></li>
                <li><a href="#experience" className={activeNav === '#' ? 'active' : ''}>Experiencia</a></li>
                <li><a href="#portfolio" className={activeNav === '#' ? 'active' : ''}>Portafolio</a></li>
                <li><a href="#testimonials" className={activeNav === '#' ? 'active' : ''}>Testimonios</a></li>
                <li><a href="#contact" className={activeNav === '#' ? 'active' : ''}>Contacto</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/gabriel-gutierrez-jrfrontend/" target="_blank"><FiLinkedin /></a>
                <a href="https://www.youtube.com/channel/UCjKeGXNcXmad9ufJaoBE-XQ" target="_blank"><FiYoutube /></a>
                <a href="https://github.com/GaboProgramers" target="_blank"><FiGithub /></a>
            </div>

            <div className="footer__copyright">
                <p><small>&copy;</small> <a href="#">GaboProgramer's.</a> All rights reserved <span>{year}</span></p>
            </div>
        </footer>
    )
}

export default Footer