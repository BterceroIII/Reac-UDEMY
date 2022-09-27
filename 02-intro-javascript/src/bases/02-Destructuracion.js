// DESTRUCTURACION
// ASIGNACION DESESTRURANTE



// let a, b, rest;
// [a, b] = [10, 20];

// console.log(a);

// console.log(b);


// [a, b, ...rest] = [10, 20, 30, 40, 50];

// console.log(rest);


// const foo = ['one', 'two', 'three'];
// const [red, yellow, green] = foo;

// console.log(red)
// console.log(yellow)
// console.log(green)


// let a, b;

// [a, b] = [1, 2];

// console.log(a);
// console.log(b);




// ///////////

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iroman'
};

// const { nombre, edad, clave } = persona;

const context = ({ clave, nombre, edad, rango = 'Capitan' }) => {
    // console.log(nombre, edad, rango)

    return {
        nombreClave: clave,
        anios: edad,
        lating: {
            lat: 14.21212,
            lng: -12.434
        }
    }
}

// const { nombreClave, anios, lating: { lat: Latitud, lng: Longitud } } = context(persona);

// mejor si

const { nombreClave, anios, lating } = context(persona);
const { lat: Latitud, lng: Longitud } = lating;

// retornarPersona(persona);

console.log(nombreClave, anios);
console.log(Latitud, Longitud);



