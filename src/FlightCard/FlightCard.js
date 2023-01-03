import React from 'react'
import "./FlightCard.css"

const FlightCard = ({flight_date, flight_status, departure, arrival, airline, flight, aircraft, live}) => {
  const itinerary = (startingPoint) => {
    const scheduledDate = startingPoint.scheduled.split("T")
    const scheduledTime = scheduledDate[1].split("+")
    return <div className={`flightInfo`}>
                {startingPoint.airport ? <h4>{startingPoint.iata}</h4> : <h4>No Status yet</h4>}
                {startingPoint.delay && <p>Delay: {startingPoint.delay} minutes</p>}
                <p>{scheduledDate[0]} at {scheduledTime[0]}</p>
                {startingPoint.gate ? <p>Gate: {startingPoint.gate}</p> : <p>Gate: N/A</p>}
            </div>
  }
  
  return (
    <div className='flightCard'>
        {itinerary(departure)}
        {itinerary(arrival)}
    </div>
  )
}

export default FlightCard