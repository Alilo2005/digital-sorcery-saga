
import React, { useState, useEffect } from 'react';
import phases from '../../Asserts/Phases.js'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isToday, isSameDay } from 'date-fns';
import CreatingCalendar from './CreatingCalendar';


function CalendarAgenda({ selectedPhase }) {
  const [currentDate, setCurrentDate] = useState(new Date());
 


  useEffect(() => {
    setCurrentDate(new Date(phases[selectedPhase].startDate));
  }, [selectedPhase]);
  const renderTileContent = (date) => {
    const phase = phases.find((phase) => {
      return isSameDay(date, new Date(phase.startDate)) || isSameDay(date, new Date(phase.endDate));
    });

    return phase ? (
      <div className="phase-date">{format(date, 'dd/MM/yyyy')}</div>
    ) : null;
  };

  return (
   

      <div className='calender'>
        <Calendar
          onChange={setCurrentDate}
          value={currentDate}
          minDate={startOfMonth(new Date(phases[selectedPhase].startDate))}
          maxDate={endOfMonth(new Date(phases[selectedPhase].endDate))}



        />
        {/* <CreatingCalendar/> */}
      </div>

  


  )




}

export default CalendarAgenda;











