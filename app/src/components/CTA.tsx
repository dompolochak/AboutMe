import React from 'react'
import CV from '../assets/Resume5_9_23.pdf';

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className="btn btn_primary">Contact</a>
    </div>
  )
}

export default CTA