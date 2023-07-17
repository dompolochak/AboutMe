import React from 'react'
import {BsLinkedin, BsGithub} from "react-icons/bs"
import {BiLogoInstagramAlt} from "react-icons/bi"
import "../styles/footer.css"

function Footer() {
    return (
        <footer>
            <ul className='permalinks'>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>

            <div className="footer_socials">
                <a href="https://www.instagram.com/dom_polochak/" target='_blank'><BiLogoInstagramAlt/></a>
                <a href="https://www.linkedin.com/in/dominic-polochak-6b366816b/" target='_blank'><BsLinkedin/></a>
                <a href="https://github.com/dompolochak" target='_blank'><BsGithub/></a>
            </div>

            <div className="footer_copyright">
                <small>
                    &copy; Dominic Polochak    
                </small>
            </div>
        </footer>

    )
}

export default Footer