import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory';

export const GifExpertApp = () => {
  
  // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState(['Hunter x Hunter']);
  
  // const handleAdd = () => {
  //   setCategories( [...categories, 'HunterxHunter']  )
  // }

  return (
    <div>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories }/>
        <hr />
    
        {/* <button onClick={ handleAdd }>Agregar</button> */}


        <ol>

            {
              categories.map( category => {
                return <li key={ category }> { category } </li>
              })
            }
        </ol>

    </div>
  )
}
