
import './PhaseButton.css';
import phases from '../../Asserts/Phases.js';
import React, { useState } from 'react';

function PhaseButton({ onPhaseChange }) {
  const [currentPhase, setCurrentPhase] = useState(0);

  const handleClick = () => {
    const nextPhase = (currentPhase + 1) % phases.length;
    setCurrentPhase(nextPhase);
    onPhaseChange(nextPhase);
  };

  return (
    <button onClick={handleClick}>Next Phase</button>
  );
}

export default PhaseButton;