import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { events } from "../../Data/timelinedata";
import "../../Styles/Timeline.css";

function Timelinex() {
    const navigator = useNavigate();
    const [showScrollButton, setShowScrollButton] = useState(false);
    const h1Ref = useRef(null);
    const timelineRefs = useRef([]);

    const navigateToEventPage = (eventRef) => {
        navigator(`/events/${eventRef}`);
    };

    const scrollToTimeline = (index) => {
        if (timelineRefs.current[index]) {
            timelineRefs.current[index].scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToTop = () => {
        if (h1Ref.current) {
            h1Ref.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        }
    };

    const handleIntersection = (entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                // h1 is out of the screen
                setShowScrollButton(true);
            } else {
                // h1 is in the screen
                setShowScrollButton(false);
            }
        });
    };

    useEffect(() => {
        const h1Observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.5, // Adjust as needed
        });

        if (h1Ref.current) {
            h1Observer.observe(h1Ref.current);
        }

        return () => {
            if (h1Ref.current) {
                h1Observer.unobserve(h1Ref.current);
            }
        };
    }, [h1Ref]);

    return (
        <div
            className="timeline-main"
        >
            <div className="timeline-main-container">
                <div>
                    <h1
                        className="timeline-title"
                        style={{ textAlign: "left", color: "#05ffa3" }}
                        ref={h1Ref}
                    >
                        Timeline
                    </h1>
                </div>
                <div className="button-flex">
                    <div onClick={() => scrollToTimeline(0)} className="item-button">
                        <div>March 1</div>
                    </div>
                    <div onClick={() => scrollToTimeline(17)} className="item-button">
                        <div>March 2</div>
                    </div>
                    <div onClick={() => scrollToTimeline(35)} className="item-button">
                        <div>March 3</div>
                    </div>
                </div>
                <>
                    {events.map((event, index) => {
                        return (
                            <Timeline position="alternate" key={index} ref={(el) => (timelineRefs.current[index] = el)}>
                                {index % 2 == 0 ? (
                                    <TimelineItem>
                                        <TimelineOppositeContent
                                            sx={{ m: "auto 0" }}
                                            align="right"
                                            variant="body2"
                                            className="event-date"
                                        >
                                            {event.date}
                                            <Typography>{event.time}</Typography>
                                            {event.venue &&
                                                <>
                                                    <i class="fas fa-map-marker-alt mr-2 mb-3"></i>{event.venue}
                                                </>
                                            }
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineConnector
                                                sx={{
                                                    bgcolor: "#8103ff",
                                                    boxShadow:
                                                        "rgba(129, 3, 255,0.6) 0px 54px 55px, rgba(129, 3, 255,0.6) 0px -12px 30px, rgba(129, 3, 255,0.6) 0px 4px 6px, rgba(129, 3, 255,0.6) 0px 12px 13px, rgba(129, 3, 255,0.6) 0px -3px 5px",
                                                }}
                                            />
                                            <TimelineDot
                                                color="grey"
                                                variant="outlined"
                                            ></TimelineDot>
                                            <TimelineConnector
                                                sx={{
                                                    bgcolor: "#bc05ff",
                                                    boxShadow: "#bc05ff 0px 5px 15px ",
                                                }}
                                            />
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: "50px", px: 2, fw: "900" }}>
                                            <Typography
                                                className="event_name"
                                                component="span"
                                                onClick={() => navigateToEventPage(event.ref)}
                                            >
                                                {event.title.toUpperCase()}
                                            </Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ) : (
                                    <TimelineItem>
                                        <TimelineOppositeContent
                                            sx={{ py: "50px", px: 2 }}
                                            variant="body2"
                                        >
                                            <Typography
                                                className="event_name"
                                                component="span"
                                                onClick={() => navigateToEventPage(event.ref)}
                                            >
                                                {event.title.toUpperCase()}
                                            </Typography>
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineConnector
                                                sx={{
                                                    bgcolor: "#8103ff",
                                                    boxShadow:
                                                        "rgba(129, 3, 255,0.6) 0px 54px 55px, rgba(129, 3, 255,0.6) 0px -12px 30px, rgba(129, 3, 255,0.6) 0px 4px 6px, rgba(129, 3, 255,0.6) 0px 12px 13px, rgba(129, 3, 255,0.6) 0px -3px 5px",
                                                }}
                                            />
                                            <TimelineDot color="grey" variant="filled"></TimelineDot>
                                            <TimelineConnector
                                                sx={{
                                                    bgcolor: "#bc05ff",
                                                    boxShadow: "#bc05ff 0px 5px 15px ",
                                                }}
                                            />
                                        </TimelineSeparator>
                                        <TimelineContent
                                            sx={{ m: "auto" }}
                                            color="gray"
                                            className="event-date"
                                        >
                                            {event.date}
                                            <Typography>{event.time}</Typography>
                                            {event.venue &&
                                                <>
                                                    <i class="fas fa-map-marker-alt mr-2 mb-3"></i>{event.venue}
                                                </>
                                            }
                                        </TimelineContent>
                                    </TimelineItem>
                                )}
                            </Timeline>
                        );
                    })}
                </>
            </div>

            {showScrollButton &&
                <div
                    onClick={scrollToTop}
                    className="scroll-to-top item-button1">
                    <div>
                        <i className="fa fa-arrow-up"></i>
                    </div>
                </div>
            }

            <div className="rocket1">
                <lottie-player
                    autoplay
                    loop
                    mode="normal"
                    src={
                        "https://lottie.host/2bb1bc54-83bf-46bf-a363-c86e0a294085/zbxKu3vW3m.json"
                    }
                ></lottie-player>
            </div>
            <div className="rocket2">
                <lottie-player
                    autoplay
                    loop
                    mode="normal"
                    src={
                        "https://lottie.host/2bb1bc54-83bf-46bf-a363-c86e0a294085/zbxKu3vW3m.json"
                    }
                ></lottie-player>
            </div>

            {/* <div className="astronaut">
                <lottie-player
                    autoplay
                    loop
                    mode="normal"
                    src={
                        "https://lottie.host/eb296674-d2b8-400f-8cd4-dfce9a6c2fa3/qgK0JoLgWU.json"
                    }
                ></lottie-player>
            </div> */}
        </div>
    );
}

export default Timelinex;
