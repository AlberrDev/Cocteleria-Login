//es una función que puede devolver cualquier cosa

import { useState } from "react"


//si quiero devolver un array, el return va con []
export const useCounter1 = (valorInicial=10) =>{
    const [counter, setCounter] = useState(valorInicial)
    return [
        counter
    ]
}
/********************************************************** */

//si no pasan valor, por defecto sería 10
//si devuelvo un objeto, el return va con llaves
export const useCounter2 = (valorInicial=10) =>{
    const [counter, setCounter] = useState(valorInicial)
    return {
        counter: counter,
    }
}


/********************************************************** */

export const useCounter = (valorInicial=0) =>{

    const [counter, setCounter] = useState(valorInicial)

    const incrementa = (valor = 1) =>{
        setCounter (counter + valor)
    }

    const decrementa =() =>{
        if (counter === 0 ) return;
        setCounter (counter -1)
    }

    const reset = ()=>{
        setCounter (0)
        //setCounter (valorInicial)
    }
    return {
        counter: counter,
        setCounter,
        incrementa,
        decrementa,
        reset,
    }
}