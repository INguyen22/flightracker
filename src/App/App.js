import React, { useState, useEffect } from "react";
import miniPlane from "../Images/mini_plane.png"
import FlightsContainer from "../FlightsContainer/FlightsContainer";
import "./App.css"
import mockData from "../mockData.js"
//process.env.REACT_APP_API_KEY should not define anything anyway, just fetching data takes ten years, fetching data does work

const App = () => {
  const [loading, setLoading] = useState(true)
  const [flights, setFlights] = useState([])
  let today = new Date().toLocaleDateString()
//   useEffect(() => {
//     // Real-Time Flights (For the free subscription the request should be done using http and not https in the link below)
//     fetch(`http://api.aviationstack.com/v1/flights?access_key=${process.env.REACT_APP_YOUR_ACCESS_KEY}`, {
//          method: "GET",
//    })
//   .then(res => res.json())
//   .then(data => {
//     console.log(data)
//     setFlights(data.data)
//     setLoading(false)
//   })
// })

useEffect(() => {
  //settime out for temperary use to not use up api usage
  setTimeout(() => {
    setLoading(false)
    setFlights(mockData)
  }, 5000)
})

  return (
    <div className="app">
      <h1>Today's Flights on: {today}</h1>
      <FlightsContainer loading={loading} flights={flights}/>
      <div className="planeContainer">
        <img className="plane" src={miniPlane}/>
      </div>
    </div>
  )
}

export default App;
