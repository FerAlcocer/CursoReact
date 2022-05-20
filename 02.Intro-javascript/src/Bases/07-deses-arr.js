// Desestructuracion de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

// console.log( personajes [0]);
// console.log( personajes [1]);
// console.log( personajes [2]);
 
// const [ p1 ]= personajes;

// console.log( p1 );   //Goku


// const [ , p2]= personajes;

// console.log( p2 );   //Vegeta
const [ , ,p3 ]= personajes;

console.log( p3 );   //Trunks
 

const retonaArreglo = () =>{
    return ['ABC', 123];
}


const [letras, numeros ] = retonaArreglo();
console.log(letras, numeros);

// Tarea
// 1. el primer valor del arr se llamara nombre
// 1. el segundo valor del arr se llamara setNombre
const useState = ( valor ) => {
    return [ valor, ()=>{ console.log( 'Hola Mundo')}];
}

const [nombre, setNombre] = useState( 'Goku' );
//console.log(arr)
//arr[1](); 
console.log( nombre );
setNombre();
