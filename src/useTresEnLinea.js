import { useState } from 'react';

const useTresEnLinea = () => {
  const [turno, setTurno] = useState('X');
  const [casillas, setCasillas] = useState(Array(9).fill(null));
  const [ganador, setGanador] = useState(null);
  
  //const [estado, setEstado] = useState(valorInicial);
  //estado: es el valor actual del estado 
  //setEstado: es la función para actualizar ese estado.
  //valorInicial: es el valor inicial que tendrá el estado

  const revisarGanador = (nuevoTablero) => {
    const lineas = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // filas
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columnas
      [0, 4, 8], [2, 4, 6],           // diagonales
    ];

    for (let [a, b, c] of lineas) {
      if (nuevoTablero[a] && nuevoTablero[a] === nuevoTablero[b] && nuevoTablero[a] === nuevoTablero[c]) {
        //Comprueba que la casilla a no esté vacía.
        //Comprueba que a == b y a == c, es decir, que las tres casillas tengan el mismo valor.
        return nuevoTablero[a];
        //Devuelve 'X' o 'O', que es quien tiene esas tres casillas alineadas.
      }
      
    }
    return null;
    //Si nadie ha ganado después de revisar todas las combinaciones, devuelve null.
  };

  const manejarClick = (index) => {
    if (casillas[index] || ganador) return; //Previene acciones innecesarias. Si ya hay algo, no se hace nada.

    const nuevoTablero = [...casillas]; //Copia del estado actual del tablero
    nuevoTablero[index] = turno; //Coloca el símbolo del jugador actual en la casilla clickeada.
    setCasillas(nuevoTablero); //Actualiza el estado del tablero.

    const hayGanador = revisarGanador(nuevoTablero);
    if (hayGanador) { 
      setGanador(hayGanador); //Si hay un ganador, se actualiza el estado ganador.
    } else if (!nuevoTablero.includes(null)) {
      // No hay ganador y ya no quedan espacios vacíos
      setGanador('Tie');
    } else { //Si no hay ganador, entonces se cambia el turno al otro jugador.
      setTurno(turno === 'X' ? 'O' : 'X');
      //Si turno es igual a 'X', devuelve true.
      //Si es true, se ejecuta lo que está después del ?, o sea 'O'. (lo cambia a 'O')
      //Si es false, se ejecuta lo que está después del :, o sea 'X'. (lo cambia a 'X')
    }
  };

  const reiniciar = () => {
    setCasillas(Array(9).fill(null));
    setTurno('X');
    setGanador(null);
  };

  return {
    turno,
    casillas,
    ganador,
    manejarClick,
    reiniciar,
  };
};

export default useTresEnLinea;
