import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import About from "./Components/About/About";
import TechStack from "./Components/TechStack/TechStack";
import Project from "./Components/Projects/Project";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import Education from "./Components/Education/Education";
import Contact from "./Components/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import NavbarMobileView from "./Components/Sidebar/NavbarMobileView";

const App = () => {
    return (
        <>
            <NavbarMobileView />
            <Sidebar />
            <About />
            <WorkExperience />
            <TechStack />
            <Education />
            <Project />
            <Contact />

            <ScrollToTop
                smooth={true}
                top="20"
                color="white"
                height="20"
                width="20"
                style={{ borderRadius: "90px", backgroundColor: "#38004c" }}
            />
        </>
    );
};

export default App;
