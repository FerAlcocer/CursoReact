

 const nombre = 'Fernando';
 const apellido ='Alcocer';

 //const nombreCompleto = nombre + ' ' + apellido;

 const nombreCompleto = `${ nombre } ${ apellido }`;
const saludo ='Hola mundo';

 console.log( saludo );
 console.log( nombreCompleto);


 function getSaludo(nombre) {
     return 'hola ' + nombre;

 }

console.log( `Este es un texto: ${ getSaludo( nombre)}`);
