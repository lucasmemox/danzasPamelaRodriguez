class Danzas {
  constructor(estilos, imagen, costo) {
    this.estilos = estilos;
    this.imagen = imagen;
    this.costo = costo;
  }
}

const danzas1 = new Danzas(
  "Clásico",
  "./imagenes/oferta/clasico.png",
  3000
);
const danzas2 = new Danzas(
  "Folclore Tradicional",
  "./imagenes/oferta/folclore.png",
  5000
);
const danzas3 = new Danzas(
  "Danzas Españolas",
  "Horarios: 17:00 a 21:00 de Lunes a Viernes",
  "./imagenes/oferta/español.png",
  3500
);
const danzas4 = new Danzas(
  "Ritmos Libres",
  "./imagenes/oferta/libres.png",
  3500
);
const danzas5 = new Danzas(
  "Jazz",
  "./imagenes/oferta/Jazz.png",
  3700
);
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
            <h3 class="cajaTitulo">${listado.estilos}</h3>
            <img src="${listado.imagen}" class="img-clases">
            <span class="cajaCosto">$${listado.costo}</span>
            <button class="botonCRR"> Agregar al Carrito </button>
        `;
  cardContainer.append(tarjeta);
});

