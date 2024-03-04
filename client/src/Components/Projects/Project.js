import React from "react";
import "./Project.css";
import ProjectList from "./ProjectList";

const Project = () => {
    const data = [
        {
            name: "Various Django projects",
            des: "E-commerce site, web-based CV generator, link scraper, social media app and advanced expense tracker",
            projectlink: "https://github.com/dimipash/Django_projects",
            techused: [
                {
                    techname: "Django",
                },
                {
                    techname: "Python",
                },
            ],
        },
        {
            name: "Online Shop Django Project",
            des: "Online shop in Django leveraging PostgreSQL database, custom user model, product categories, cart functionality",
            projectlink:
                "https://github.com/dimipash/online_shop_django_project",
            techused: [
                {
                    techname: "Django",
                },
                {
                    techname: "Python",
                },
            ],
        },
        {
            name: "Books",
            des: "E-commerce web app with React utilizing Vite, JSX, Tailwind CSS. Created reusable component logic with custom hooks, managed state with context API, implemented cart functionality",
            projectlink: "https://github.com/dimipash/books",
            techused: [
                {
                    techname: "ReactJS",
                },
                {
                    techname: "Javascript",
                },
            ],
        },
        {
            name: "Flask-React-Full-Stack-App",
            des: "a dynamic web application, utilizing the power of Python with Flask for the backend and JavaScript with React for the frontend.",
            projectlink:
                "https://github.com/dimipash/Flask-React-Full-Stack-App",
            techused: [
                {
                    techname: "React",
                },
                {
                    techname: "Flask",
                },
            ],
        },
    ];

    return (
        <div className="container">
            <div className="section-title">
                <h5>Projects</h5>
                <span className="line"></span>
            </div>
            <div className="row">
                {data.map((item, index) => (
                    <div
                        className="col-xl-6 col-lg-6 col-md-6 col-sm-12"
                        key={index}
                    >
                        <ProjectList {...item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
