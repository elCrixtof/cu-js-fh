const heroes = ['batman', 'superman', 'flash', 'wonder woman'];

console.warn('For tradicional');
for(let i=0; i<heroes.length; i++){
    console.log(heroes[i]);
};

console.warn('For each');
heroes.forEach((element) => {
    console.log(element);
});

console.warn('For in');
for(let i in heroes) {
    console.log(heroes[i]);
}

console.warn('For of');

for(let heroe  of heroes) {
    console.log(heroe);
}