import React, { useState } from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
    const [activeNav, setActiveNav] = useState('#')

    return (
        <footer>
            <a href="#" className='footer__logo'>GaboProgramer's</a>

            <ul className='permalinks'>
                <li><a href="#"></a></li>
                <li><a href="#about" className={activeNav === '#' ? 'active' : ''}>About</a></li>
                <li><a href="#experience" className={activeNav === '#' ? 'active' : ''}>Experience</a></li>
                <li><a href="#services" className={activeNav === '#' ? 'active' : ''}>Services</a></li>
                <li><a href="#portfolio" className={activeNav === '#' ? 'active' : ''}>Portfolio</a></li>
                <li><a href="#testimonials" className={activeNav === '#' ? 'active' : ''}>Testimonials</a></li>
                <li><a href="#contact" className={activeNav === '#' ? 'active' : ''}>Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="#" target="_blank"><FaFacebookF /></a>
                <a href="#" target="_blank"><FiInstagram /></a>
                <a href="#" target="_blank"><IoLogoTwitter /></a>
            </div>

            <div className="footer__copyright">
                <p><small>&copy;</small> <a href="#">GaboProgramer's.</a> All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer