import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import './index.css';


// const saludo = <h1>Hola Mundo</h1>;

const divRoot = document.querySelector('#root');

// console.log(divRoot);
// ReactDOM.render( saludo, divRoot );
ReactDOM.render( <PrimeraApp />, divRoot ); 