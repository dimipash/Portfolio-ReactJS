import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import MyCv from "./cv.pdf";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";
import Fade from "react-reveal/Fade";

const Home = ({ theme, changeTheme }) => {
    return (
        <div className="container-fluid home" id="home">
            <div className="theme-change" onClick={changeTheme}>
                {theme === "light" ? (
                    <p>
                        <BsFillMoonStarsFill size={40} />
                    </p>
                ) : (
                    <p className="sun-theme-icon">
                        <MdSunny size={40} />
                    </p>
                )}
            </div>

            <div className="home-content">
                <Fade right>
                    <h1>Hello, I'm Dimitar Pashev</h1>
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
                </Fade>

                <Fade bottom>
                    <div className="button-for-action">
                        <div className="hire-me-button">Hire Me</div>
                        <div className="get-resume-button">
                            <a href={MyCv} download="Dimitar-Pashev-CV.pdf">
                                Get resume
                            </a>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Home;
