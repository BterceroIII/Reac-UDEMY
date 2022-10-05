
// const newMessage = {
//     message: 'Hola mundo',
//     title: 'Fernando'
// };


const persona = (nombre, apellido ) => (`Hola soy ${nombre} ${apellido} mucho gusto`);

export const FirtsApp = () =>{

    return(
        <> 
            <h1>{ persona('Byron','Tercero') }</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptas dicta est iste sit a illo voluptatibus atque odit impedit sint alias suscipit placeat magni ratione, earum laboriosam debitis ipsum!</p>
        </>
    )
}