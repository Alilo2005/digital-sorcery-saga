import React from 'react';
import './PhaseCard.css';

function PhaseCard({ phases }) {
  return (
    <div className="phase-card">
      <h2>{phases.name}</h2>
      <hr></hr>

      <ul>
        <div className='activities'>
          {phases.activities.map((activity, index) => (
            <  >
              <li className='activity' key={index}>
                <label htmlFor={`activity-${index}`}>
                  {activity}

                  <input className='checkbox' type="checkbox" id={`activity-${index}`} />
                </label>
              </li>

            </>











          ))}
        </div>


      </ul>
    </div>
  );
}

export default PhaseCard;