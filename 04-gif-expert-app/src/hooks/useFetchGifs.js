import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';



export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        date: [],
        loading: true
    });

    useEffect( () =>{

        getGifs( category )
            .then( imgs => {

                console.log(imgs)
                setState({
                    data: imgs,
                    loading: false
                });
            })
    }, [ category ])
    
    return state; // { data: [], loading: true };
}