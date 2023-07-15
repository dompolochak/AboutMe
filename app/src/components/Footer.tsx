import React from 'react'
import "../styles/footer.css"

function Footer() {
    return (
        <footer>
            <a href="#" className='footer_logo'>link</a>
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
                <a href="instagram.com">IG</a>
                <a href="linkind.com">Linkedin</a>
                <a href="github.com">github</a>
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