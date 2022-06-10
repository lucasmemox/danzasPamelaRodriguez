//Defino la clase
class Danzas {
  constructor(id, estilos, imagen, costo) {
    this.id = id;
    this.estilos = estilos;
    this.imagen = imagen;
    this.costo = costo;
  }
}

//Defino las clases ofrecidas por la academia
const clasico = new Danzas(1,"Clásico", "./imagenes/oferta/clasico.png", 3000);
const folclore = new Danzas(2,"Folclore Tradicional","./imagenes/oferta/folclore.png",5000);
const espaniol = new Danzas(3,"Danzas Españolas","./imagenes/oferta/español.png",3500);
const rlibres = new Danzas(4,"Ritmos Libres","./imagenes/oferta/libres.png",3500);
const djazz = new Danzas(5,"Jazz", "./imagenes/oferta/Jazz.png", 3700);
const efuncional = new Danzas(6,"Entrenamiento Funcional","./imagenes/oferta/funcional.png",4000);

//Creo el array de clases de danza
const listado = [clasico, folclore, espaniol, rlibres, djazz, efuncional];

//Creo el carrito vacio -  es un array
let carrito = [];

//Aca tomo el id de la clase padre donde voy a mostrar las clases 
// const cardContainer = document.getElementById("contenedor-principal");
const cardContainer = document.querySelector('#contenedor-principal');

const crrseleccion = document.querySelector('#crrseleccion');

//Genero las clases con el for each
listado.forEach((tarjetas) => {
  const tarjeta = document.createElement("div");
  tarjeta.className = "caja";
  tarjeta.innerHTML = `
            
            <div class="img-contenedor">
            <h3 class="tituloCaja">${tarjetas.estilos} <br>
                                   Cuota $${tarjetas.costo}</h3>
            <img src="${tarjetas.imagen}" class="img-clases">
            <button id-danza="${tarjetas.id}" class="botonCRR"><span class="crr">Agregar</span></button>
            </div>
        `;
  cardContainer.append(tarjeta);
  console.log(tarjetas);
});

const imprimirCarrito = () => {
  crrseleccion.innerHTML = ''
    carrito.forEach((tarjetas) => {
        const cartRow = document.createElement('div')
        cartRow.className = 'cartRow'
        cartRow.innerHTML = `
        <div class="cartImg">
        <img src="${tarjetas.imagen}">
        </div>
        <div class="cartTitle"><span> Monitor ${tarjetas.estilos}</span></div>
        <div class="cartDesc"><span> ${tarjetas.id} Pulgadas</span></div>
        <div class="cartPrice"><span> $${tarjetas.costo}</span></div>
        `
        crrseleccion.append(cartRow)
    })
} 

// Función para agregar clase e identificar cual es la seleccionada. 
const agregarDanza = (e) => {
  // Con target accedo  a la etiqueta del button y con getAttribute accedemos al atributo
  const claseElegida = e.target.closest('.botonCRR').getAttribute('id-danza')
  // Una vez que tenemos el valor de referencia que guardamos en el botón hacemos una búsqueda (find)
  const agregarRender = listado.find((tarjetas) => tarjetas.id ==  claseElegida)
  // Una vez tenemos todo el objeto, lo enviamos al carrito
  console.log(agregarRender)
  carrito.push(agregarRender)
  console.log("CARRITO:" + carrito )
  imprimirCarrito()
  localStorage.setItem('carrito', JSON.stringify(carrito))
}

// Accedo al botón a traves de la clase botonCRR y le agregamos el evento click
const btnComprar = document.querySelectorAll('.botonCRR')
btnComprar.forEach((btnCompra) => {
    btnCompra.addEventListener('click', agregarDanza)
})

// Al cargar la pagina, verifico que exista algo guardado en el carrito y lo imprimo
if (localStorage.getItem('carrito')) {
  carrito = JSON.parse(localStorage.getItem('carrito'))
  imprimirCarrito()
}




// FUNCIONES

// console.log("1)  Simulador ");
// alert("Bienvenidos al Carrito de la Academia de Danzas PTM");
// alert(
//   "Indique la letra del curso a comprar - F(Folclore) - E(Español) - J(Jazz)"
// );

// let nombre = prompt("Ingrese su nombre: ");
// let curso = prompt("Ingrese la letra del curso: ").toUpperCase();

// let tipo = !isNaN(nombre);
// console.log(tipo);

// if (tipo == false) {
//   switch (curso) {
//     case "F":
//       let descuentof = descuento("F");

//       alert(
//         nombre +
//           " El Profesorador de Folklore cuesta 5000 y con beca " +
//           descuentof
//       );
//       break;
//     case "E":
//       let descuentoe = descuento("E");
//       alert(
//         nombre +
//           " El Profesorado de Español cuesta 3500 y con beca " +
//           descuentoe
//       );
//       break;
//     case "J":
//       let descuentoj = descuento("J");
//       alert(
//         nombre + " El Profesorado de Jazz cuesta 3700 y con beca " + descuentoj
//       );
//       break;
//     case "J":
//       let descuentol = descuento("L");
//       alert(
//         nombre +
//           " El Profesorado de Ritmos Libres cuesta 3500 y con beca " +
//           descuentol
//       );
//       break;
//     case "J":
//       let descuentofu = descuento("FU");
//       alert(
//         nombre +
//           " Entrenamiento funcional cuesta 4000 con descuento " +
//           descuentofu
//       );
//       break;
//     case "J":
//       let descuentoc = descuento("C");
//       alert(
//         nombre +
//           " El Profesorado de Danzas Clasicas cuesta 3000 y con beca " +
//           descuentoc
//       );
//       break;
//     default:
//       alert("No es un curso valido");
//       break;
//   }
// } else {
//   alert("No es un nombre valido");
// }

// function descuento(curso) {
//   if (curso == "F") {
//     let monto = 5000;
//     let descuento = 15;

//     let montodescontado = (monto * descuento) / 100;

//     let total = monto - montodescontado;

//     return total;
//   } else if (curso == "J") {
//     let monto = 3700;
//     let descuento = 10;

//     let montodescontado = (monto * descuento) / 100;

//     let total = monto - montodescontado;
//     return total;
//   } else if (curso == "E") {
//     let monto = 3500;
//     let descuento = 16;

//     let montodescontado = (monto * descuento) / 100;

//     let total = monto - montodescontado;
//     return total;
//   } else if (curso == "C") {
//     let monto = 3000;
//     let descuento = 20;

//     let montodescontado = (monto * descuento) / 100;

//     let total = monto - montodescontado;
//     return total;
//   } else if (curso == "L") {
//     let monto = 3500;
//     let descuento = 20;

//     let montodescontado = (monto * descuento) / 100;

//     let total = monto - montodescontado;
//     return total;
//   } else if (curso == "FU") {
//     let monto = 4000;
//     let descuento = 10;

//     let montodescontado = (monto * descuento) / 100;

//     let total = monto - montodescontado;
//     return total;
//   }
// }
