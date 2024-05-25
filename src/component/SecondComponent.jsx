import React from 'react'
import { useState } from 'react';

export const SecondComponent = () => {
  
    const [ name, setName ] = useState("Juliet Gomez");
    const [isNameChanged, setIsNameChanged ] = useState(false);

    const changeName = (e) =>{
        if (isNameChanged){
            setName("Juliet Gomez");
        }else {
            setName("Martin Gomez");
        }
        // setName("Martin Gomez");
        setIsNameChanged(!isNameChanged);
    }

    return (
    <div>
      <h3>omponente: SecondComponent</h3>
      <p>{ name }</p>
      <div>
        <button className='button-large' onClick= {changeName} >Cambiar nombre</button>
      </div>
    </div>
  )
}

 
