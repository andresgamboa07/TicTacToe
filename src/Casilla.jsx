import React from 'react';

const Casilla = ({ valor, onClick }) => {
  // Estilos para el botón
  const estiloBoton = {
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    border: 'none',
    borderRadius: '20px',
  };

  return (
    <button className="btn btn-outline-dark apretar-casilla" style={estiloBoton} onClick={onClick}>
      {valor && (
        <img
          src={valor === 'X' ? '/imagenes/X.png' : '/imagenes/O.png'}
          alt={valor}
          style={{ width: '90%', height: '90%', objectFit: 'contain' }}
        />
      )}
    </button>
  );
};

export default Casilla;
