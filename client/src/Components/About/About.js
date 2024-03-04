import React from "react";
import "./About.css";
import ProfilePic from "../../Image/me.jpg";

const About = () => {
    return (
        <div className="container about-section">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="about-image">
                        <img src={ProfilePic} alt="Profile Photo" />
                    </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="about-details">
                        <div className="about-title">
                            <h5>About me</h5>
                            <span className="line"></span>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fugit, blanditiis modi a, sunt et quo incidunt
                            illum inventore, quas dolor provident tenetur harum.
                            Ipsum assumenda commodi laborum repellat alias
                            tenetur. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Fugit, blanditiis modi a, sunt et
                            quo incidunt illum inventore, quas dolor provident
                            tenetur harum. Ipsum assumenda commodi laborum
                            repellat alias tenetur. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Fugit, blanditiis modi
                            a, sunt et quo incidunt illum inventore, quas dolor
                            provident tenetur harum. Ipsum assumenda commodi
                            laborum repellat alias tenetur.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
