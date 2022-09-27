import { etHeroById } from "./bases/Import-export";
// Promesas

// const promesa = new Promise((resolve, reject) => {

//     setTimeout(() => {
// tarea
//         const p1 = etHeroById(2)
//         console.log(p1);
//         resolve(p1); //*En caso de correcto
// reject('No se pudo encontrar el heroe'); //*en caso de error
//     }, 2000);

// });


// promesa.then((heroe) => {
//     console.log('heroe', heroe);
// })

//     .catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            // tarea
            //*En caso de correcto
            const p1 = etHeroById(id)

            if (p1) {
                resolve(p1);
            }

            reject('No se pudo encontrar el heroe'); //*en caso de error

        }, 2000);

    });
}

// getHeroeByIdAsync(10)
//     .then(heroes => console.log('Heroe', heroes))
//     .catch(err => console.warn(err));

getHeroeByIdAsync(2)
    .then(console.log)
    .catch(console.warn);

