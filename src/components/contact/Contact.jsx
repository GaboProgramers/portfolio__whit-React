import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {

    const form = useRef()
    // const [first, setfirst] = useState(second)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rpbe80a', 'template_k1ndqal', form.current, 'DavISCrI_r8uajR-g')
            .then((result) => {
                console.log(result);
            }, (error) => {
                console.log(error);
            });
        e.target.reset()

    };

    return (
        <section id='contact'>
            <h5>Ponerse en contacto</h5>
            <h2>Contáctame</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>gyostin604@gmail.com</h5>
                        <a href="mailto:gyostin604@gmail.com" target="_blank">Send a Message</a>
                    </article>
                    <article className='contact__option'>
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>Yostin Gutierrez</h5>
                        <a href="#" target="_blank">Send a Message</a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>+57 3117383596</h5>
                        <a href="https://wa.link/1e6009" target="_blank">Send a Message</a>
                    </article>
                </div>
                {/* End of contact options */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Nombre Completo' required />
                    <input type="email" name='email' placeholder='Tu Email' required />
                    <textarea name="message" rows="7" placeholder='Tu Mensaje' required></textarea>
                    <button type='submit' className='btn btn-primary'>Enviar Mensaje</button>
                </form>
            </div>
        </section>
    )
}

export default Contact