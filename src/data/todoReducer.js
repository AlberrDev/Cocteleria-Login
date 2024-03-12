
export const todoReducer = (initialState = [], action) => {


    switch (action.type) {
        case "Agregar Coctel":
            console.log(initialState, "xd")
            console.log(action.payload.nombre, "xd2")
            let objeto = {
                id: action.payload.id,
                nombre: action.payload.nombre,
                foto: action.payload.foto

            }
            return [...initialState, objeto]
        case "Eliminar Coctel":
            console.log(initialState)
            console.log(action.payload)
            let filtrado = initialState.filter(ele => ele.id != action.payload)
            return filtrado;


        default:

            return initialState;
    }


}
