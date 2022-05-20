



// Funciones en JS
//const saludar = function( nombre ) {
    // return 'Hola, ${ nombre }';
//}

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = () => 'Hola Mundo';

// saludar = 30
// console.log( saludar('Goku'))

console.log( saludar2('Vegeta') );
console.log( saludar3('goku') );
console.log( saludar4() );

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_Papi1502',
    }
}

const user = getUser();
console.log(user);

// Tarea
// 1. Transformen a una funcion de flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas

// function getUsuarioActivo( nombre ) {
//    return {
//        uid: 'ABC567',
//        username: nombre,
//     }
// };

// Mi resolucion 

//const usuarioActivo = getUsuarioActivo( 'Fernando');
//console.log( usuarioActivo );
// const getUsuarioActivo= () => {
//     return {
//         uid: 'ABC567',
//         username: nombre,
//     }
// };
// const nombre= 'Fernando';
// const usuarioActivo = getUsuarioActivo(nombre);
// console.log( usuarioActivo );

// Resolucion de FERNANDO HERRRERA

const getUsuarioActivo = ( nombre ) =>({
    uid: 'ABC567',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Fernando');
console.log( usuarioActivo );