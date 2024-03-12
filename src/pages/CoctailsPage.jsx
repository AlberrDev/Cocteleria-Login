import { useContext } from "react"
import { UserContext } from "../context/UserContext"


export const CoctailsPage = () => {

    const { coctelFav, setCoctelFav,eliminarCoctel } = useContext(UserContext);

    console.log(coctelFav[0])
    return (
        <>
            <h1>Cocteles Favs</h1>
            {
                coctelFav  ? (

                    coctelFav.map(ele => (
                        <div> <p>{ele.nombre}</p>
                        <img src={ele.foto} alt="" />
                        <p>ID:{ele.id}</p>
                        <button onClick={() => eliminarCoctel(ele.id)}>Eliminar Fav</button>
                        </div>

                    ))
                    

                ) :
                    ("")

            }

        </>
    )
}

