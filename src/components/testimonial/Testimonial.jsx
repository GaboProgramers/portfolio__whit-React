import React from 'react'
import './testimonial.css'
import testimonials from '../util/testimonials';


import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonial = () => {

    return (
        <section id='testimonials'>
            <h5>Calificacion de colegas</h5>
            <h2>Testimonios</h2>

            <Swiper className="container testimonial__container"
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    testimonials.map(({ avatar, name, review, linkeding }, index) => {
                        return (
                            <SwiperSlide className="testimonial" key={index}>
                                <div className="client__avatar">
                                    <img src={avatar} alt={name} />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <a href={linkeding} className='client__link' target="_blank">Linkeding</a>
                                <small className='client__review'>
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonial