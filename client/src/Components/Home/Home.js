import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import MyCv from "./cv.pdf";

const Home = () => {
    return (
        <div className="container-fluid home">
            <div className="container home-content">
                <h1>Hello, I'm a </h1>
                <h3>
                    <Typewriter
                        options={{
                            strings: [
                                "Junior Python Developer",
                                "ReactJS Developer",
                                "Web Developer",
                                "Backend Developer",
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 5,
                        }}
                    />
                </h3>

                <div className="button-for-action">
                    <div className="hire-me-button">Hire Me</div>
                    <div className="get-resume-button">
                        <a href={MyCv} download="Dimitar-Pashev-CV.pdf">
                            Get resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
