
import { useEffect, useState } from "react";
import { UserContext } from "./UserContext"
import { useReducer } from "react";
import { todoReducer } from "../data/todoReducer";

let inicial = JSON.parse(sessionStorage.getItem("usuario"))

if (inicial == null) {
    inicial = {};

}
let inicialCoctel = JSON.parse(localStorage.getItem("coctel"))



export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(inicial);

    const [coctel, setCoctel] = useState();

    const [coctelFav, setCoctelFav] = useState(inicialCoctel);

    const init = () => {
        return JSON.parse(localStorage.getItem("coctel")) || [];

    }

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    const agregarCoctel = (nombre,foto,id) => {
        const action = {
            type: "Agregar Coctel",
            payload: {nombre,foto,id},
        }
        dispatch(action);

    }
    const eliminarCoctel = (id) => {
        const action = {
            type: "Eliminar Coctel",
            payload: id,
        }
        dispatch(action);

    }


    useEffect(() => {
        localStorage.setItem("usuario", JSON.stringify(user))
    }, [user])

    useEffect(() => {
        localStorage.setItem("coctel", JSON.stringify(coctelFav))
    }, [coctelFav])

    useEffect(() => {
        localStorage.setItem("coctel", JSON.stringify(todos))
        setCoctelFav(todos)
    }, [todos])







    return (
        <UserContext.Provider value={{
            user, setUser, coctel, setCoctel, coctelFav,
            setCoctelFav, agregarCoctel,eliminarCoctel
        }} >
            {children}
        </UserContext.Provider >
    )
}
