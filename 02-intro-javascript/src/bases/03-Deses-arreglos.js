
// destructuracion de arreglos

const personajes = ['Goku', 'Veguetta', 'Trunsk'];

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

// para indicar que elemento del arreglo quiere extraer solo posicionalos con ","
const [, p1, ,] = personajes; //f2 para renombrar
console.log(p1);

const retornarArreglo = () => {
    return ['ABS', 123];
}

const [letras, numeros] = retornarArreglo();
console.log(letras, numeros);

// tarea

const state = (valor) => {
    return [valor, () => { console.log('hola mundo') }];
}

const arr = state('goku');
const [nombre, setNombre] = state('goku');


console.log(nombre);
setNombre();
