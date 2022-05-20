

const persona ={
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 3123123123,
        lat: 14.123123,
        lng: 23.3123123,
    }

};

// console.table( persona );

const persona2 = {...persona };
persona2.nombre = 'Peter';

console.log( persona );
console.log( persona2 );