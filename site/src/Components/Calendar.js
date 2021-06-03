import React from 'react'
import './calendar.css'
import Events from './Events'

function Calendar() {
  return (
    <div className="fully">
    
      <iframe className="iframec" src="https://calendar.google.com/calendar/embed?src=14rpkjt1vke3es9mio4e9378ts%40group.calendar.google.com&ctz=Africa%2FNairobi" ></iframe>
      <Events/>
  </div>
  )
}

export default Calendar

