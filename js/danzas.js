class Danzas {
    constructor(estilos, descripcion, imagen, costo) {
        this.estilos = estilos
        this.descripcion = descripcion
        this.imagen = imagen
        this.costo = costo
    }
}

const danzas1 = new Monitor('Clásico', 'Horarios: 17:00 a 21:00 de Lunes a Viernes', './imagenes/oferta/clasico.png', 3000)
const danzas2 = new Monitor('Folclore Tradicional', 'Horarios: 17:00 a 21:00 de Lunes a Viernes', './imagenes/oferta/folclore.png', 5000)
const danzas3 = new Monitor('Danzas Españolas', 'Horarios: 17:00 a 21:00 de Lunes a Viernes', './imagenes/oferta/español.png', 3500)
const danzas4 = new Monitor('Ritmos Libres', 'Horarios: 17:00 a 21:00 de Lunes a Viernes', './imagenes/oferta/libres.png', 3500)
const danzas5 = new Monitor('Jazz', 'Horarios: 17:00 a 21:00 de Lunes a Viernes', './imagenes/oferta/Jazz.png', 3700)
const danzas6 = new Monitor('Entrenamiento Funcional', 'Horarios: 17:00 a 21:00 de Lunes a Viernes', './imagenes/oferta/funcional.png', 4000)

const listado = [danzas1, danzas2, danzas3, danzas4, danzas5, danzas6]
const cardContainer = document.getElementById('cardContainer')

listado.forEach((listado) => {
    const card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = `
            <h3 class="cardTitle"> Monitor ${listado.estilos} </h3>
            <img src="${listado.descripcion}" class="cardImg">
            <p class="cardDesc"> ${listado.imagen} Pulgadas</p>
            <span class="cardPrice"> $${listado.costo} </span>
            <button class="buttonCTA"> Agregar al Carrito </button>
        `
    cardContainer.append(card)
})