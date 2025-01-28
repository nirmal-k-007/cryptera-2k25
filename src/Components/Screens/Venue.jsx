import React, { useState, useEffect } from 'react';
import "../../Styles/Venue.css";
import logo from "../../Assets/logo_final.png";
import load from "../../Assets/loading.gif";
const Venue = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [fetchedData, setFetchedData] = useState(null);

    useEffect(() => {
        const processedEmail = email.replace(/\./g, '_');
        const fetchData = async () => {
            if (processedEmail) {
                setIsLoading(true);
                try {
                    const response = await fetch(`https://cryptera-414315-default-rtdb.asia-southeast1.firebasedatabase.app/${processedEmail}.json`);
                    if (response.ok) {
                        const data = await response.json();
                        setFetchedData(data);
                        console.log('Fetched Data:', data);
                    } else {
                        console.error('Failed to fetch data. HTTP Status:', response.status);
                    }
                } catch (error) {
                    console.error('Error fetching data:', error.message);
                } finally {
                    setIsLoading(false);
                }
            }
        };
        fetchData();
    }, [email]);

    return (
        <div className='venue-main-container'>
            {fetchedData ? (
                <div className='venue-container'>
                    <h2 style={{fontSize: "40px"}}>Your Venue for Events</h2>
                    <div className='venue-card' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                        {fetchedData.events.map((event, index) => (
                            // style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', margin: '10px', maxWidth: '300px', textAlign: 'left' }}
                            <div key={index} className="tile">
                                <div>
                                    <div className='name'>
                                        {event.name}
                                    </div>
                                    <div className='time'>
                                        <i className="fas fa-calendar-week mr-2 mb-3"></i>
                                        {event.time}
                                    </div>
                                </div>
                                <div className="venue" style={{textAlign: "center"}}>
                                    <i class="fas fa-map-marker-alt mr-2 mb-3"></i>
                                    {event.venue}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className='admin-container'>
                    <h2>Know Your Venue</h2>
                    <img
                        src={logo}
                        alt="logo"
                    />
                    <label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email..."
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
        </div>
    );
}

export default Venue;
