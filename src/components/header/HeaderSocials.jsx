import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { FiYoutube } from 'react-icons/fi'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/gabriel-gutierrez-63b1321b6/" target='_blank'><BsLinkedin /></a>
            <a href="https://www.youtube.com/channel/UCjKeGXNcXmad9ufJaoBE-XQ" target='_blank'><FiYoutube /></a>
            <a href="https://github.com/GaboProgramers" target='_blank'><BsGithub /></a>
        </div>
    )
}

export default HeaderSocials