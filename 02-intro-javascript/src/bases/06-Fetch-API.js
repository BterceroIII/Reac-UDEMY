const apikey = 'etHrCZ7IzrR64YdzR8PIXfsw3jvCk4kO';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);

// peticion.then(resp => {
// console.log(resp);

//     resp.json().then(data => {
//         console.log(data);
//     })
// })

// * PROMESA EN CADENA
peticion
    .then(resp => resp.json())
    .then(({ data }) => {
        // console.log(data.images.original.url);
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);


    })
    .catch(console.warn);