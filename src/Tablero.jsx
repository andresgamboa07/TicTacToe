import React from 'react';
import Casilla from './Casilla';
import './App.css';

const Tablero = ({ casillas, manejarClick }) => {
  return (
    <div className="d-grid tablero">
      {casillas.map((valor, index) => (
        <Casilla key={index} valor={valor} onClick={() => manejarClick(index)} />
      ))}
    </div>
  );
};

export default Tablero;
