import React from "react";
import "./Education.css";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
    const data = [
        {
            name: "PMG Sliven",
            degree: "Secondary education",
            year: "2001-2006",
            des: "Mathematics, English, Informatics",
        },
        {
            name: "University Of National And World Economy",
            degree: "Bachelor",
            year: "2006-2010",
            des: "Economics of Defence and Security",
        },
        {
            name: "SoftUni",
            degree: "Online modules",
            year: "2021-2023",
            des: "Software Engineer",
        },
    ];
    const colors = ["#001CCE", "#00C79F", "#FE2EF7"];
    return (
        <div className="container education-section">
            <div className="section-title">
                <h5>Education</h5>
                <span className="line"></span>
            </div>

            <div className="timeline-section">
                <VerticalTimeline lineColor="#FF1042">
                    {data.map((item, index) => (
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                background: colors[index],
                                color: "#fff",
                            }}
                            contentArrowStyle={{
                                borderRight: "7px solid  #FFBB24",
                            }}
                            date={item.year}
                            dateClassName="date-class"
                            iconStyle={{
                                background: colors[index],
                                color: "#fff",
                            }}
                            icon={<FaGraduationCap />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                {item.name}
                            </h3>
                            <h5
                                className="vertical-timeline-element-subtitle"
                                style={{ color: "yellow" }}
                            >
                                {item.degree}
                            </h5>
                            <p>{item.des}</p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default Education;
