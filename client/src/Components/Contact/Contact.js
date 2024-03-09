import React, { useState } from "react";
import "./Contact.css";
import { RiSendPlaneFill } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Fade from "react-reveal/Fade";

const Contact = () => {
    const API = "http://localhost:8080/sendemail";

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [jobtypes, setJobtypes] = useState();
    const [message, setMessage] = useState();

    const sendemailInfo = async () => {
        fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                jobtypes,
                message,
            }),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.error) {
                    toast.error(result.error);
                } else {
                    toast.success("Your e-mail has been sent");
                    setName("");
                    setEmail("");
                    setJobtypes("");
                    setMessage("");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="container contact-section" id="contact">
            <div className="row">
                <Fade bottom>
                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
                        <div className="contact-form-image">
                            <img
                                src="https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="Contact Form"
                            />
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
                        <div className="contact-form-design">
                            <div className="text-center">
                                <h5>Contact Me</h5>
                            </div>

                            <form>
                                <div className="contact-form">
                                    <label className="form-level">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                </div>

                                <div className="contact-form">
                                    <label className="form-level">E-mail</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </div>

                                <div className="contact-form">
                                    <label className="form-level">
                                        Job Types
                                    </label>
                                    <select
                                        className="custom-select-tag"
                                        value={jobtypes}
                                        onChange={(e) =>
                                            setJobtypes(e.target.value)
                                        }
                                    >
                                        <option value="">
                                            Select Job Type
                                        </option>
                                        <option>Full-time</option>
                                        <option>Working Student</option>
                                        <option>Part-time</option>
                                        <option>Contract</option>
                                    </select>
                                </div>

                                <div className="contact-form">
                                    <label className="form-level">
                                        Message
                                    </label>
                                    <textarea
                                        rows="4"
                                        type="text"
                                        className="form-control"
                                        value={message}
                                        onChange={(e) =>
                                            setMessage(e.target.value)
                                        }
                                    />
                                </div>

                                <div
                                    className="button-submit"
                                    onClick={sendemailInfo}
                                >
                                    <p>
                                        Send <RiSendPlaneFill size={20} />
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </Fade>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    );
};

export default Contact;
