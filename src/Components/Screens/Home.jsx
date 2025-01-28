import { React, useState, useEffect } from "react";
import "../../Styles/Home.css";
import { useNavigate } from "react-router-dom";
import img1 from "../../Assets/Caroussel/images/crypterabg.png"
import img2 from "../../Assets/Caroussel/images/technical.png"
import img3 from "../../Assets/Caroussel/images/non-technical.png"
import img4 from "../../Assets/Caroussel/images/flagship.png";
import img5 from "../../Assets/Caroussel/images/pcrypterabg.png";
import img6 from "../../Assets/Caroussel/images/ptechnical.png";
import img7 from "../../Assets/Caroussel/images/pnon-technical.png";
import img8 from "../../Assets/Caroussel/images/pflagship.png";
import bg from "../../Assets/Caroussel/images/space5.jpg"

function Home() {
    const navigator = useNavigate();
    const [unAcceptClick, setUnAcceptClick] = useState(null);
    const isMobile = window.innerWidth <= 768;
    const [autoClickInterval, setAutoClickInterval] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextButton = document.getElementById("next");
            if (nextButton) {
                nextButton.click();
            }
        }, 3500);
        setAutoClickInterval(interval);

        return () => clearInterval(interval);
    }, []);

    const clickhandler = (category) => {
        navigator(`/events?category=${encodeURIComponent(category)}`);
    };
    const handleClick = () => {
        window.location.href =
            "https://docs.google.com/forms/d/e/1FAIpQLSdVn_M4OESw7BRTY5QJF8FREnONDoWUfAreehNLWgyF81HhHw/viewform";
    };

    const showSlider = (type) => {
        const nextButton = document.getElementById("next");
        const prevButton = document.getElementById("prev");
        const caroussel1 = document.querySelector(".caroussel-1");
        const listHTML = document.querySelector(".caroussel-1 .list");
        clearInterval(autoClickInterval);

        nextButton.style.pointerEvents = "none";
        prevButton.style.pointerEvents = "none";

        caroussel1.classList.remove("prev", "next");
        let items = document.querySelectorAll(".caroussel-1 .list .item");

        if (type === "next") {
            listHTML.append(items[0]);
            caroussel1.classList.add("next");
        } else {
            let positionLast = items.length - 1;
            listHTML.prepend(items[positionLast]);
            caroussel1.classList.add("prev");
        }

        clearTimeout(unAcceptClick);
        setUnAcceptClick(setTimeout(() => {
            nextButton.style.pointerEvents = "auto";
            prevButton.style.pointerEvents = "auto";
        }, 10));

        const interval = setInterval(() => {
            const nextButton = document.getElementById("next");
            if (nextButton) {
                nextButton.click();
            }
        }, 3000);
        setAutoClickInterval(interval);
    }

    return (
        <div
            className="home main-section"
            id="Home"
            style={{
                padding: isMobile ? "0px" : "",
                margin: isMobile ? "0px 2px" : "",
                overflow: isMobile ? "hidden" : "",
                position: isMobile ? "fixed" : "relative",
            }}
        >
            <div
                style={{
                    paddingTop: isMobile ? "px" : "0px",
                    paddingBottom: isMobile ? "5px" : "0px",
                }}
            >
                <section className="caroussel-1">
                    <img src={bg} alt="" />
                    <div className="list">
                        <div className="item">
                            <img src={isMobile ? img8 : img4} alt="" />
                            <div onClick={() => clickhandler("Flagship")} className="item-button">
                                <div>Explore</div>
                            </div>
                        </div>
                        <div className="item">
                            <img src={isMobile ? img5 : img1} alt="" />
                            <div onClick={() => handleClick()} className="item-button">
                                <div>Register Now</div>
                            </div>
                        </div>
                        <div className="item">
                            <img src={isMobile ? img6 : img2} alt="" />
                            <div onClick={() => clickhandler("Technical")} className="item-button">
                                <div>Explore</div>
                            </div>
                        </div>
                        <div className="item">
                            <img src={isMobile ? img7 : img3} alt="" />
                            <div onClick={() => clickhandler("Non-Technical")} className="item-button">
                                <div>Explore</div>
                            </div>
                        </div>
                    </div>
                    <div className="arrows">
                        <button id="prev" onClick={() => showSlider("prev")}>{"<"}</button>
                        <button id="next" onClick={() => showSlider("next")}>{">"}</button>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;