import React from 'react';
import { shallow } from 'enzyme';


import CounterApp from '../CounterApp';




describe('Pruebas en el <CounterApp />', () => {
    
    let wrapper = shallow( <CounterApp /> );

    beforeEach( () => {

        wrapper = shallow( <CounterApp /> );

    });




    test('debe de mostrar <CounterApp /> correctamente', () =>{

        const wrapper = shallow( <CounterApp />);
        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de mostrar el valor por defecto de 100', () => {

        const wrapper = shallow( <CounterApp value={ 100 } /> );

        const counterText = wrapper.find('h2').text().trim();
        console.log( counterText );
    
        expect( counterText ).toBe('100');
    });

    test('Debe de incrementar con el boton +1', () => {

        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('11');
        
          
    })
    

    


});
