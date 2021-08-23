
function calcularMediaAritmetica( lista ) {
  // let sumaLista = 0;
  // for( let numero of lista ) {
  //   sumaLista += numero;
  // }

  // const sumaLista = lista.reduce( function( valorAcumulado = 0, nuevoElemento ) {
  //   return valorAcumulado + nuevoElemento;
  // });

  const sumaLista = lista.reduce( (x,y) => Number(x) + Number(y) );

  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

function calcularPromedio() {
  const texto = document.getElementById("InputPromedio").value;
  let arrayNumeros = texto.split(",");

  const media = calcularMediaAritmetica(arrayNumeros);

  const parrafo = document.getElementById("ResultAverage");

  parrafo.innerText = "El promedio es igual a " + media;

}