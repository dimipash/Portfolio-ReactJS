import React from "react";
import "./About.css";
import ProfilePic from "../../Image/me.jpg";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const About = () => {
    return (
        <div className="container about-section" id="about">
            <div className="row">
                <Fade bottom>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="about-image">
                            <img src={ProfilePic} alt="Profile" />
                        </div>
                    </div>
                </Fade>

                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="about-details">
                        <Flip left>
                            <div className="about-title">
                                <h5>About me</h5>
                                <span className="line"></span>
                            </div>
                        </Flip>
                        <Fade right>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Fugit, blanditiis modi a, sunt
                                et quo incidunt illum inventore, quas dolor
                                provident tenetur harum. Ipsum assumenda commodi
                                laborum repellat alias tenetur. Lorem ipsum
                                dolor sit amet consectetur adipisicing elit.
                                Fugit, blanditiis modi a, sunt et quo incidunt
                                illum inventore, quas dolor provident tenetur
                                harum. Ipsum assumenda commodi laborum repellat
                                alias tenetur. Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Fugit, blanditiis
                                modi a, sunt et quo incidunt illum inventore,
                                quas dolor provident tenetur harum. Ipsum
                                assumenda commodi laborum repellat alias
                                tenetur.
                            </p>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
