/*
    2C = Two of clubs (Tréboles)
    2D = Two of diamonds (Tréboles)
    2H = Two of hearts (Tréboles)
    2S = Two of spades (Tréboles)
*/

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const restante = ['A', 'J', 'Q', 'K']

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

    console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
};

crearDeck();

// Esta función me permite devolver una carta random del deck
const tomaCarta =  () => {
    if(deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    const card = deck.pop();
    console.log(card);
    return card;
};

tomaCarta();
console.log(deck);

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
            valor * 1;
    return valor;
};

const valor  = valorCarta(tomaCarta());
console.log(valor);
