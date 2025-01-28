import React, { useRef, useState, useEffect } from 'react';
import Eventcard from '../Eventcard';
import '../../Styles/Events.css';
import { useLocation } from 'react-router-dom';
import { TbReportMoney } from 'react-icons/tb';

function Events() {
    const location = useLocation();
    const [curr, setcurr] = useState(0);
    const technicalref = useRef(null);
    const nontechnicalref = useRef(null);
    const flagshipref = useRef(null);
    const bodyref = useRef(null);
    const [event_data, seteventdata] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('event_details'));
        seteventdata(data);

        // Read the category from the query parameter in the URL
        const searchParams = new URLSearchParams(location.search);
        const category = searchParams.get('category');

        // Set the appropriate current category based on the query parameter
        switch (category) {
            case 'Technical':
                setcurr(0);
                break;
            case 'Non-Technical':
                setcurr(1);
                break;
            case 'Flagship':
                setcurr(2);
                break;
            default:
                // Default to the first category if no category is specified in the URL
                setcurr(0);
                break;
        }
    }, [location.search]);

    const clearstyles = () => {
        nontechnicalref.current.style.color = "transparent";
        flagshipref.current.style.color = "transparent";
        technicalref.current.style.color = "transparent";
        technicalref.current.classList.remove("activex");
        nontechnicalref.current.classList.remove("activex");
        flagshipref.current.classList.remove("activex");
    };

    const technicalclick = () => {
        clearstyles();
        setcurr(0);
        technicalref.current.style.color = "var(--fg-white)";
        technicalref.current.classList.add("activex");
    };

    const nontechnicalclick = () => {
        clearstyles();
        setcurr(1);
        nontechnicalref.current.style.color = "var(--fg-white)";
        nontechnicalref.current.classList.add("activex");
    };

    const flagshipclick = () => {
        clearstyles();
        setcurr(2);
        flagshipref.current.style.color = "var(--fg-white)";
        flagshipref.current.classList.add("activex");
    };

    return (
        <div className="events">
            <div className='events-header'>
                <h1 ref={technicalref} onClick={technicalclick} className={curr === 0 ? 'activex' : ''}>Technical</h1>
                <h1 ref={nontechnicalref} onClick={nontechnicalclick} className={curr === 1 ? 'activex' : ''}>Non-Technical</h1>
                <h1 ref={flagshipref} onClick={flagshipclick} className={curr === 2 ? 'activex' : ''}>Flagship</h1>
            </div>

            <div className='events-body' ref={bodyref}>
                <div style={{ "display": "flex", "width": "100%", "justifyContent": "left", alignItems: "center" }}>
                    <TbReportMoney style={{ fontSize: "30px" }}></TbReportMoney>
                    <p style={{ fontWeight: "500", color: "#05ffa3" }}>&ensp;Events included in general event fee</p>
                </div>
                {
                    event_data.map((data, index) => {
                        if ((data.type === "technical" && curr === 0) ||
                            (data.type === "non_technical" && curr === 1) ||
                            (data.type === "flagship" && curr === 2)) {
                            return (
                                <Eventcard primary={data.color} data={data} key={index} status={data.status === 1 ? data.status : undefined} />
                            );
                        } else {
                            return null;
                        }
                    })
                }
                <div className='px-10'></div>
            </div>
        </div>
    );
}

export default Events;

const Technical = () => {
    return (
        <div className="technical">
            Technical
        </div>
    );
};

const Nontechnical = () => {
    return (
        <div>
            Non technical
        </div>
    );
};

export { Technical, Nontechnical };
