import React, { useEffect, useRef } from "react";
import Image1 from "./assets/layer6.png";
import Image2 from "./assets/layer5.png";

function Main({ movetohomepage }) {

    useEffect(() => {

        document.addEventListener("mousemove", parallax);

        function parallax(e) {
            this.querySelectorAll(".layer").forEach(layer => {
                const x = (window.innerWidth - e.pageX * 100) / 1000;
                const y = (window.innerHeight - e.pageY * 100) / 1000;
                layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
        }

    }, []);

    return (
        <div>
            <div className="outer-layer">
                <div className="layer1 layer">
                    <img src={Image1} />
                </div>
                <div className="layer2">
                    <img src={Image2} alt="" />
                </div>
            </div>
            <div className="scroll-indicator">
                <div></div>
            </div>
        </div>
    );
}

export default Main;
