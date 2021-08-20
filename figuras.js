
function calcularPerimetroCuadrado() {
  let input = document.getElementById("InputCuadrado"); // mandamos llamar todo el input, es decir, nos regresa <input id="InputCuadrado" type="number"> porque ahí está el id
  let value = Number(input.value); // con esto asignamos el valor que tiene el input

  let perimetro = value * 4;
  alert(perimetro);
}

function calcularAreaCuadrado () {
  let input = document.getElementById("InputCuadrado");
  let value = input.value;

  let area = value ** 2;
  alert(area);
}


function calcularPerimetroTriangulo() {
  let InputLado1 = document.getElementById("InputTrianguloLado1");
  let lado1 = Number(InputLado1.value);
  let InputLado2 = document.getElementById("InputTrianguloLado2");
  let lado2 = Number(InputLado2.value);
  let InputBase = document.getElementById("InputTrianguloBase");
  let base = Number(InputBase.value);

  let perimetro = lado1 + lado2 + base;
  alert(perimetro)
}

function calcularAreaTriangulo() {
  let InputBase = document.getElementById("InputTrianguloBase");
  let base = Number(InputBase.value);
  let InputAltura = document.getElementById("InputTrianguloAltura");
  let altura = Number(InputAltura.value);

  let area = (base * altura)/2;
  alert(area);
}


function calcularPerimetroCirculo() {
  let radio = document.getElementById("InputCirculo").value;

  let perimetro = (radio*2) * Math.PI;
  alert(perimetro);
}

function calcularAreaCirculo () {
  let radio = document.getElementById("InputCirculo").value;

  let area = (radio ** 2) * Math.PI;
  alert(area);
}


function calcularAlturaTriangulo() {
  lado1 = document.getElementById("InputIsocelesLado1").value;
  lado2 = document.getElementById("InputIsocelesLado2").value;
  base = document.getElementById("InputIsocelesBase").value;

  if ( lado1 != lado2 ) {
    alert("Los lados A y B no son iguales");
  } else {
    const trianguloPequenoLadoB = base / 2;
    const trianguloPequenoLadoBase = lado1;
    const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB ** 2;
    const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase ** 2;
    let trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);
    const trianguloAltura = trianguloPequenoLadoA;
    alert(trianguloAltura);
  }
}