import React from "react";
import "./SidebarList.css";
import profilepic from "../../Image/me.jpg";

import {
    FcHome,
    FcNightPortrait,
    FcTodoList,
    FcContacts,
    FcFactory,
} from "react-icons/fc";
import { MdBiotech } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import { Link } from "react-scroll";

const SidebarList = ({ expandSidebar }) => {
    return (
        <React.Fragment>
            {expandSidebar ? (
                <div className="navbar-items">
                    <div className="sidebar-profile-pic">
                        <img src={profilepic} alt="profile" />
                    </div>

                    <ul>
                        <li className="nav-item">
                            <Link
                                to="home"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                            >
                                <FcHome size={25} /> Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                            >
                                <FcNightPortrait size={25} /> About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="workexperience"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                            >
                                <FcFactory size={25} /> Work Experience
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="techstack"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                            >
                                <MdBiotech size={25} color="orange" /> Tech
                                Stack
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="education"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                            >
                                <MdCastForEducation size={25} color="green" />{" "}
                                Education
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="project"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                            >
                                <FcTodoList size={25} /> Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                            >
                                <FcContacts size={25} /> Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            ) : (
                <div className="navbar-items-only-icons">
                    <ul>
                        <li className="nav-item">
                            <Link
                                to="home"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                            >
                                <FcHome size={25} />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                            >
                                <FcNightPortrait size={25} />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="workexperience"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                            >
                                <FcFactory size={25} />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="techstack"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                            >
                                <MdBiotech size={25} color="orange" />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="education"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                            >
                                <MdCastForEducation size={25} color="green" />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="project"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                            >
                                <FcTodoList size={25} />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                            >
                                <FcContacts size={25} />
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </React.Fragment>
    );
};

export default SidebarList;
