class Danzas {
  constructor(estilos, imagen, costo) {
    this.estilos = estilos;
    this.imagen = imagen;
    this.costo = costo;
  }
}

const danzas1 = new Danzas("Clásico", "./imagenes/oferta/clasico.png", 3000);
const danzas2 = new Danzas(
  "Folclore Tradicional",
  "./imagenes/oferta/folclore.png",
  5000
);
const danzas3 = new Danzas(
  "Danzas Españolas",
  "./imagenes/oferta/español.png",
  3500
);
const danzas4 = new Danzas(
  "Ritmos Libres",
  "./imagenes/oferta/libres.png",
  3500
);
const danzas5 = new Danzas("Jazz", "./imagenes/oferta/Jazz.png", 3700);
const danzas6 = new Danzas(
  "Entrenamiento Funcional",
  "./imagenes/oferta/funcional.png",
  4000
);

const listado = [danzas1, danzas2, danzas3, danzas4, danzas5, danzas6];
const cardContainer = document.getElementById("contenedor-principal");

listado.forEach((listado) => {
  const tarjeta = document.createElement("div");
  tarjeta.className = "caja";
  tarjeta.innerHTML = `
            
            <div class="img-contenedor">
            <h3 class="tituloCaja">${listado.estilos} <br>
                                   Cuota $${listado.costo}</h3>
            <img src="${listado.imagen}" class="img-clases">
            <button class="botonCRR"><span class="crr">Agregar</span></button>
            </div>
        `;
  cardContainer.append(tarjeta);
});

// FUNCIONES

// console.log("1)  Simulador ");
// alert("Bienvenidos al Carrito de la Academia de Danzas PTM");
// alert(
//   "Indique la letra del curso a comprar - F(Folclore) - E(Español) - J(Jazz)"
// );

// let nombre = prompt("Ingrese su nombre: ");
// let curso = prompt("Ingrese la letra del curso: ").toUpperCase();

let tipo = !isNaN(nombre);
console.log(tipo);

if (tipo == false) {
  switch (curso) {
    case "F":
      let descuentof = descuento("F");

      alert(
        nombre +
          " El Profesorador de Folklore cuesta 5000 y con beca " +
          descuentof
      );
      break;
    case "E":
      let descuentoe = descuento("E");
      alert(
        nombre +
          " El Profesorado de Español cuesta 3500 y con beca " +
          descuentoe
      );
      break;
    case "J":
      let descuentoj = descuento("J");
      alert(
        nombre + " El Profesorado de Jazz cuesta 3700 y con beca " + descuentoj
      );
      break;
      case "J":
      let descuentol = descuento("L");
      alert(
        nombre + " El Profesorado de Ritmos Libres cuesta 3500 y con beca " + descuentol
      );
      break;
      case "J":
      let descuentofu = descuento("FU");
      alert(
        nombre + " Entrenamiento funcional cuesta 4000 con descuento " + descuentofu
      );
      break;
      case "J":
      let descuentoc = descuento("C");
      alert(
        nombre + " El Profesorado de Danzas Clasicas cuesta 3000 y con beca " + descuentoc
      );
      break;
    default:
      alert("No es un curso valido");
      break;
  }
} else {
  alert("No es un nombre valido");
}

function descuento(curso) {
  if (curso == "F") {
    let monto = 5000;
    let descuento = 15;

    let montodescontado = (monto * descuento) / 100;

    let total = monto - montodescontado;

    return total;
  } else if (curso == "J") {
    let monto = 3700;
    let descuento = 10;

    let montodescontado = (monto * descuento) / 100;

    let total = monto - montodescontado;
    return total;
  } else if (curso == "E") {
    let monto = 3500;
    let descuento = 16;

    let montodescontado = (monto * descuento) / 1000;

    let total = monto - montodescontado;
    return total;
  } else if (curso == "C") {
    let monto = 3000;
    let descuento = 20;

    let montodescontado = (monto * descuento) / 1000;

    let total = monto - montodescontado;
    return total;
  }else if (curso == "L") {
    let monto = 3500;
    let descuento = 20;

    let montodescontado = (monto * descuento) / 1000;

    let total = monto - montodescontado;
    return total;
  }
  else if (curso == "FU") {
    let monto = 4000;
    let descuento = 10;

    let montodescontado = (monto * descuento) / 1000;

    let total = monto - montodescontado;
    return total;
  }
}
