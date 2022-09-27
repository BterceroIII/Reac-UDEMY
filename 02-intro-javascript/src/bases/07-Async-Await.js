

// async es una promesa

// const getImagen = () => {
//     return 'https://asdrsadsad.com';
// }
// console.log(getImagen());

//* Con async es mas rapido porque incorpora una promesa

// const getImagen = async () => {
//     return 'https://asdrsadsad.com'


// }

// getImagen().then(console.log);


const getImagen = async () => {
    try {

        const apikey = 'etHrCZ7IzrR64YdzR8PIXfsw3jvCk4kO';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);

        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);

    } catch (error) {
        //manejo de error

        console.error(error);
    }


}

getImagen();



// const apikey = 'etHrCZ7IzrR64YdzR8PIXfsw3jvCk4kO';

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);


// // * PROMESA EN CADENA
// peticion
//     .then(resp => resp.json())
//     .then(({ data }) => {
//         // console.log(data.images.original.url);
//         const { url } = data.images.original;

//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append(img);


//     })
//     .catch(console.warn);