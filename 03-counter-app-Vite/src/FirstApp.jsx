import ProTypes from 'prop-types';
// const newMessage = {
//     message: 'Hola mundo',
//     title: 'Fernando'
// };


// const persona = (nombre, apellido ) => (`Hola soy ${nombre} ${apellido} mucho gusto`);

export const FirtsApp = ({title,subtitle}) =>{


    return(
        <> 
            <h1>{ title}</h1>
            <p>{subtitle}</p>
        </>
    )
}

FirtsApp.propTypes = {
    title: ProTypes.string.isRequired, // is Required significa que obligacion al poner titulo
    subtitle: ProTypes.string.isRequired
}

FirtsApp.defaultProps ={
    title: 'No hay titulo',
    subtitle: 'No hay subtitulo',
}