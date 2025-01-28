import React, { useRef } from "react";
import "../../Styles/Committee.css";
import { useNavigate } from "react-router-dom";
import committee_data from "../../Data/committee_data";
import * as LottiePlayer from "@lottiefiles/lottie-player";

function Committee() {
    const navigate = useNavigate();
    const greenTopref = useRef(null);
    const greenBottomref = useRef(null);
    const contentref = useRef(null);
    let h = 10;
    let i = 10;

    const wheelhandler = (event) => {
        if (event.deltaY < 0) {
            h = 0;
            greenBottomref.current.style.height = "0px";
            if (contentref.current.scrollTop == 0) {
                i += 3;
                greenTopref.current.style.height = `${i}px`;
                if (i > 60) {
                    greenTopref.current.style.height = `0px`;
                    navigate("/web_devs");
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
                    navigate("/contact_us");
                }
            }
        }
    };
    return (
        <div className="committee-main-container" ref={contentref} onWheel={wheelhandler} style={{ "paddingTop": "0px" }}>
            <br /><br />
            <div className="committee">
                <lottie-player
                    autoplay
                    loop
                    mode="normal"
                    src="https://assets4.lottiefiles.com/packages/lf20_h3a2hlnn.json"
                ></lottie-player>
            </div>
            <div className="committee-container" style={{ "paddingTop": "0px" }}>
                <div>
                    <h1 className="committee-title" style={{ "marginTop": "0px", paddingTop: "0p" }}>Committee members</h1>
                    <p className="committee-tilte-description">
                        The crew in charge of painting the events.{" "}
                    </p>
                </div>
                <div
                    className="content-container"
                    style={{ maxWidth: "1200px", margin: "auto", marginTop: "7%" }}
                >
                    {committee_data.map((item, index) => {
                        return <Committeemember key={index} data={item} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Committee;

const Committeemember = ({ data }) => {
    if (data) {
        return (
            <div className="content-container-item">
                <div className="content-container-item-image">
                    <img src={data.profile} alt="profile" loading="lazy" style={{ "width": "100px" }} />
                </div>
                <div className="content-container-item-description">
                    <div className="committee-name-x">
                        <div>
                            <h1>{data.name}</h1>
                            <p>{data.year}</p>
                        </div>
                        <p>{data.position}</p>
                    </div>
                </div>
            </div>
        );
    } else {
        return true;
    }
};
