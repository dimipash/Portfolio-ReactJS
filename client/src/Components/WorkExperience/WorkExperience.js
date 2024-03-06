import React from "react";
import "./WorkExperience.css";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdGroupWork } from "react-icons/md";

const WorkExperience = () => {
    const data = [
        {
            companyname: "Google",
            position: "Full Stack Developer",
            des: "lorem",
            year: "2017-2022",
        },
        {
            companyname: "Google",
            position: "Full Stack Developer",
            des: "lorem",
            year: "2017-2022",
        },
        {
            companyname: "Google",
            position: "Full Stack Developer",
            des: "lorem",
            year: "2017-2022",
        },
        {
            companyname: "Google",
            position: "Full Stack Developer",
            des: "lorem",
            year: "2017-2022",
        },
        {
            companyname: "Google",
            position: "Full Stack Developer",
            des: "lorem",
            year: "2017-2022",
        },
        {
            companyname: "Google",
            position: "Full Stack Developer",
            des: "lorem",
            year: "2017-2022",
        },
    ];

    const colors = [
        "#800000",
        "#FF8042",
        "#001CCE",
        "#4B088A",
        "#FF6347",
        "#FF1042",
    ];

    return (
        <div className="container workexperience-section" id="workexperience">
            <div className="section-title">
                <h5>Work Experience</h5>
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
                            icon={<MdGroupWork />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                {item.companyname}
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                {item.position}
                            </h4>
                            <p>{item.des}</p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default WorkExperience;
