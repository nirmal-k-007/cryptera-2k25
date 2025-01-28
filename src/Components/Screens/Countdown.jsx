import React, { useState, useEffect } from "react";

const Countdown = () => {
    const targetDate = "2024-03-01T12:00:00";

    const calculateTimeRemaining = () => {
        const now = new Date();
        const difference = new Date(targetDate) - now;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return {
            days,
            hours,
            minutes,
            seconds,
        };
    };

    const isMobile = window.innerWidth <= 768;

    const gradientStyle = {
        background: `linear-gradient(to right, #05FFA3, #06BED8)`,
        WebkitBackgroundClip: "text",
        color: "transparent",
    };

    const timeLeftStyle = {
        fontSize: isMobile ? '5vw' : "3vw", // Adjust the font size as needed
        lineHeight: "3rem",
        color: "#FFFFFF", // Adjust the font color as needed
        margin: "10px 0", // Adjust the margin as needed
    };

    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => clearInterval(intervalId);
    }, [targetDate]);

    return (
        <div
            className="home main-section"
            id="Home"
            style={{ position: "relative", margin: "0px", padding: "0px" }}
        >
            <h1
                style={{
                    fontSize: isMobile ? '10vw' : "6vw",
                    lineHeight: "1",
                    width: isMobile ? '95vw' : "70vw",
                    textAlign: "center",
                }}
            >
                <span style={{ ...gradientStyle, ...timeLeftStyle }}>
                    {`Time Left for Event to Commence `}
                </span>
                <br></br>
                <span style={gradientStyle}>{`${timeRemaining.days} days `}</span>
                <span style={gradientStyle}>{`${timeRemaining.hours} hours`}</span>
                <br />
                <span style={gradientStyle}>{`${timeRemaining.minutes} minutes `}</span>
                <span style={gradientStyle}>{`${timeRemaining.seconds} seconds`}</span>
            </h1>
            <div className="explore-btn"></div>
        </div>
    );
};

export default Countdown;
