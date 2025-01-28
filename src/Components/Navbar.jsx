import React, { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../Styles/ComponentsStyles/Navbar.css";
function Navbar() {
    const location = useLocation();
    const homeref = useRef(null);
    const aboutref = useRef(null);
    const contactref = useRef(null);
    const eventref = useRef(null);
    const commiteeref = useRef(null);
    // const hintref = useRef(null);
    const navbarref = useRef(null);
    const timelineref = useRef(null);
    const webref = useRef(null);
    const adminref = useRef(null);
    const venueref = useRef(null);

    const clearActive = () => {
        homeref.current.classList.remove("active");
        aboutref.current.classList.remove("active");
        contactref.current.classList.remove("active");
        eventref.current.classList.remove("active");
        webref.current.classList.remove("active");
        commiteeref.current.classList.remove("active");
        timelineref.current.classList.remove("active");
        adminref.current.classList.remove("active");
        venueref.current.classList.remove("active");
    };

    useEffect(() => {
        if (location.pathname === "/") {
            clearActive();
            homeref.current.classList.add("active");
        } else if (location.pathname.includes("/events")) {
            clearActive();
            eventref.current.classList.add("active");
        } else if (location.pathname === "/about_us") {
            clearActive();
            aboutref.current.classList.add("active");
        } else if (location.pathname === "/contact_us") {
            clearActive();
            contactref.current.classList.add("active");
        } else if (location.pathname === "/events") {
            clearActive();
            eventref.current.classList.add("active");
        } else if (location.pathname === "/timeline") {
            clearActive();
            timelineref.current.classList.add("active");
        } else if (location.pathname === "/web_devs") {
            clearActive();
            webref.current.classList.add("active");
        } else if (location.pathname === "/gallery") {
            clearActive();
        } else if (location.pathname === "/committee") {
            clearActive();
            commiteeref.current.classList.add("active");
        }
        else if (location.pathname === "/admin") {
            clearActive();
            adminref.current.classList.add("active");
        }
        else if (location.pathname === "/venue") {
            clearActive();
            venueref.current.classList.add("active");
        }
        else {
            clearActive();
        }
    }, [location]);

    return (
        <div className="navbar">
            <div className="navbar-logo">
                <Link
                    to="/"
                    ref={homeref}
                    className="active navbar-link"
                    id="Home-link"
                >
                    <img src={require("../Assets/logo_final.png")} alt="logo" />
                </Link>
            </div>
            <div className="navbar-links" ref={navbarref}>
                <Link
                    to="/"
                    ref={homeref}
                    className="active navbar-link"
                    id="Home-link"
                >
                    {/* {" "} */}
                    <i className="fa fa-home"></i>
                    <span>Home</span>
                </Link>
                <Link
                    to="about_us"
                    ref={aboutref}
                    className="navbar-link"
                    id="about_us-link"
                >
                    <i className="fa fa-info-circle"></i>
                    <span>About us</span>
                </Link>
                <Link to="events" ref={eventref} className=" navbar-link">
                    {/* {" "} */}
                    <i className="fa fa-calendar-minus"></i>
                    <span>Events</span>
                </Link>
                <Link to="venue" ref={venueref} className=" navbar-link">
                    {/* {" "} */}
                    <i class="fas fa-map-marker-alt mr-2 mb-3"></i>
                    <span style={{marginLeft: "2px"}}>Venue</span>
                </Link>
                <Link to="timeline" ref={timelineref} className="navbar-link">
                    {/* {" "} */}
                    <i className="fa fa-calendar-check"></i>
                    <span>Timeline</span>
                </Link>
                <Link to="web_devs" ref={webref} className="navbar-link">
                    <i className="fa fa-wifi"></i>
                    <span>Web devs</span>
                </Link>
                {/*
                    <Link to="gallery" ref={galref} className="navbar-link">
                        <i className="fa-brands fa-envira"></i>
                        <span>Gallery</span>
                    </Link>
                */}
                <Link to="committee" ref={commiteeref} className=" navbar-link">
                    <i className="fa fa-users"></i>
                    <span>Committee</span>
                </Link>
                <Link to="contact_us" ref={contactref} className=" navbar-link">
                    <i className="fa fa-headset"></i>
                    <span>Contact Us</span>
                </Link>
                <Link to="admin" ref={adminref} className=" navbar-link">
                    <i className="fa fa-user"></i>
                    <span>Admin</span>
                </Link>
            </div>
            {/* <div className="bottom-special" ref={hintref}></div> */}
        </div>
    );
}

export default Navbar;
