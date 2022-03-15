import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss'

//Import images
import facebookImg from '../../../../assets/FacebookOutline.svg';
import whatsappImg from '../../../../assets/Whatsapp.svg';
import emailImg from '../../../../assets/Envelope.svg';
import arrowRightImg from '../../../../assets/ArrowRight.svg';
const Contact = (props) => {

    const form = useRef();
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState('');

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_jg3a9kq', 'template_75dxtby', form.current, '8kpVfFpgjWlJZb9z5')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setName('')
        setEmail('')
        setMessage('Enviado!!!')
    };

  return (
    <div className={`contact ${props?.lightMode ? 'light' : ''} ${props?.className}`}>
        <div className='contact-options'>
            <div className="contact-option">
                <img src={emailImg} alt="" />
                <h3>Email</h3>
                <span>marcelo.ds.rocha77@gmail.com</span>
                <a href="mailto:marcelo.ds.rocha77@gmail.com" target='_blank' referrerPolicy='no-referrer'>
                    Envie uma mensagem
                </a>
            </div>
            <div className="contact-option">
                <img src={whatsappImg} alt="" />
                <h3>WhatsApp</h3>
                <span>(12) 9 9769-8447</span>
                <a href="https://api.whatsapp.com/send?phone=55012997698447" target='_blank' referrerPolicy='no-referrer'>
                Envie uma mensagem
                </a>
            </div>
            <div className="contact-option">
                <img src={facebookImg} alt="" />
                <h3>Messenger</h3>
                <span>marcelo.rocha.33671</span>
                <a href="https://m.me/marcelo.rocha.33671" target='_blank' referrerPolicy='no-referrer'>
                    Envie uma mensagem
                </a></div>
            </div>
            <form className='contact-form' ref={form} onSubmit={sendEmail}>
                <input
                    type="text"
                    name='name'
                    placeholder='Digite seu nome'
                    required
                    onChange={ev => setName(ev.target.value)}
                    value={name}
                />
                <input
                    type="email"
                    name="email"
                    placeholder='Digite seu email'
                    required
                    onChange={ev => setEmail(ev.target.value)}
                    value={email}
                />
                <textarea
                    name="message"
                    id="" 
                    rows='17'
                    required
                    onChange={ev => setMessage(ev.target.value)}
                    value={message}
                    placeholder='Digite sua mensagem'
                ></textarea>
                <button>
                    Send Message
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.2428 12.4371C21.4016 12.3489 21.5 12.1816 21.5 12C21.5 11.8184 21.4016 11.6511 21.2428 11.5629L18.9605 10.295C14.464 7.79689 9.72391 5.76488 4.81421 4.2306L4.14914 4.02276C3.99732 3.97532 3.83198 4.00294 3.70383 4.09716C3.57568 4.19138 3.5 4.34094 3.5 4.5V10.25C3.5 10.5159 3.70816 10.7353 3.97372 10.7493L4.98336 10.8025C7.44497 10.932 9.89156 11.2659 12.2979 11.8006L12.5362 11.8536C12.5892 11.8654 12.6122 11.887 12.625 11.9042C12.6411 11.926 12.6536 11.9594 12.6536 12C12.6536 12.0406 12.6411 12.0741 12.625 12.0958C12.6122 12.113 12.5892 12.1347 12.5362 12.1464L12.2979 12.1994C9.89157 12.7341 7.44496 13.068 4.98334 13.1976L3.97372 13.2507C3.70816 13.2647 3.5 13.4841 3.5 13.75V19.5C3.5 19.6591 3.57568 19.8086 3.70383 19.9029C3.83198 19.9971 3.99732 20.0247 4.14914 19.9772L4.81422 19.7694C9.72391 18.2351 14.464 16.2031 18.9605 13.705L21.2428 12.4371Z"/>
                    </svg>
                </button>
            </form>
    </div>
  )
}

export default Contact