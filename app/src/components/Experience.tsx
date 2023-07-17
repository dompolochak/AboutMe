import React from 'react'
import {BsCheckCircleFill} from "react-icons/bs"
import "../styles/experience.css"

export const Experience = () => {
  return (
    <section id="experience">
        <h2>My Skills</h2>
        <div className="container experience_container">
            <div className="experience_frontend">
                <h3>Programming Languages</h3>
                <div className="experience_content">
                    <article className="experience_details">
                        <BsCheckCircleFill className="icon"/>
                        <div>
                            <h4>React</h4>
                        </div>
                    </article>
                    <article className="experience_details">
                        <BsCheckCircleFill className="icon"/>
                        <div>
                            <h4>TypeScript</h4>
                        </div> 
                    </article>
                    <article className="experience_details">
                        <BsCheckCircleFill className="icon"/>
                        <div>
                            <h4>JavaScript</h4>
                        </div>
                    </article>
                    <article className="experience_details">
                        <BsCheckCircleFill className="icon"/>
                        <div>
                            <h4>C#/.Net</h4>
                        </div>
                    </article>
                    <article className="experience_details">
                        <BsCheckCircleFill className="icon"/>
                        <div>
                            <h4>Redux</h4>
                        </div>
                    </article>
                    <article className="experience_details">
                        <BsCheckCircleFill className="icon"/>
                        <div>
                            <h4>Jest</h4>
                        </div>
                    </article>
                    <article className="experience_details">
                        <BsCheckCircleFill className="icon"/>
                        <div>
                            <h4>HTML</h4>
                        </div>
                    </article>
                    <article className="experience_details">
                        <BsCheckCircleFill className="icon"/>
                        <div>
                            <h4>CSS</h4>
                        </div>
                    </article>
                    <article className="experience_details">
                        <BsCheckCircleFill className="icon"/>
                        <div>
                            <h4>SCSS</h4>
                        </div>
                    </article>
                    <article className="experience_details">
                        <BsCheckCircleFill className="icon"/>
                        <div>
                            <h4>Git / SVN</h4>
                        </div>
                    </article>
                    <article className="experience_details">
                        <BsCheckCircleFill className="icon"/>
                        <div>
                            <h4>C++</h4>
                        </div>
                    </article>
                    <article className="experience_details">
                        <BsCheckCircleFill className="icon"/>
                        <div>
                            <h4>C</h4>
                        </div>
                    </article>
                    <article className="experience_details">
                        <BsCheckCircleFill className="icon"/>
                        <div>
                            <h4>Java</h4>
                        </div>
                    </article>
                    <article className="experience_details">
                        <BsCheckCircleFill className="icon"/>
                        <div>
                            <h4>SQL</h4>
                        </div>
                    </article>
                    <article className="experience_details">
                        <BsCheckCircleFill className="icon"/>
                        <div>
                            <h4>NoSQL</h4>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
  )
}
