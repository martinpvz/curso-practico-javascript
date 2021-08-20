

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

  let precioDescuento = (precio * (100-descuento))/100;

  let parrafo = document.getElementById("ResultPrice");
  parrafo.innerText = "El precio con descuento es $" + precioDescuento;
}