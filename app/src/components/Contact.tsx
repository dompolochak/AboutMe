import React, {useRef} from 'react'
import {MdEmail} from "react-icons/md"
import emailjs from "emailjs-com";

import "../styles/contact.css"

function Contact() {
  
  const form = useRef<any>();
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_1i7kjr4', 'template_5hsdvn3', form.current, '3VMW6z2nB88DPjqWT')
    e.target.reset();
  };

  return (
    <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact me</h2>

        <div className="container contact_container">
            <div className="contact_options">
                <article className="contact_option">
                    <MdEmail className='contact_option_icon'/>
                    <h4>Email</h4>
                    <h5>myEmail</h5>
                    <a href="email.com" target="_blank">Send A message</a>
                </article>
                <article className="contact_option">
                    <MdEmail className='contact_option_icon'/>
                    <h4>Email</h4>
                    <h5>myEmail</h5>
                    <a href="email.com">Send A message</a>
                </article>
            </div>
            <form ref={form} onSubmit={(sendEmail)}>
                <input type="text" name="name" placeholder='Your Name' required/>
                <input type='email' name="email" placeholder='Your Email' required/>
                <textarea name="message" rows={7} placeholder='Your Message' required></textarea>
                <button type="submit" className='btn btn_primary'>Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact