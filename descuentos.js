

// const precioOriginal = 120;
// const descuento = 18;

// const porcentajePrecioConDescuento = 100 - descuento;
// const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

// let calcularPrecioConDescuento = ( precio, descuento ) => (precio*(100-descuento))/100;

// console.log(calcularPrecioConDescuento(100, 15));

// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
// }); // forma de imprimir varias variables en un solo console.log


function calcularPrecioConDescuento() {
  let precio = document.getElementById("InputProducto").value;
  let descuento = document.getElementById("InputDescuento").value;
  let cupon = document.getElementById("InputCupon").value;

  let parrafo = document.getElementById("ResultPrice");
  let precioDescuento = (precio * (100-descuento))/100;

  if ( cupon == "FASHIONWEEK" ) {
    parrafo.innerText = "El precio con descuento es $" + precioDescuento + ". Menos tu cupón " + cupon + " quedaría en: $" + ((precioDescuento*(100-15))/100);
  } else if ( cupon == "VERANO2021") {
    parrafo.innerText = "El precio con descuento es $" + precioDescuento + ". Menos tu cupón " + cupon + " quedaría en: $" + ((precioDescuento*(100-10))/100);
  } else {
    parrafo.innerText = "El precio con descuento es $" + precioDescuento;
  }
  console.log(cupon);
}