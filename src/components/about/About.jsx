import React from 'react'
import './about.css'
import ME from '../../assets/yostin-g.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Llegar a saber</h5>
            <h2>Sobre Mi</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="Gabriel" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experiencia</h5>
                            <small>2+ Años</small>
                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clientes</h5>
                            <small>En Proceso...</small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Proyectos</h5>
                            <small>5+ Completados</small>
                        </article>
                    </div>

                    <p>
                        Hola soy <span className='name-me'>Yostin Gutierrez</span>,
                        soy desarrollador Web Full-Stack.
                        Apacionado de la tecnologia con una increible capacidad del auto aprendizaje, esforzandome
                        para seguir creciendo a medida que desempeño mis labores en los proyectos.
                        Me especializo en <span className='especial'>reactJS y nodeJs - con express</span>, para un mejor desarrollo,
                        completamente responsive y que se ajuste a las necesidades del cliente..
                    </p>

                    <a href="#contact" className='btn btn-primary'>Hablemos</a>
                </div>
            </div>
        </section>
    )
}

export default About