import { useContext, useEffect, useState } from "react";
import { useFetch } from "../data/useFetch"
import { useCounter } from "../data/useCounter"
import { UserContext } from "../context/UserContext";


export const CoctailsBuscar = () => {


  const [coctel, setCoctel] = useState();
  const [coctelFinal, setCoctelFinal] = useState();
  const { counter, incrementa, setCounter } = useCounter(0);
  const { coctelFav, setCoctelFav, agregarCoctel } = useContext(UserContext);

  const onInputChange = (e) => {
    const { name, value } = e.target

    setCoctel({
      ...coctel,
      [name]: value
    })
  }
  console.log(coctel);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(coctel.coctel);
    setCoctelFinal(coctel.coctel);
    setCounter(0)
  }

  const { data, isLoading } = useFetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${coctelFinal}`
  );


  //Aqui comprobamos que haya data, si hay data comprobar si hay drinks y si hay drinks, iteramos
  //Sino no dejaria iterar ya que no puedes acceder a los datos

  const { strDrink, strDrinkThumb,idDrink } = data && data.drinks ? data.drinks[counter] || {} : {};
  console.log(counter, "xd");


  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="">Que coctel Buscamos Hoy?</label>
        <input type="text" name="coctel" onChange={onInputChange} />
        <input type="submit" />
      </form>
      {
        isLoading ?
          (
            <p>loading</p>

          ) :
          (
            <div>
              <p>{strDrink}</p>
              <img src={strDrinkThumb} alt="" /><br />
              <p>{idDrink}</p>
              <button className='btn btn-primary' onClick={() => incrementa()} disabled={isLoading}>
                Siguiente
              </button>
              {coctelFinal ? (
                <button className='btn btn-primary' onClick={() => agregarCoctel(strDrink, strDrinkThumb,idDrink)} disabled={isLoading}>
                  FAV
                </button>
              ) : (
                ""
              )

              }

            </div>


          )
      }

    </>
  )
}
