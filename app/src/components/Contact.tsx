import React, {useRef} from 'react'
import {MdEmail} from "react-icons/md"
import emailjs from "emailjs-com";
import {AiFillPhone} from "react-icons/ai"
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'

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
                    <h5>dompolochak@gmail.com</h5>
                    <a href="mailto:dompolochak@gmail.com" target="_blank">Send A message</a>
                </article>
                <article className="contact_option">
                    <AiFillPhone className='contact_option_icon'/>
                    <h4>Phone</h4>
                    <h5>{"(724) 814 - 4811"}</h5>
                </article>
                <article className="contact_option">
                    <h4>Social Media</h4>
                    <div className="contact_socials">
                        <a href="https://www.linkedin.com/in/dominic-polochak-6b366816b/" className='contact_option_icon' target='_blank'><BsLinkedin/></a>
                        <a href="https://github.com/dompolochak" className='contact_option_icon' target='_blank'><BsGithub/></a>
                        <a href="https://www.instagram.com/dom_polochak/" className='contact_option_icon' target='_blank'><BsInstagram/> </a>
                    </div>

                </article>
            </div>
            <form ref={form} onSubmit={(sendEmail)}>
                <input type="text" name="name" placeholder='Your Name' required/>
                <input type='email' name="email" placeholder='Your Email' required/>
                <textarea name="message" rows={7} placeholder='Your Message' required></textarea>
                <button type="submit" className='btn'>Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact