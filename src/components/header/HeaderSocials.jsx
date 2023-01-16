import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { FaShoppingBag } from 'react-icons/fa'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/gabriel-gutierrez-63b1321b6/" target='_blank'><BsLinkedin /></a>
            <a href="https://github.com/GaboProgramers" target='_blank'><BsGithub /></a>
            <a href="https://e-commerce-react-frontend.netlify.app" target='_blank'><FaShoppingBag /></a>
        </div>
    )
}

export default HeaderSocials