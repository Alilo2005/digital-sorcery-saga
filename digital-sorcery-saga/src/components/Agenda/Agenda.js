import React, { useState } from 'react';
import CalendarAgenda from './Calender/CalenderAgenda.js'
import PhaseButton from './Button/PhaseButton.js';
import phases from './Phases.js'
import PhaseCard from './Phases/PhaseCard.js';
import './Agenda.css';

const Agenda = () => {
  const [selectedPhase, setSelectedPhase] = useState(0);

  const handlePhaseChange = (index) => {
    setSelectedPhase(index);
  };

  return (

    <div className='Agenda'>
      <p className='title'>Agenda</p>
      <div className='Phases_calendar'>




        <CalendarAgenda />
        <PhaseCard phases={phases[selectedPhase]} />
      </div>
      <PhaseButton onPhaseChange={handlePhaseChange} />






    </div>


  )
}

export default Agenda;