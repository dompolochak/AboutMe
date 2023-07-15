import React, {ReactElement, memo, useCallback, useMemo, useState} from "react";
import { HeaderComponent } from "./HeaderComponent";
import { BodyComoponent } from "./BodyCompnent";
import "../styles/page.css"
import NavBar from "./NavBar";
import { AboutMe } from "./AboutMe";
import { Experience } from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";


export const PageComponent = memo(function PageComponent(): ReactElement {

    return (
    <>
        <div className="PageContainer"> 
            <HeaderComponent/>
            <NavBar/>
            <AboutMe/>
            <Experience/>
            <Contact/>
            <Footer/>
        </div>
    </>
    );
});


