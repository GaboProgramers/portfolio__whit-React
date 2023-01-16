import React from 'react'
import './servises.css'
import { BsCheck } from 'react-icons/bs'

const Servises = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className='service'>
                    <div className="services__head">
                        <h3>UI/UX Desing</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>

                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>

                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>

                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>

                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>

                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>

                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                    </ul>
                </article>
                {/* end of UI/UX */}
                <article className='service'>
                    <div className="services__head">
                        <h3>Web Developers</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>

                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>

                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>

                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>

                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>

                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>

                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                    </ul>
                </article>
                {/* end of Web Development */}
                <article className='service'>
                    <div className="services__head">
                        <h3>Content Creation</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>

                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>

                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>

                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>

                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>

                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>

                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Servises