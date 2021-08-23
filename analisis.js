// helpers
function esPar( numero ) {
  return (numero % 2 === 0);
}

// calculadora de mediana
function calcularMediana( lista ) {
  const mitad = parseInt(lista.length/2)

  if( esPar(lista.length) ){
    const personaMitad1 = lista[mitad];
    const personaMitad2 = lista[mitad-1];
    const mediana = (personaMitad1 + personaMitad2)/2;
    return mediana;
  } else {
    const personaMitad = lista[mitad];
    return personaMitad;
  }
}

// mediana general 
const salariosMex = mexico.map( e => e.salario );

const salariosMexOrdenado = salariosMex.sort( (x,y) => x-y );

const medianaGeneralMexico = calcularMediana(salariosMexOrdenado);

// mediana del top 10%
// existe otro metodo slice que lo que hace es extraer valores sin alterar el array original
const spliceStart = (salariosMexOrdenado.length * 90)/100;
const spliceCount = salariosMexOrdenado.length - spliceStart;
const salarios10Mex = salariosMexOrdenado.splice(spliceStart, spliceCount);

const medianaTop10 = calcularMediana(salarios10Mex);


// impresion en pantalla
console.log(
  medianaGeneralMexico,
  medianaTop10,
);