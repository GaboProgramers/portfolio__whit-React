import React from 'react'
import './portfolio.css'
import data from '../util/utils.js'

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>Mi trabajo reciente</h5>
            <h2>Portafolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article className='portfolio__item' key={id}>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="btn__container">
                                    <a href={github} className='btn' target='_blank'>Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio