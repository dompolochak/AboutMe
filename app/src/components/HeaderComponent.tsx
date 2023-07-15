import React, {ReactElement, memo} from "react";
import HeaderSocials from "./HeaderSocials";
import '../styles/header.css'
import CTA from "./CTA";
import ME from "../assets/IMG_santroini.JPG"

export const HeaderComponent = memo(function HeaderComponent(): ReactElement{

    return (
        <header>
            <div className="container header_container">
                <div className="header_text">
                    <h5>Hello I'm</h5>
                    <h1>Dominic Polochak</h1>
                    <h5 className="text-light">Fullstack Developer</h5>
                    <CTA/>                    
                </div>
                
                <div className="me">
                    <img src={ME}/>
                </div>
            </div>

            <HeaderSocials/>
        </header>

    )
})