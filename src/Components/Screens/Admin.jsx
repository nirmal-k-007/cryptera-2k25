import React, { useEffect, useState } from 'react';
import logo from "../../Assets/logo_final.png";
import "../../Styles/Admin.css";
import load from "../../Assets/loading.gif"
import { faL } from '@fortawesome/free-solid-svg-icons';

// const initialResponse = {
//     'All': 45,
//     'Attack on Anime': 13,
//     'Bgmi': 2,
//     'Blind Code': 27,
//     'Carrom': 6,
//     'Chess': 5,
//     'Clash of Code': 27,
//     'Coding Contest': 29,
//     'Css Battle': 26,
//     'Free Fire': 1,
//     'Jumbled Code': 33,
//     'Marvel/DC quiz': 9,
//     'Missing Code': 30,
//     'Movie quiz': 24,
//     'Oxedebug': 31,
//     'PC Building': 15,
//     'Poster Design': 13,
//     'Prompt Engineering': 13,
//     'Reverse Coding': 30,
//     'Sales Talk': 8,
//     'Tech Feud': 22,
//     'Type racer': 13,
//     'UI Design Contest': 15,
//     'Valorant': 3,
// }

const events = {
    'All': 'Main',
    'Oxedebug': 'Main',
    'Css Battle': 'Main',
    'Tech Feud': 'Main',
    'Blind Code': 'Main',
    'Jumbled Code': 'Main',
    'UI Design Contest': 'Main',
    'Missing Code': 'Main',
    'PC Building': 'Main',
    'Coding Contest': 'Main',
    'Prompt Engineering': 'Main',
    'Reverse Coding': 'Main',
    'Clash of Code': 'Main',
    'Tune Up': 'Tune Up',
    'Movie quiz': 'Main',
    'Poster Design': 'Main',
    'Poster Design (Online)': 'Online Poster & Typing',
    'Arts N Emotions': 'Arts N Emotions',
    'Spill Some Ink': 'Spill Some Ink',
    'Treasure Hunt': 'Main',
    'Marvel/DC quiz': 'Main',
    'Sales Talk': 'Main',
    'Type racer': 'Main',
    'Type Racer (Online)': 'Online Poster & Typing',
    'Snap Quest': 'Snap Quest',
    'Attack on Anime': 'Main',

    'Paper Presentation': 'Paper Presentation',
    'Free Fire': 'Free Fire',
    'Hackathon': 'Hackathon',
    'Valorant': 'Valorant',
    'Chess': 'Chess',
    'Bgmi': 'Bgmi',
    'Carrom': 'Carrom',
    'IPL Auction': 'IPL Auction',
    'Escape Room': 'Escape Room',

    'AR App': 'Workshop',
    'Startup': 'Workshop',
    'EV': 'Workshop',
    'ML': 'Workshop',
    'AIDS': 'Webinar',
    'Cloud Architecture': 'Webinar',
    'GenAI': 'Webinar'
}

