
// const lista1 = [1,2,3,4,3,2,3,5,7,8,4,2,9,22,34,22,3];

// const lista1Count = {};

// lista1.map( function(elemento) {
//   if( lista1Count[elemento] ){
//     lista1Count[elemento] += 1;
//   } else {
//     lista1Count[elemento] = 1;
//   }
// });

// const lista1Array = Object.entries(lista1Count); // necesitamos un array para usar el metodo sort

// // lista1Array.sort( function(x, y) {
// //   if( x[1] < y[1] ){
// //     return -1;
// //   } else return 1;
// // });

// lista1Array.sort( (x,y) => x[1]-y[1] );

// // const moda = lista1Array.pop();

// const moda = lista1Array[lista1Array.length - 1];


function calcularModa ( lista ) {
  const listaCount = {};

  lista.map( function(elemento) {
    if( listaCount[elemento] ){
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  });

  listaArray = Object.entries(listaCount);

  listaArray.sort( (x, y) => x[1] - y[1] );

  return listaArray[listaArray.length-1];
}

function calcularModaHTML() {
  const texto = document.getElementById("InputModa").value;
  let arrayNumeros = texto.split(",");

  const moda = calcularModa(arrayNumeros);

  const parrafo = document.getElementById("ResultModa");

  parrafo.innerText = "La moda es igual a " + moda[0];

}