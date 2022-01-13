/*
    2C = Two of clubs (Tréboles)
    2D = Two of diamonds (Tréboles)
    2H = Two of hearts (Tréboles)
    2S = Two of spades (Tréboles)
*/

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const restante = ['A', 'J', 'Q', 'K']

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
};

crearDeck();
console.log(deck);