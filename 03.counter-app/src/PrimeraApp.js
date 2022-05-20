// import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types';


const PrimeraApp = ( { saludo, subtitulo } ) => {

  // if (!saludo ) {
  //   throw new Error( 'El saludo es necesario ' );

  // }

//    return (
//         <Fragment>
//            <h1>Hola Mundo</h1>
//            <p>Mi primera aplicación</p>
//         </Fragment>  
//     ); 
  // const saludo= 'Hola mundo'

  // console.log( props );
    // const saludo = {
    //     Nombre: 'Fernando',
    //     Edad: 28
    // }
return (
        <>
           <h1>{saludo}!</h1>
           {/* <pre> { JSON.stringify( saludo, null, 3 ) } </pre> */}
           <p>{subtitulo}</p>
        </>  
    ); 
     
}

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
  saludo: 'Hola, soy Goku',
  subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;