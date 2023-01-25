import React from 'react';
import homepic from './homepic.jpg';
import ac1 from './ac1.jpg';
import ac2 from './ac2.jpg';
import ac3 from './ac3.jpg';
import "./style.css";
import { useNavigate } from 'react-router-dom';
const Home = () => {
                  const nav=useNavigate()
  const handle=()=>{
    nav('Hostel');
  }
  const nav1=useNavigate()
    const handle1=()=>{
        nav('Srujana');
  }
    return (
        <div> 
         <img  className="img"src={homepic} id="img" alt="img" ></img>
         <div class="centered"><h1> Hostel Allotment</h1></div><br/>
         <font size="+3">AC Hostels:</font>
        
         <div class="disabled medium ui image">
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;     &nbsp;&nbsp; 
  <img src={ac1} id="img" alt="img"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src={ac2} id="img" alt="img"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src={ac3} id="img" alt="img"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div><br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="ui blue button"  onClick={handle}>Rajeshwari</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="ui blue button" onClick={handle}>Srujana</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="ui blue button" onClick={handle}>Sadhana</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="ui blue button" onClick={handle}>Medha</button>
       <br/>
       <font size="+3">Non-AC Hostels:</font>
       <div class="disabled medium ui image">
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;     &nbsp;&nbsp; 
  <img src={ac1} id="img" alt="img"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src={ac2} id="img" alt="img"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src={ac3} id="img" alt="img"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div><br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
        <button class="ui blue button" onClick={handle}>Rajeshwari </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="ui blue button" onClick={handle1}>Neelima</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="ui blue button" onClick={handle1}>Narmada</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="ui blue button" onClick={handle1}>Green Meadows</button><br/>
        <div className='form'>
        <font size="+3">Instructions:</font>
       
        <ul>
            <li>Both AC and Non-AC hostels are present.</li>
            <li>AC hostels costs 120000 per year</li>
            <li>Non-AC hostels costs 79000 per year for attached washrooms</li>
            <li>Non-AC hostels costs 79000 per year for common washrooms</li>
        </ul>
        </div>
        </div>
    );
};

export default Home