/*
    2C = Two of clubs (Tréboles)
    2D = Two of diamonds (Tréboles)
    2H = Two of hearts (Tréboles)
    2S = Two of spades (Tréboles)
*/


//Es una función anonima auto invocada
const miModulo = (() => {
    'use strict'
    
    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'] ,
          restante = ['A', 'J', 'Q', 'K'];
    // let puntosJugador = 0,
    //     puntosComputadora = 0;

    let puntosJugadores = []

    // Referencias del HTML
    const btnNuevo = document.querySelector('#btnNuevo'),
          btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener');

    const divCartasJugadores = document.querySelectorAll('.divCartas'),
          puntosHTML = document.querySelectorAll('small'),
          mensajeGanador = document.querySelector('h1');

    // Esta función inicializa el juego
    const inicializarJuego = (numeroJugadores = 2) => {
        deck = crearDeck();
        puntosJugadores = [];
        for (let i = 0; i < numeroJugadores; i++) {
            puntosJugadores.push(0);
        }
        btnNuevo.disabled = false;
        btnPedir.disabled = false;
        btnDetener.disabled = false;
        puntosHTML.forEach(element => element.innerText = 0 );
        divCartasJugadores.forEach(element => element.innerHTML = '');
        mensajeGanador.innerHTML = '';
    };

    // Esta función crea una nueva baraja
    const crearDeck = () => {
        deck = [];
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
        return _.shuffle(deck);;
    };

    // Esta función me permite devolver una carta random del deck
    const pedirCarta = () => (deck.length === 0)  ? console.warn('No hay cartas en el deck') : deck.pop();
    /* const pedirCarta =  () => {
        if(deck.length === 0) {
            throw 'No hay cartas en el deck';
        }

        return deck.pop();
    }; */

    // Esta función cálcula el valor de la carta 
    const valorCarta = (card) => {
        let valor = card.substring(0, card.length - 1);
        /* if( isNaN(valor) ) {
            valor = (valor === 'A') ? 11: console.log('No es un número');       
        } else {
            console.log('Es un número');
            valor = valor * 1;
        }
        console.log(valor);  */
        return isNaN(valor) ? 
               (valor === 'A') ? 11 : 10 :
               valor * 1; // Multiplicar una cadena por 1 es como castear el tipo de dato
    };

    // Turno 0: primer jugador, último: maquina
    const acumularPuntos = ( carta, turno ) => {
        puntosJugadores[turno] +=  valorCarta(carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    };

    const crearCarta = (carta,turno) => {
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = document.createElement('img');
        imgCarta.classList.add('carta');
        imgCarta.src = `assets/cartas/${carta}.png`;
        divCartasJugadores[turno].append(imgCarta);
    }

    const determinarJugador = () => {
        const [ puntosMinimos, puntosComputadora ] = puntosJugadores;
        mensajeGanador.innerText = (puntosComputadora === puntosMinimos) ? 'No winner' : 
                                   (puntosMinimos > 21) ? 'Cortana WIN' : 
                                   (puntosComputadora > 21) ? 'You win' : 
                                   (puntosComputadora <= 21 && puntosComputadora > puntosMinimos) ? 'Cortana WIN' : '---' ;
    };
    
    // Turno de la computadora
    const turnoComputadora = (puntosMinimos) => {
        let puntosComputadora = 0;
        do {
            
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length-1);
            crearCarta(carta, puntosJugadores.length - 1);
        } while((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
        
        determinarJugador();
    };


    // Eventos
    btnPedir.addEventListener('click', function() {
        const carta = pedirCarta();
        
        const puntosJugador = acumularPuntos(carta, 0);

        crearCarta(carta, 0);

        if ( puntosJugador > 21 ) {
            console.warn('You lose');
            mensajeGanador.innerText = 'You lose';
            turnoComputadora(puntosJugador);
            btnPedir.disabled = true;
        } else if ( puntosJugador === 21 ) {
            console.warn('Awesome');
            
            btnPedir.disabled = true;
        }    
    });

    // Función que detiene el juego y deshabilita botones
    btnDetener.addEventListener('click', function() {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[0]);
    });

    // Función que limpia las variables
    // btnNuevo.addEventListener('click', function() {
    //     inicializarJuego();
    // });

    return {
        nuevoJuego: inicializarJuego
    };
})();

// console.log(miModulo);
// (function () {

// })();