const Admin = () => {
    const [selectedEvent, setSelectedEvent] = useState('');
    const [count, setCount] = useState(0);
    const [response, setResponse] = useState(null);
    const [eventResponses, setEventResponses] = useState({});
    const [passkey, setPasskey] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [filteredEvents, setFilteredEvents] = useState(Object.entries(events));

    const handleSearchChange = (e) => {
        const newSearchText = e.target.value.toLowerCase();
        setSearchText(newSearchText);
        const newFilteredEvents = Object.entries(events).filter(([event]) => {
            const eventWords = event.toLowerCase().split(' ');
            return eventWords.some(word => word.startsWith(newSearchText));
        });
        setFilteredEvents(newFilteredEvents);
    };

    const handleResetFilter = () => {
        setFilteredEvents(Object.entries(events));
    };

    const handleEventButtonClick = (event, value) => {
        handleEventSelection(event, value);
        handleResetFilter();
    };

    const startCountAnimation = (targetCount) => {
        const duration = 2000;
        const framesPerSecond = 30;
        const frameDuration = 1000 / framesPerSecond;
        const totalFrames = Math.round(duration / frameDuration);
        const countIncrement = (targetCount - count) / totalFrames;

        let currentFrame = 0;
        const interval = setInterval(() => {
            setCount((prevCount) => prevCount + countIncrement);
            currentFrame++;

            if (currentFrame === totalFrames) {
                setCount(targetCount);
                clearInterval(interval);
            }
        }, frameDuration);
    };

    const getTotalCount = () => {
        return response[selectedEvent] || 0;
    };

    useEffect(() => {
        if (isLoggedIn && isLoaded) {
            startCountAnimation(getTotalCount());
        }
    }, [selectedEvent, response]);

    const fetchData = async (event = "Main") => {
        if (eventResponses[event]) {
            setResponse(eventResponses[event]);
            setIsLoggedIn(true);
            setIsLoaded(true);
            return;
        }

        const url = "https://asia-south1-cryptera-414315.cloudfunctions.net/get_event_count";
        const data = {
            event: event,
            passkey: passkey,
        };
        // CrYpTeRa$#@!2K24

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                alert('Invalid Password!');
                setIsLoading(false);
                setIsLoaded(false);
            } else {
                const result = await response.json();
                console.log(result);

                setEventResponses(prevResponses => ({
                    ...prevResponses,
                    [event]: result,
                }));

                setResponse(result);
                setIsLoggedIn(true);
                setIsLoaded(true);
                console.log(eventResponses);
            }
        } catch (error) {
            console.error("Error:", error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleEventSelection = (event, value) => {
        console.log(event, value)
        setSelectedEvent(event)
        fetchData(value)
    }

    useEffect(() => {
        const handleEnterKeyPress = (e) => {
            if (e.key === 'Enter') {
                setIsLoading(true);
                if (passkey.includes("2K24")) {
                    fetchData();
                } else {
                    setTimeout(() => {
                        alert("Invalid Password !!!");
                        setIsLoading(false);
                    }, 0);
                }
            }
        };
        window.addEventListener('keydown', handleEnterKeyPress);
        return () => {
            window.removeEventListener('keydown', handleEnterKeyPress);
        };
    }, [passkey]);

    return (
        <div style={{ display: 'flex', width: '100%', height: '100%', alignItems: 'center', justifyItems: 'center', textAlign: 'center', backgroundColor: '', overflowX: "hidden" }}>
            {isLoggedIn ? (
                <div className='selection-container'>
                    <h2>Events</h2>
                    <input
                        type="text"
                        placeholder="Search Event Name..."
                        value={searchText}
                        onChange={handleSearchChange}
                    />
                    <div className='event-container' style={{ justifyContent: filteredEvents.length > 4 ? 'flex-start' : 'center' }}>
                        {filteredEvents
                            .map(([event, value]) => (
                                <button
                                    key={event}
                                    onClick={() => handleEventButtonClick(event, value)}
                                >
                                    {event}
                                </button>
                            ))}
                    </div>
                    <br /><br />
                    {(isLoaded && selectedEvent) ? (
                        <div className='count-card'>
                            <span>{selectedEvent}</span>
                            <div>
                                <p>
                                    {Math.round(count)}
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h2 style={{color:"white", fontSize:"20px"}}>Select an event</h2>
                            <img
                                src="https://i.pinimg.com/originals/54/3b/5b/543b5b21eac1cbae1f00ea336a51dd7d.gif"
                                alt="Select event"
                                width={"350px"}
                                height={"350px"}
                                style={{borderRadius:"10px"}}
                            />
                        </div>
                    )}
                </div>
            ) : (
                <div className='admin-container'>
                    <h2>Admin</h2>
                    <img
                        src={logo}
                        alt="logo"
                    />
                    <label>
                        <input
                            type="password"
                            value={passkey}
                            onChange={(e) => setPasskey(e.target.value)}
                            placeholder="Enter passkey..."
                        />
                    </label>
                    {isLoading && (
                        <div className="loading-container">
                            <img src={load} alt="Loading" />
                            <p>Loading...</p>
                        </div>
                    )}
                    <br />
                </div>
            )}
        </div >
    );
}

export default Admin;