import React from "react";
import "./Contact.css";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
    return (
        <div className="container contact-section" id="contact">
            <div className="row">
                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
                    <div className="contact-form-image">
                        <img
                            src="https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Contact Form"
                        />
                    </div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
                    <div className="contact-form-design">
                        <div className="text-center">
                            <h5>Contact Me</h5>
                        </div>

                        <form>
                            <div className="contact-form">
                                <label className="form-level">Name</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="contact-form">
                                <label className="form-level">E-mail</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="contact-form">
                                <label className="form-level">Job Types</label>
                                <select className="custom-select-tag">
                                    <option>Full-time</option>
                                    <option>Working Student</option>
                                    <option>Part-time</option>
                                    <option>Contract</option>
                                </select>
                            </div>

                            <div className="contact-form">
                                <label className="form-level">Message</label>
                                <textarea
                                    rows="4"
                                    type="text"
                                    className="form-control"
                                />
                            </div>

                            <div className="button-submit">
                                <p>
                                    Send <RiSendPlaneFill size={20} />
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
