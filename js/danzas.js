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
const clasico = new Danzas(1, "Clásico", "./imagenes/oferta/clasico.png", 3000);
const folclore = new Danzas(
  2,
  "Folclore Tradicional",
  "./imagenes/oferta/folclore.png",
  5000
);
const espaniol = new Danzas(
  3,
  "Danzas Españolas",
  "./imagenes/oferta/español.png",
  3500
);
const rlibres = new Danzas(
  4,
  "Ritmos Libres",
  "./imagenes/oferta/libres.png",
  3500
);
const djazz = new Danzas(5, "Jazz", "./imagenes/oferta/Jazz.png", 3700);
const efuncional = new Danzas(
  6,
  "Entrenamiento Funcional",
  "./imagenes/oferta/funcional.png",
  4000
);

//Creo el array de clases de danza
const listado = [clasico, folclore, espaniol, rlibres, djazz, efuncional];

//Creo el carrito vacio -  es un array
let carrito = [];

//Aca tomo el id de la clase padre donde voy a mostrar las clases
// const cardContainer = document.getElementById("contenedor-principal");
const cardContainer = document.querySelector("#contenedor-principal");

const crrseleccion = document.querySelector("#crrseleccion");

const crrcabecera = document.querySelector("#crrcabecera");

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
  crrseleccion.innerHTML = "";
  console.log("Entre ACA");
  const cartCabecera = document.createElement("div");
  cartCabecera.className = "cartCabecera";
  cartCabecera.innerHTML = `
       <div class="cartCabecera">
        <div class="cartImagen">
             <span class="tarjetaImagen"> Descripción</span>
        </div>
        <div class="cartTitulo"><span>Estilo</span></div>
        <div class="cartMonto"><span>Costo</span></div>  
        <div class="cartMonto"><span>Orden</span></div>
      </div>  
  `;
  crrseleccion.append(cartCabecera);

  carrito.forEach((tarjetas) => {
    const cartRow = document.createElement("div");
    cartRow.className = "cartRow";
    cartRow.innerHTML = `
    
          <div class="cartImagen">
             <img class="tarjetaImagen" src="${tarjetas.imagen}">
          </div>
        
          <div class="cartTitulo"><span>${tarjetas.estilos}</span></div>
       
          <div class="cartMonto"><span>$${tarjetas.costo}</span></div>
       
          <div style="display:none;"><span>${tarjetas.id}</span></div>
        
        `;
    crrseleccion.append(cartRow);
  });
};

const imprimirCarrito2 = () => {
  crrseleccion.innerHTML = "";
  carrito.forEach((tarjetas) => {
    const cartRow = document.createElement("div");
    cartRow.className = "cartRow";
    cartRow.innerHTML = `
    
          <div class="cartImagen">
             <img class="tarjetaImagen" src="${tarjetas.imagen}">
          </div>
        
          <div class="cartTitulo"><span>${tarjetas.estilos}</span></div>
       
          <div class="cartMonto"><span>$${tarjetas.costo}</span></div>
       
          <div class="cartMonto"><span>${tarjetas.id}</span></div>
        
        `;
    crrseleccion.append(cartRow);
  });
};

// Función para agregar clase e identificar cual es la seleccionada.
const agregarDanza = (e) => {
  // Con target accedo  a la etiqueta del button y con getAttribute accedemos al atributo
  const claseElegida = e.target.closest(".botonCRR").getAttribute("id-danza");
  // Una vez que tenemos el valor de referencia que guardamos en el botón hacemos una búsqueda (find)
  const agregarRender = listado.find((tarjetas) => tarjetas.id == claseElegida);
  // Una vez tenemos todo el objeto, lo enviamos al carrito
  console.log(agregarRender);
  //Controlo el Carrito
  const controlCRR = carrito.find((crr) => crr.id == claseElegida);

  carrito.push(agregarRender);
  imprimirCarrito();
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

// Accedo al botón a traves de la clase botonCRR y le agregamos el evento click
const btnComprar = document.querySelectorAll(".botonCRR");
btnComprar.forEach((btnCompra) => {
  btnCompra.addEventListener("click", agregarDanza);
});

// Al cargar la pagina, verifico que exista algo guardado en el carrito y lo imprimo
if (localStorage.getItem("carrito")) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
  imprimirCarrito();
}

// Botón de Vaciar Carrito

const vaciarCarrito = () => {
  if (localStorage.getItem("carrito")) {
    localStorage.removeItem("carrito");
  }
  carrito = [];
  imprimirCarrito2();
};

const vaciarCarritoBtn = document.querySelector("#vaciarCarrito");
vaciarCarritoBtn.addEventListener("click", vaciarCarrito);