// import { heroes } from './Data/heroes';
// import { heroes } from './Data/heroes';

import heroes from '../Data/heroes';
// import heroes, { owners } from '../Data/heroes';


// console.log( owners );

// import { heroes } from "./Data/heroes";

// console.log( heroes );


// const getHeroeByid =(id) => {
    // return heroes.find( ( heroe )=> {
        // if ( heroe.id === id ) {
        //     return true;
        // }else {
        //     return false;
        // }
//     });

// }
// const getHeroeByid =(id) => {
//     return heroes.find( ( heroe )=> heroe.id === id );
//      }
export const getHeroeById =(id) => heroes.find( ( heroe )=> heroe.id === id );
     

// console.log( getHeroeByid(2) );

// find?, filter
export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe)=> heroe.owner === owner );

// console.log( getHeroesByOwner('Marvel') );

