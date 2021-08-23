const listaObjetos1 = [
  {
    calificacion: 6,
    peso: 1
  },
  {
    calificacion: 7,
    peso: 1
  },
  {
    calificacion: 5,
    peso: 1
  },
  {
    calificacion: 7,
    peso: 1
  },
  {
    calificacion: 8,
    peso: 1
  },
  {
    calificacion: 6,
    peso: 5
  }
];

function calcularMediaPonderada ( lista ) {
  const listaSumaPesos = lista.map( e => e.calificacion * e.peso );
  const sumaTotal = listaSumaPesos.reduce( (x,y) => x+y );
  const listaPesos = lista.map( e => e.peso );
  const sumaPesos = listaPesos.reduce( (x,y) => x+y );

  return sumaTotal / sumaPesos;
}

// const listaSumaPesos = listaObjetos1.map( e => e.calificacion * e.peso );

// const sumaTotal = listaSumaPesos.reduce( (x,y) => x+y );

// const listaPesos = listaObjetos1.map( e => e.peso );

// const sumaPesos = listaPesos.reduce( (x,y) => x+y );

// const promedio = sumaTotal / sumaPesos;