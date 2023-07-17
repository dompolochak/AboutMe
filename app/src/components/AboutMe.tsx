import React, {memo, ReactElement, useState, useMemo} from "react";
import "../styles/aboutme.css"
import ME from "../assets/IMG_5778.jpeg"
import {FaAward} from "react-icons/fa"
import {MdWorkHistory} from "react-icons/md"
import {IoSchoolSharp} from "react-icons/io5"
import CV from '../assets/Resume5_9_23.pdf';

export const AboutMe = memo(function AboutMe(): ReactElement {

        return(
            <section id="about">
                <h5>Get to know</h5>
                <h2>About Me</h2>

                <div className="container about_container">
                    <div className="about_me">
                        <img src={ME} alt="" />
                    </div>

                    <div className="about_content">
                        <div className="about_cards">
                            <a className="about_card" download href={CV}>
                                <FaAward className="about_icon"/>
                                <h5>Experience</h5>
                                <small className="about_small">2+ Years</small>
                            </a>
                            <a className="about_card" href="https://www.epic.com/" target="_blank">
                                <MdWorkHistory className="about_icon"/>
                                <h5>Epic Systems</h5>
                                <small className="about_small">Full Stack Developer</small>
                                <br/>
                                <small className="about_small">July 2021 - Present</small>
                            </a>
                            <a className="about_card" href="https://www.uakron.edu/" target="_blank">
                                <IoSchoolSharp className="about_icon"/>
                                <h5>University of Akron</h5>
                                <small className="about_small">3.97 GPA</small>
                                <br/>
                                <small className="about_small">Class of 2021</small>
                            </a>
                        </div>
                        <p>
                            I'm Dominic Polochak, a Full Stack Software Developer with expertise in React, TypeScript, JavaScript, C#/.NET, and more. 
                            Currently, I contribute to building full stack web applications for MyChart, the #1 medical app in the app store, at Epic Systems.  
                            I take full ownership of projects, overseeing them from design to release. I have exceptional communicate skills, an ability to collaborate 
                            with team members of various roles, and a knack for simplifying complex problems with elegant solutions.

                        </p>
                        <a href="#contact" className="btn"> Contact me</a>
                    </div>
                </div>
            </section>

        )

})