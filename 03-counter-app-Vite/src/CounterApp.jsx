
import ProTypes from  'prop-types';



export const CounterApp = ({value}) => {
    return(
        <>
            <h1>CounterApp</h1>
            <h2>{value}</h2>
        </>
    )
}


CounterApp.propTypes = {
    value: ProTypes.number.isRequired,
}

CounterApp.defaultProps ={
    value: 'No hay nada',
}