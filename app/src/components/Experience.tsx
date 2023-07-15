import React from 'react'
import {BsCheckCircleFill} from "react-icons/bs"
import "../styles/experience.css"

export const Experience = () => {
  return (
    <section id="experience">
        <h2>My Skills</h2>
        <div className="container experience_container">
            <div className="experience_frontend">
                <h3>Frontend</h3>
                <div className="experience_content">
                    <article className="experience_details">
                        <BsCheckCircleFill className="icon"/>
                        <div>
                            <h4>language</h4>
                            <small className="text-light">experience</small>
                        </div>
                    </article>
                    <article className="experience_details">
                        <BsCheckCircleFill className="icon"/>
                        <div>
                            <h4>language</h4>
                            <small className="text-light">experience</small>
                        </div> 
                    </article>
                    <article className="experience_details">
                        <BsCheckCircleFill className="icon"/>
                        <div>
                            <h4>language</h4>
                            <small className="text-light">experience</small>
                        </div>
                    </article>
                    <article className="experience_details">
                        <BsCheckCircleFill className="icon"/>
                        <div>
                            <h4>language</h4>
                            <small className="text-light">experience</small>
                        </div>
                    </article>
                    <article className="experience_details">
                        <BsCheckCircleFill className="icon"/>
                        <div>
                            <h4>language</h4>
                            <small className="text-light">experience</small>
                        </div>
                    </article>
                </div>
            </div>
            <div className="experience_backend">
            <h3>Backend</h3>
                <div className="experience_content">
                    <article className="experience_details">
                        <BsCheckCircleFill className="icon"/>
                        <div>
                            <h4>language</h4>
                            <small className="text-light">experience</small>
                        </div>
                    </article>
                    <article className="experience_details">
                        <BsCheckCircleFill className="icon"/>
                        <div>
                            <h4>language</h4>
                            <small className="text-light">experience</small>
                        </div>
                    </article>
                    <article className="experience_details">
                        <BsCheckCircleFill className="icon"/>
                        <div>
                            <h4>language</h4>
                            <small className="text-light">experience</small>
                        </div>
                    </article>
                    <article className="experience_details">
                        <BsCheckCircleFill className="icon"/>
                        <div>
                            <h4>language</h4>
                            <small className="text-light">experience</small>
                        </div>
                    </article>
                    <article className="experience_details">
                        <BsCheckCircleFill className="icon"/>
                        <div>
                            <h4>language</h4>
                            <small className="text-light">experience</small>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
  )
}
