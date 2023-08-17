
import React from 'react';

function Card({ name, description }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Card;

