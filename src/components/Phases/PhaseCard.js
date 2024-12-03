import React from 'react';
import phases from '../../Asserts/Phases.js';
import './PhaseCard.css';

function PhaseCard({phases}) {
  return (
    <div className="phase-card">
      <h2>{phases.name}</h2>
      <ul>
        {phases.activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
}

export default PhaseCard;