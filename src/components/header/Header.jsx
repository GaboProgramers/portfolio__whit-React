import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/yostin-g.png'
import HeaderSocials from './HeaderSocials'

import { useTranslation } from 'react-i18next'

const Header = () => {
    const [t, i18n] = useTranslation("global")

    return (
        <header>
            <div className="container header__container">
                {/* <div>
                    <h2>{
                        t("header.hello-world")
                    }
                    </h2>
                    <br /> <br />
                    <button onClick={() => i18n.changeLanguage("es")}>ES</button>
                    <button onClick={() => i18n.changeLanguage("en")}>EN</button>
                </div> */}
                <h5>Hello I'm</h5>
                <h1>Yostin Gutierrez</h1>
                <h5 className='text-light'>Jr. FullStack Developer</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt="Gabriel" className='me-img' />
                </div>

                <a href="#contact" className='scoll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header