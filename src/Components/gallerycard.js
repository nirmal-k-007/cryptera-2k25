import React from "react";
import "../Styles/ComponentsStyles/gallerycard.css";

function gallerycard(props) {
    return (
        <div className="gallery-profile">
            <div className="gallery-conatainer">
                <div className="gallery-container-img">
                    <img style={{ objectFit: "cover" }} src={props.image} alt="event" />
                </div>
                <div className="gallery-container-name">
                    <div>
                        <h1 style={{ fontSize: "20px" }}>{props.name}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default gallerycard;
