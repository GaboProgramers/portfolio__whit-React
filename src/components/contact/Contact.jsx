import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className='contact__option'>
                        <MdOutlineEmail />
                        <h4>Email</h4>
                        <h5>gyostin604@gmail.com</h5>
                        <a href="mailto:gyostin604@gmail.com">Send a Message</a>
                    </article>
                    <article className='contact__option'>
                        <RiMessengerLine />
                        <h4>Messenger</h4>
                        <h5>Yostin Gutierrez</h5>
                        <a href="#">Send a Message</a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp />
                        <h4>Whatsapp</h4>
                        <h5>+57 3117383596</h5>
                        <a href="https://wa.link/1e6009">Send a Message</a>
                    </article>
                </div>
                {/* End of contact options */}
                <form action=""></form>
            </div>
        </section>
    )
}

export default Contact