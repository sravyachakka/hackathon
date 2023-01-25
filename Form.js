import React, { useState } from "react";
import Axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
  

const Form = () => {
                  const nav=useNavigate()
  const back=()=>{
                  nav('Home')
  }
  const notify=()=>toast("inserted successfully");
  const [first, setfirst] = useState("");
  const [reg,setReg]=useState("")

  const handle = (e) => {
    e.preventDefault();

    const m=window.confirm("do you want to insert..?");
    if(m)
    {
    
    Axios.post("http://localhost:8080/signup", {
      firstname: first,
      reg:reg
    }).then(function(response) {
      console.log(response);
      alert("success");
    });
  }
  else{
  }
  };
  
  return (
    <div align="center">
      <div className="form">
        <div className="ui cards">
          <form className=" ui form" onSubmit={handle}>
            <div className="sixteen wide field">
                  <h1>Details to be filled:</h1>
              <label htmlFor=""></label>
              <input type="text" placeholder="Registration no" onChange={(e)=>{
                setReg(e.target.value)
              }}/>
            </div><br/>
            <div className="sixteen wide field">
              <label htmlFor=""></label>
              <input type="text" placeholder="Name" onChange={(e)=>{
                setfirst(e.target.value)
              }}/>
            </div><br/>
            
              <input type="text" placeholder="Email"/><br/><br/>
              <input type="text" placeholder="Phone Number"/><br/><br/>
              <input type="text" placeholder="Fathers Name"/><br/><br/>
              <input type="text" placeholder="Address"/><br/><br/>
            <button className="ui primary button" type="submit" onClick={()=>{notify()}}>SUBMIT
            </button>
            &nbsp;<button onClick={back}>Back</button>
            <ToastContainer/>
        
          </form>
        </div>
      </div>
    </div>
  );
};
export default Form;