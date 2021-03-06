import { getHeroeById, getHeroesByOwner } from "../../Base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funcion de Héroes', () => {

    test('debe de retornar un héroe por id', () => {

        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( h => h.id === id);

        expect( heroe ).toEqual( heroeData);

    });


    test('debe de retornar un undefined si heroe no existe', () => {

        const id = 10;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined )

    });

    // debe de retonrnar un arreglo con los heroes de Dc
    // owner
    // toEqual al arreglo filtrado

    test(' Debe de retornar un arreglo con los heroes de DC', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );

        const heroeOwner = heroes.filter( h => h.owner === owner );

        expect( heroes ).toEqual( heroeOwner );

    });


    // debe de retornar un arreglo con los heroes de Marvel
    // length = 2 // toBe
    test('Debe de retornar un arreglo con los heroes de Marvel', () => {
        
        const owner= 'Marvel';
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 2 );
    })
    

});
