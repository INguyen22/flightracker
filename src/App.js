import React, { useState, useEffect } from "react";
import miniPlane from "./mini_plane.png"
import "./App.css"
//process.env.REACT_APP_API_KEY should not define anything anyway, just fetching data takes ten years, fetching data does work

const App = () => {

//   const [flights, setFlights] = useState("")
//   useEffect(() => {
//     // Real-Time Flights (For the free subscription the request should be done using http and not https in the link below)
//        fetch(`http://api.aviationstack.com/v1/flights?access_key=${process.env.REACT_APP_YOUR_ACCESS_KEY}`, {
//          method: "GET",
//    })
//   .then(res => res.json())
//   .then(data => console.log(data))
// })
  return (
    <div className="app">
      <div className="planeContainer">
        <img className="plane" src={miniPlane}/>
      </div>
      <h1>Flight Tracker</h1>
      <div className="widget">

      </div>
    </div>
  )
}

export default App;
