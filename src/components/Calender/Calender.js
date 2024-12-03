import './Calender.css';
import React, { useState, useEffect } from 'react';
import phases from '../../Asserts/Phases.js'


function Calendar({ selectedPhase }) {
  const [currentDate, setCurrentDate] = useState(new Date(phases[selectedPhase].startDate));

  
  useEffect(() => {
    setCurrentDate(new Date(phases[selectedPhase].startDate));
  }, [selectedPhase]);
  return (
    <div className='calender'>
    <p>hello</p>
    <p>hello</p>
    <p>hello</p>
    <p>hello</p>

  </div>


  )
  


  
}

export default Calendar;