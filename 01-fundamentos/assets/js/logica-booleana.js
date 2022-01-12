const regresaTrue = () => {
  console.log('Regresa True');
  return true;
}

const regresaFalse = () => {
  console.log('Regresa False');
  return false;
}

console.warn('Not o negación');
console.log(!true);
console.log(!false);
console.log(!regresaTrue());
console.log(!regresaFalse());

console.warn('and');
console.log( true && true); //true
console.log( true && !false); //true

console.log('=======');
console.log(regresaFalse() && regresaTrue()); //false si el primer argumento tiene como valor false, deja de ejecutar el resto de instricciones
console.log(regresaTrue() && regresaFalse()); //false

console.warn('or');
console.log(true || true);
console.log(true || false);
console.log(false || false);

console.log('asignaciones');
const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a2 = 'hola' && 'mundo' && soyFalso;
const a3 = false || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso' || true;
console.log({a2, a3, a4, a5});








