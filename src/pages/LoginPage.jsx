import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext"
import { LoginForm } from "./LoginForm"
import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext)
  const [noEsCorrecto, setnoEsCorrecto] = useState(false);
  const [userLogeado, setUserLogeado] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target

    setUserLogeado({
      ...userLogeado,
      [name]: value
    })
  }
  console.log(userLogeado);

  const onSubmit = (e) => {
    e.preventDefault();
    if ((user.nombre == userLogeado.nombre || user.nombre == userLogeado.email)
      && user.password == userLogeado.password) {

      setnoEsCorrecto(false)
      navigate("/Home/*")


    } else {
      setnoEsCorrecto(true)

    }



  }


  return (
    <>
      <LoginForm onInputChange={onInputChange} onSubmit={onSubmit} />
      {
        noEsCorrecto ? (
          <p>Las credenciales no son correctas</p>


        ) : (
          ""
        )
      }
    </>
  )
}

