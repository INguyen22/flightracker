import React from 'react'
import Loader from '../Loader/Loader'
import "./FlightsContainer.css"

const FlightsContainer = ({loading}) => {
  return (
    <div className="widget">
        {loading && <Loader/>}
    </div>
  )
}

export default FlightsContainer