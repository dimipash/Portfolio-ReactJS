import React from "react";
import "./TechStack.css";

const TechStack = () => {
    const data = [
        {
            name: "Python",
        },
        {
            name: "Django",
        },
        {
            name: "HTML",
        },
        {
            name: "CSS",
        },
        {
            name: "ReactJS",
        },
        {
            name: "Javascript",
        },
        {
            name: "C#",
        },
        {
            name: "PostgreSQL",
        },
        {
            name: "Git",
        },
    ];

    const colors = [
        "#3498DB ",
        "#F39C12",
        "#2ECC71",
        "#4A235A",
        "#E74C3C",
        "#6495ED",
        "#40E0D0",
        "#DFFF00",
        "#DE3163",
    ];

    return (
        <div className="container techstack-section" id="techstack">
            <div className="section-title">
                <h5>Tech Stack</h5>
                <span className="line"></span>
            </div>

            <div className="row">
                {data.map((item, index) => (
                    <div
                        className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                        key={index}
                    >
                        <div
                            className={
                                index === 0
                                    ? "tech-content-marked tech-content"
                                    : "tech-content"
                            }
                        >
                            <span
                                className="tech-number"
                                style={{ backgroundColor: colors[index] }}
                            >
                                {index + 1}
                            </span>
                            <p>{item.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStack;
