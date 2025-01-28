import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//Components
import Navbar from './Components/Navbar';
import events from '../src/Data/events';
//Screens
import Home from './Components/Screens/Home';
import AboutUs from './Components/Screens/AboutUs';
import ContactUs from './Components/Screens/ContactUs';
import Gallery from './Components/Screens/Gallery';
import Committee from './Components/Screens/Committee';
import Events from './Components/Screens/Events';
import Countdown from './Components/Screens/Countdown';
import Timelinex from './Components/Screens/Timelinex';
import WebDevs from './Components/Screens/WebDevs';
import Eventdetails from './Components/Screens/Eventdetails';
import Navmobile from './Components/Navmobile';
import Queries from './Components/Screens/Queries';
import Main1 from './Components/Screens/Main1';
import Update_event from './Components/Screens/Update_event';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getevent_details_data } from './Data/events_data';
import Admin from './Components/Screens/Admin';
import Venue from './Components/Screens/Venue';

const firebaseConfig = {
    apiKey: "AIzaSyCjDtQ-hsyXk876DZLyyeC6UpXMFFjF5EY",
    authDomain: "cryptera.firebaseapp.com",
    projectId: "cryptera",
    storageBucket: "cryptera.appspot.com",
    messagingSenderId: "797621842156",
    appId: "1:797621842156:web:d19c64d6002d3bb0b635c9"
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
export { db }

function App() {
    const [flag, setflag] = useState(true)
    useEffect(async () => {
        const getdata = async () => {
            let event_details = events
            localStorage.setItem("event_details", JSON.stringify(event_details))

        }
        await getdata()
        getevent_details_data()
        return () => {
            localStorage.removeItem("event_details")
        }
    }, [])
    const movetohomepage = () => {
        setflag(false)
    }
    if (flag && window.innerWidth > 1150) {
        return (
            <Main1 movetohomepage={movetohomepage} />
        )
    }
    return (
        <div className='main-container'>
            <BrowserRouter>
                {window.innerWidth > 1150 ? <Navbar /> : <Navmobile />}

                <div className='main-content'>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/about_us" element={<AboutUs />}></Route>
                        <Route path="/events" element={<Events />}></Route>
                        {/* <Route path="/timeline" element={<Countdown />}></Route> */}
                        <Route path="/timeline" element={<Timelinex />}></Route>
                        <Route path="/web_devs" element={<WebDevs />}></Route>
                        <Route path="/gallery" element={<Gallery />}></Route>
                        <Route path="/committee" element={<Committee />}></Route>
                        <Route path="/contact_us" element={<ContactUs />}></Route>
                        <Route path="/events/:name" element={<Eventdetails />}></Route>
                        <Route path="/admin" element={<Admin />}></Route>
                        <Route path="/venue" element={<Venue />}></Route>
                        <Route path='/access_code_8870' element={<Queries />}></Route>
                        <Route path='/access_code_8870499146_ji' element={<Update_event />}></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>

    );
}

export default App;