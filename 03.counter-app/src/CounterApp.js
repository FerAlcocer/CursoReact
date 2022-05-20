import React, {useState}  from 'react' ;
import propTypes from 'prop-types';

const CounterApp= ({ value }) => {

    const [ counter, setCounter ] = useState( value );
    // const [ nombre, setNombre ] = useState('Goku');

    // console.log( nombre, setNombre );


    // console.log( state );


    // handleAdd
    // const handleAdd = (e) => {
    //     console.log (e);
    const handleAdd = () => {
    //    setCounter( counter + 1 );
        setCounter( (c) => c + 1 );
        // return ()=> console.log( 'Hola Mundo');
    }
    const handleReset = () => {
            setCounter( (c) => c = value );
            }
    const handleSubstract = () => {
            setCounter( (c) => c - 1 );
            }


    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubstract }>-1</button>
            {/* <button onClick={ () => setCounter( counter + 1 )}>+1</button>
            <button onClick={ () => setCounter( value ) }>Reset</button>
            <button onClick={ () => setCounter( counter - 1 )}>-1</button> */}
        </>
    );

}

CounterApp.propTypes ={
        value: propTypes.number
}

export default CounterApp;