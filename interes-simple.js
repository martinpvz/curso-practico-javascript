

function calcularInteresSimple() {
  const capital = document.getElementById("InputCapital").value;
  const tasa = document.getElementById("InputTasa").value / 100;
  const tiempo = document.getElementById("InputTiempo").value;

  const interes = capital * tasa * tiempo;

  const parrafo = document.getElementById("ResultInterest");
  parrafo.innerText = "El interés simple calculado es de $ " + interes;
}