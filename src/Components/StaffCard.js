import React from "react";
import "../Styles/ComponentsStyles/Staff_card.css"

function StaffCard(props) {
    // Function to split the name into two lines
    function splitName(name) {
        const words = name.split(' ');
        const firstLine = words.slice(0, Math.ceil(words.length / 2)).join(' ');
        const secondLine = words.slice(Math.ceil(words.length / 2)).join(' ');

        return [firstLine, secondLine];
    }

    // Split the name
    const [firstLine, secondLine] = splitName(props.name);

    return (
        <div className='manager-profile'>
            <div className='manager-profile-container'>
                <div className='circle circle-hover' style={{ background: "linear-gradient(to bottom,#05ffa3 ,#19f6fa)" }} >
                </div>
                <div className='manager-profile-image img-hover ' >
                    <img src={props.image} alt='event' style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }} />
                </div>
                <div className='manager-profile-details'>
                    <div style={{ fontSize: "16px" }}>
                        {/* Render the first line of the name */}
                        <h1>{firstLine}</h1>
                        {/* Render the second line of the name */}
                        <h1 style={{ textAlign: "center" }}>{secondLine}</h1>
                    </div>
                    <div style={{ fontSize: "14px", textAlign: "center", paddingTop: "2px" }}>
                        <p>{props.position}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StaffCard;
