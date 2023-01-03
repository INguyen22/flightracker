import React from 'react'
import Loader from '../Loader/Loader'
import FlightCard from '../FlightCard/FlightCard'
import "./FlightsContainer.css"

const FlightsContainer = ({loading, flights}) => {
    const cards = flights.map(trip => {
        const {flight_date, flight_status, departure, arrival, airline, flight, aircraft, live} = trip
        return <FlightCard 
            key={Math.random()}
            flight_date={flight_date}
            flight_status={flight_status}
            departure={departure}
            arrival={arrival}
            airline={airline}
            flight={flight}
            aircraft={aircraft}
            live={live}
        />
    })
  return (
    <div className="widget">
        {loading && <Loader/>}
        {cards}
    </div>
  )
}

export default FlightsContainer