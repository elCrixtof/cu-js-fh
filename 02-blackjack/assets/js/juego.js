/*
    2C = Two of clubs (Tréboles)
    2D = Two of diamonds (Tréboles)
    2H = Two of hearts (Tréboles)
    2S = Two of spades (Tréboles)
*/

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const restante = ['A', 'J', 'Q', 'K'];
let puntosJugador = 0;
let puntosComputadora = 0;

// Referencias del HTML
const btnNuevo = document.querySelector('#btnNuevo');
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const puntosHTML = document.querySelectorAll('small');

// Esta función crea una nueva baraja
const crearDeck = () => {
    for(let i = 2; i <= 10; i++) {
        for(let tipo of tipos){
            deck.push(i+tipo);
        }
    }
    for(let element of restante) {
        for(let tipo of tipos){
            deck.push(element+tipo);
        }
    }
    // la librería underscore contiene funciones especiales
    // en este caso se usa para desacomodar los elementos 
    // del arreglo de forma aleatoria
    deck = _.shuffle(deck);
    return deck;
};

// Esta función me permite devolver una carta random del deck
const pedirCarta =  () => {
    if(deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    const card = deck.pop();
    return card;
};

// Esta función cálcula el valor de la carta 
const valorCarta = (card) => {
    let valor = card.substring(0, card.length - 1);
    // if( isNaN(valor) ) {
    //     valor = (valor === 'A') ? 11: console.log('No es un número');       
    // } else {
    //     console.log('Es un número');
    //     valor = valor * 1;
    // }
    // console.log(valor); 
    valor = isNaN(valor) ? 
            valor = (valor === 'A') ? 11 : 10 :
            valor * 1; // Multiplicar una cadena por 1 es como castear el tipo de dato
    return valor;
};

crearDeck();

// Eventos
btnPedir.addEventListener('click', function() {
    const carta = pedirCarta();
    puntosJugador += valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;
});