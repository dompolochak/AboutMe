import React from 'react'
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className="header header_socials">
        <a href='https://www.linkedin.com/in/dominic-polochak-6b366816b/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/dompolochak' target='_blank'><BsGithub/></a>
        <a href='https://www.instagram.com/dom_polochak/' target='_blank'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials