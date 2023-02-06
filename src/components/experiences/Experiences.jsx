import React from 'react'
import './experiences.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import frontend from '../util/experience.frontend.json'
import backend from '../util/experience.backend.json'

const Experiences = () => {
    return (
        <section id='experience'>
            <h5>Habilidades que tengo</h5>
            <h2>Mi Experiencia</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        {
                            frontend.map(front => (
                                <article className='experience__details' key={front.name}>
                                    <BsPatchCheckFill className='experience__details-icon' />
                                    <div>
                                        <h4>{front.name}</h4>
                                        <small className='text-light'>{front.experience}</small>
                                    </div>
                                </article>
                            ))
                        }
                    </div>
                </div>

                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        {
                            backend.map(back => (
                                <article className='experience__details' key={back.name}>
                                    <BsPatchCheckFill className='experience__details-icon' />
                                    <div>
                                        <h4>{back.name}</h4>
                                        <small className='text-light'>{back.experience}</small>
                                    </div>
                                </article>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experiences