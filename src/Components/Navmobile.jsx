import React, { useRef, useState, useEffect } from "react";
import "../Styles/ComponentsStyles/Navmobile.css";
import Logo from "../Assets/logo_final.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
function Navmobile() {
    const sidenavref = useRef();
    const [open, setopen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const homeref = useRef(null);
    const timelineref = useRef(null);
    const aboutref = useRef(null);
    const contactref = useRef(null);
    const eventref = useRef(null);
    const commiteeref = useRef(null);
    // const hintref = useRef(null);
    const linkxref = useRef(null);
    const sociallinksref = useRef(null);
    const webref = useRef(null);
    const adminref = useRef(null);
    const venueref = useRef(null);

    const clickhandler = () => {
        linkxref.current.style.display = "flex";
        sociallinksref.current.style.display = "block";
        sociallinksref.current.style.overflow = "hidden";
    };
    const toggleMenu = () => {
        sidenavref.current.classList.toggle("activeo");
        setopen(!open);
    };
    const closenav = () => {
        clickhandler();
    };
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
        closenav();
        if (location.pathname === "/") {
            clearActive();
            homeref.current.classList.add("active");
            homeref.current.classList.add("active");

            // hintref.current.innerHTML = "Scroll";
            // hintref.current.addEventListener("click", () => { });
        } else if (location.pathname.includes("/events")) {
            clearActive();
            eventref.current.classList.add("active");
            if (location.pathname === "/events") {
                // hintref.current.innerHTML = "Web devs";
                // hintref.current.addEventListener("click", () => {
                //     navigate("/gallery");
                // });
            } else {
                closenav();
                // hintref.current.innerHTML = "Back";
                // hintref.current.addEventListener("click", () => {
                //     navigate("/events");
                // });
            }
        } else if (location.pathname === "/about_us") {
            clearActive();
            aboutref.current.classList.add("active");
            // hintref.current.innerHTML = "Events";
            // hintref.current.addEventListener("click", () => {
            //     navigate("/events");
            // });
        } else if (location.pathname === "/contact_us") {
            clearActive();
            contactref.current.classList.add("active");
            // hintref.current.innerHTML = "To top";
            // hintref.current.addEventListener("click", () => {
            //     navigate("/");
            // });
        } else if (location.pathname === "/events") {
            clearActive();
            eventref.current.classList.add("active");
            closenav();
        }
        else if (location.pathname === "/venue") {
            clearActive();
            venueref.current.classList.add("active");
        }
        else if (location.pathname === "/timeline") {
            clearActive();
            timelineref.current.classList.add("active");
            // hintref.current.innerHTML = "Web devs";
            // hintref.current.addEventListener("click", () => {
            //     navigate("/gallery");
            // });
        } 
        // else if (location.pathname === "/gallery") {
        //     clearActive();
            // hintref.current.innerHTML = "Committee";
            // hintref.current.addEventListener("click", () => {
            //     navigate("/committee");
            // });
        // }
         else if (location.pathname === "/web_devs") {
            clearActive();
            webref.current.classList.add("active");
            // hintref.current.innerHTML = "Committee";
            // hintref.current.addEventListener("click", () => {
            //     navigate("/committee");
            // });
        } else if (location.pathname === "/committee") {
            clearActive();
            commiteeref.current.classList.add("active");
        }
        else if (location.pathname === "/admin") {
            clearActive();
            adminref.current.classList.add("active");
        }
        else {
            clearActive();
        }
    }, [location]);

    useEffect(() => {
        closenav();
    }, []);

    return (
        <>
            <div>
                <div className="sidenav" ref={sidenavref}>
                    <div className="close-btn-x" onClick={toggleMenu}>
                        <i className="fas fa-times"></i>
                    </div>
                    {/*<div className="hint" ref={hintref}></div>*/}

                    <div className="linkx" ref={linkxref}>
                        <Link
                            onClick={toggleMenu}
                            to="/"
                            ref={homeref}
                            className=" navbar-linkx"
                            id="Home-link"
                        >
                            {" "}
                            <i className="fa fa-home"></i>
                            <span>Home</span>
                        </Link>
                        <Link
                            to="about_us"
                            ref={aboutref}
                            id="about_us"
                            className="navbar-linkx"
                            onClick={toggleMenu}
                        >
                            <i className="fa fa-info-circle"></i>
                            <span>About us</span>
                        </Link>
                        <Link
                            onClick={toggleMenu}
                            to="events"
                            ref={eventref}
                            className=" navbar-linkx"
                        >
                            {" "}
                            <i className="fa fa-calendar-minus"></i>
                            <span>Events</span>
                        </Link>
                        <Link
                            onClick={toggleMenu}
                            to="venue"
                            ref={venueref}
                            className=" navbar-linkx"
                        >
                            {" "}
                            <i class="fas fa-map-marker-alt mr-2 mb-3"></i>
                            <span>Venue</span>
                        </Link>

                        <Link
                            onClick={toggleMenu}
                            to="timeline"
                            ref={timelineref}
                            className=" navbar-linkx"
                        >
                            {" "}
                            <i className="fa fa-calendar-check"></i>
                            <span>Timeline</span>
                        </Link>
                        {/*
                            <Link
                                        onClick={toggleMenu}
                                        to="gallery"
                                        ref={galref}
                                        className="navbar-linkx"
                                        >
                                        <i className="fa-brands fa-envira"></i>
                                        <span>Gallery</span>
                            </Link>
                        */}
                        <Link
                            onClick={toggleMenu}
                            to="web_devs"
                            ref={webref}
                            className="navbar-linkx"
                        >
                            <i className="fa fa-wifi"></i>
                            <span>Web devs</span>
                        </Link>
                        <Link
                            onClick={toggleMenu}
                            to="committee"
                            ref={commiteeref}
                            className=" navbar-linkx"
                        >
                            <i className="fa fa-users"></i>
                            <span>Committee</span>
                        </Link>
                        <Link
                            onClick={toggleMenu}
                            to="contact_us"
                            ref={contactref}
                            className=" navbar-linkx"
                        >
                            <i className="fa fa-headset"></i>
                            <span>Contact Us</span>
                        </Link>
                        <Link onClick={toggleMenu} to="admin" ref={adminref} className=" navbar-linkx">
                            <i className="fa fa-user"></i>
                            <span>Admin</span>
                        </Link>
                        <div>
                            <div className="social-linksx" ref={sociallinksref}>
                                <a
                                    href="https://www.instagram.com/cryptera_2k24?igsh=MTQ3aGF3MHlrNHNyaA=="
                                    style={{ padding: "10px" }}
                                >
                                    <i className="fab fa-instagram"></i>
                                </a>

                                <a
                                    style={{ padding: "10px" }}
                                    href="https://www.youtube.com/channel/UCsiIbEbaefrwPFmJ_cxwoJg"
                                >
                                    <i className="fab fa-youtube"></i>
                                </a>
                                <a
                                    style={{ padding: "10px" }}
                                    href="mailto:cryptera.cit@gmail.com"
                                >
                                    <i className="fa-solid fa-envelope"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav-mobile">
                    <div onClick={toggleMenu} className="close-btn">
                        <i className="fas fa-bars"></i>
                    </div>
                    <div className="logo-x">
                        <Link to="/" ref={homeref} className=" navbar-linkx" id="Home-link">
                            <img src={Logo} alt="logo" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navmobile;
