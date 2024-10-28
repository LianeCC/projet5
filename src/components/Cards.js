import React from 'react';
import logements from '../../data/logements.json';
import './Cards.scss';

const Cards = () => {
  return (
    <div className="card-container">
      {logements.map((logement) => (
        <div key={logement.id} className="card">
          <img src={logement.image} alt={logement.title} className="card-image" />
          <h3 className="card-title">{logement.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Cards;