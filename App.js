import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './component/Home.js';
import Pagenotfound from "./component/Pagenotfound.js";
import Bed from './component/Bed.js';
import Hostel from './component/Hostel.js';
import Srujana from './component/Srujana.js';
import Warden from './component/Warden.js';
import Form from './component/Form.js';
import Report from './component/Report.js';
import "./component/style.css";
const App = () => {
    return (
        <div>
            <Routes>
            <Route path='*' element={<Pagenotfound />} />
                <Route path='home' element={<Home />} />
                <Route path='home/hostel' element={<Hostel/>} />
                <Route path='home/srujana' element={<Srujana/>} />
                <Route path='home/hostel/bed' element={<Bed/>} />
                 <Route path='home/srujana/bed' element={<Bed/>} /> 
                 <Route path='warden' element={<Warden/>} />
                 <Route path='form' element={<Form/>} />
                 <Route path='report' element={<Report/>} />
            </Routes>

        </div>

    );
};
export default App;