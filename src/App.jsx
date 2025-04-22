import React from 'react';
import Tablero from './Tablero';
import 'bootstrap/dist/css/bootstrap.min.css';
import useTresEnLinea from './useTresEnLinea';
import './App.css';

const App = () => {
  const {
    turno,
    casillas,
    ganador,
    manejarClick,
    reiniciar,
  } = useTresEnLinea();

  return (
    <div className="container-fluid text-center mt-2 p-0">
      <h1 className="display-5" style={{ color: 'white', margin: 0 }}><strong>Tic-Tac-Toe</strong></h1>
      
      <p className="lead">
        {ganador ? (
          ganador === 'Tie' ? (
            <strong>It's a tie!</strong>
          ) : (
            <strong>{ganador} won!</strong>
          )
        ) : (
          <strong>{turno}'s turn</strong>
        )}
      </p>

      <Tablero casillas={casillas} manejarClick={manejarClick} />
      <button className="btn btn-primary mt-3 mb-2 rounded-pill boton-reinicio" onClick={reiniciar}>Restart</button>
      <div className="row mt-2">
        <span class="badge"><strong>Made by Andrés Gamboa Chacón</strong></span>
      </div>
      
    </div>
  );
};

export default App;


