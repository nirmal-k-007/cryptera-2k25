import React, { useRef } from "react";
import "../../Styles/AboutUs.css";
import "../../Styles/ComponentsStyles/Staff_card.css";
import Staffcard from "../../Components/StaffCard";
import college_logo from "../../Assets/CIT-Coimbatore.jpg";
import final_logo from "../../Assets/logo_final.png";
import * as LottiePlayer from "@lottiefiles/lottie-player";

import { useNavigate } from "react-router-dom";
function AboutUs() {
    const navigate = useNavigate();
    const greenTopref = useRef(null);
    const greenBottomref = useRef(null);
    const contentref = useRef(null);
    let h = 10;
    let i = 10;
    const isMobile = window.innerWidth <= 768;

    const wheelhandler = (event) => {
        if (event.deltaY < 0) {
            h = 0;
            greenBottomref.current.style.height = "0px";
            if (contentref.current.scrollTop == 0) {
                i += 3;
                greenTopref.current.style.height = `${i}px`;
                if (i > 60) {
                    greenTopref.current.style.height = `0px`;
                    navigate("/");
                }
            }
        } else {
            greenTopref.current.style.height = "0px";
            i = 0;
            if (
                contentref.current.offsetHeight + contentref.current.scrollTop >=
                contentref.current.scrollHeight
            ) {
                h += 3;
                greenBottomref.current.style.height = h + "px";
                if (h > 60) {
                    greenBottomref.current.style.height = "0px";
                    navigate("/events");
                }
            }
        }
    };
    return (
        <div className="about-us" onWheel={wheelhandler} ref={contentref}>
            <div className="robot">
                <lottie-player
                    autoplay
                    loop
                    mode="normal"
                    src="https://assets1.lottiefiles.com/packages/lf20_1pxqjqps.json"
                ></lottie-player>
            </div>
            <div className="contentx">
                <div
                    className="left-container"
                    style={{ minWidth: "320px", paddingLeft: isMobile ? "0px" : "10px" }}
                >
                    <img src={final_logo} alt="CIT Logo" />
                </div>
                <div className="right-container">
                    <div className="titley">About CRYPTERA</div>
                    <div className="descriptiony">
                        <b style={{ color: "#be57ff" }}>CRYPTERA</b> is a National-level
                        technical intercollegiate symposium conducted by Computer Science
                        and Engineering department of Coimbatore Institute of Technology.
                        This dynamic event encompasses a diverse array of technical and
                        non-technical competitions, workshops, and webinars, fostering an
                        environment where students can sharpen their skills and expand their
                        knowledge. From cutting-edge hackathons to thought-provoking tech
                        talks by industry leaders, CRYPTERA offers a platform for attendees
                        to engage with the latest trends in technology.
                    </div>
                </div>
            </div>
            <div className="contentx">
                {/* CIT Content on the left with image on the right */}
                <div className="left-container">
                    <div className="titley">About CIT</div>
                    <div className="descriptiony">
                        The{" "}
                        <span className="highlighter">
                            V. Rangasamy Naidu Educational Trust
                        </span>{" "}
                        devoted to the cause of promoting technical and scientific literacy,
                        established
                        <span className="highlighter">
                            {" "}
                            Coimbatore Institute of Technology (CIT){" "}
                        </span>
                        in Coimbatore, Tamil Nadu, South India in{" "}
                        <span className="highlighter">1956</span>. CIT is one of the most
                        reputed and prestigious educational institutions in India. The
                        Institute backed by World Class research and development over the
                        years attained autonomous status in 1987.
                    </div>
                </div>
                <div
                    className="right-container"
                    style={{ minWidth: "320px", margin: "2rem 0px" }}
                >
                    <a
                        href="https://www.cit.edu.in/departments/computer-science-engineering-department"
                        target="_blank"
                    >
                        <img
                            src={college_logo}
                            alt="CIT Logo"
                        />
                    </a>
                </div>
            </div>

            <div className="contentx">
                {/* Department Content with Lottie player on the left */}
                <div className="left-container2" style={{ minWidth: "320px" }}>
                    <a
                        href="https://www.cit.edu.in/departments/computer-science-engineering-department"
                        target="_blank"
                    >
                        <lottie-player
                            className="lottie"
                            autoplay
                            loop
                            mode="normal"
                            src="https://lottie.host/05f27730-2a56-436f-85ee-d31c80134567/ZkXVCa20Xa.json"
                        ></lottie-player>
                    </a>
                </div>
                <div className="right-container">
                    <div className="titley">About the Department</div>
                    <div className="descriptiony">
                        The department imparts{" "}
                        <span className="highlighter">
                            world class training and research
                        </span>{" "}
                        . The department provides state of the art computing facilities to
                        the students. Graduates from the department are most wanted by both
                        academia and corporates like Microsoft, Yahoo, IBM, Oracle, EMC2.
                        All over the world, alumni of the department occupy{" "}
                        <span className="highlighter">
                            top positions in both academia and industry
                        </span>{" "}
                        especially one of the alumni occupies as{" "}
                        <span className="highlighter">Ambassador of India in Israel</span>.
                        Important research and technical patents are registered by our
                        alumnus. The department has generated funds from various government
                        organizations like AICTE, MHRD, and DST for promoting research
                        activities and modernization.
                    </div>
                </div>
            </div>

            <div
                className="titley"
                style={{ textAlign: "center", marginTop: "30px" }}
            >
                Our Sincere thanks to
            </div>
            <div className="container5 ">
                <Staffcard
                    image={require("../../Assets/Staffs/principal.jpg")}
                    name="Dr.A.Rajeswari"
                    position={"Principal"}
                />
                <Staffcard
                    image={
                        "https://www.cit.edu.in/wp-content/uploads/2015/10/AK-Sep-18-Image.jpg"
                    }
                    name="Dr.A.Kunthavai"
                    position={"HOD"}
                />
                <Staffcard
                    image={
                        "https://adm.cit.edu.in/assets/files/rcms_faculties/images/2023/07/FAC3443922/1689849651.jpg"
                    }
                    name="Dr.M.Mohanapriya"
                    position={"Senior tutor"}
                />
                <Staffcard
                    image={
                        "https://adm.cit.edu.in/assets/files/rcms_faculties/images/2023/07/FAC3598255/1689850395.jpg"
                    }
                    name="Dr.S.Sangeetha Maariammal"
                    position={"Tutor"}
                />
                <Staffcard
                    image={
                        "https://adm.cit.edu.in/assets/files/rcms_faculties/images/2023/07/FAC8738273/1689851306.jpg"
                    }
                    name="Dr.S.Priya"
                    position={"Tutor"}
                />
            </div>
            <div className="py-20"></div>
        </div>
    );
}

export default AboutUs;
