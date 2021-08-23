// const lista1 = [
//   100,
//   200,
//   300,
//   429392,
//   400
// ];

// const mitadLista = lista1.length/2;
// let mediana = 0;
// mitadLista % 2 == 0 ?  mediana = (lista1[mitadLista] + lista1[mitadLista-1]) / 2 : mediana = lista1[Math.floor(mitadLista)]; // tambien se puede usar parseInt
// console.log(mediana);


function medianaLista ( lista ) {
  // lista.sort( function(a, b) {
  //   if( a < b ){
  //     return -1; // -1 para que regrese primero a y luego b
  //   } else return 1; // 1 para que regrese primero b y luego a 
  // });

  lista.sort( (a, b) => a - b ); // otra forma de escribir la función flecha para numeros solamente

  const mitadLista = lista.length/2;
  let mediana = 0;
  lista.length % 2 == 0 ? mediana = (lista[mitadLista] + lista[mitadLista-1]) / 2 : mediana = lista[Math.floor(mitadLista)]; // tambien se puede usar parseInt

  return mediana;
}

function calcularMediana() {
  const texto = document.getElementById("InputMediana").value;
  let arrayNumeros = texto.split(",");

  const mediana = medianaLista(arrayNumeros);

  const parrafo = document.getElementById("ResultMediana");

  parrafo.innerText = "La mediana es igual a " + mediana;

}