import React, { useEffect, useState } from "react";
import axios from "axios";
//import "./App.css";
const Report = () => {
  const [userdata, setUserdata] = useState([]);
  // const url = "http://localhost:3001/report";
  useEffect(()=>{
      axios.get("http://localhost:8080/report").then((res)=>{
          setUserdata(res.data)
          console.log(res.data)
      })
  },[])

  const onSubmit=(e)=>{
    const rno=e.target.regno

    const t=window.confirm("DO YOU WANT TO DELETE?")
    // console.log(data1)
    if(t){
      axios.post(`http://localhost:8080/delete/${rno}`)
    }
    else{

    }
  }  
  return (
    <div align="center">
      <h1 >RETRIVING DATA</h1>      
      <table>
        <tbody>
          <tr>
            <th>RegNo</th>
            <th>NAME</th>
            <th>DELETE</th>
          </tr>
          {
            userdata.map((val)=>{
              return(
                <tr key={val.regno}>
                  <td>{val.regno}</td>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <td>
                    <input type="submit" value="delete" onClick={onSubmit} id={val.regno}>
                  </input>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>      
    </div>
  );
};
export default Report;