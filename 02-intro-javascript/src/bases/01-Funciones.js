// const saldudar = function (nombre) {
//     return `Hola, ${nombre}`;
// }

//* Funciones flechas
const saludar2 = nombre => `hola, ${nombre}; `


console.log(saludar2('Btercero'))

//* funcion flecha con objetos 
const getUser = () => ({
    uId: 'ABC123',
    username: 'El_Papi123'

});

const user = getUser();

console.log(user);

// tarea
// 1, transformar a una funcion flecha
// 2. tiene que retornar un objeto implicito
// 3. Pruebas


function getUsuarioActivo(nombre) {
    return {
        uId: 'ABC567',
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);


// ----------

const getUsuarioActivo2 = nombre => ({
    uid: 'ABC567',
    username: nombre
});

const usuarioActivo2 = getUsuarioActivo2('Fernando');
console.log(usuarioActivo2);
