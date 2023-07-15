import React, {useState} from 'react'
import {AiTwotoneHome, AiOutlineUser} from 'react-icons/ai'
import {FiBook} from "react-icons/fi"
import {BiMessageRoundedDetail} from 'react-icons/bi'
import "../styles/navbar.css"

const NavBar = () => {
    const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
       <a href="#" onClick={()=> setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><AiTwotoneHome/></a>
       <a href="#about" onClick={()=> setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><AiOutlineUser/></a>
       <a href="#experience" onClick={()=> setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><FiBook/></a>
       <a href="#contact" onClick={()=> setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><BiMessageRoundedDetail/></a>
    </nav>
  )
}

export default NavBar