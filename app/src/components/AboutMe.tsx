import React, {memo, ReactElement, useState, useMemo} from "react";
import "../styles/aboutme.css"
import ME from "../assets/IMG_santroini copy.JPG"
import {FaAward} from "react-icons/fa"

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
                            <article className="about_card">
                                <FaAward className="about_icon"/>
                                <h5>Experience</h5>
                                <small className="about_small">Work Experience</small>
                            </article>
                            <article className="about_card">
                                <FaAward className="about_icon"/>
                                <h5>Experience</h5>
                                <small className="about_small">Work Experience</small>
                            </article>
                            <article className="about_card">
                                <FaAward className="about_icon"/>
                                <h5>Experience</h5>
                                <small className="about_small">Work Experience</small>
                            </article>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis dolor doloremque, eos quaerat voluptatibus inventore beatae sunt placeat sed, ex est rerum culpa eaque iste minima non harum! Dicta, nisi!</p>
                        <a href="#contact" className="btn"> Contact me</a>
                    </div>
                </div>
            </section>

        )

})