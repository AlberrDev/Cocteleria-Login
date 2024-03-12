import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext"
import { RegisterForm } from "./RegisterForm"
import { useNavigate } from "react-router-dom"


export const RegisterPage = () => {

  const { user, setUser } = useContext(UserContext)
  const [userRegistrado, setUserRegistrado] = useState({
    nombre: "",
    email: "",
    password: "",
  })
  const [noUser, setnoUser] = useState(false)
  const [noEmail, setnoEmail] = useState(false)
  const [noPassword, setnoPassword] = useState(false)
  const navigate = useNavigate();



  const onInputChange = (e) => {

 


    const { name, value } = e.target

    setUserRegistrado({
      ...userRegistrado,
      [name]: value
    })
  }
  console.log(userRegistrado);

  const onSubmit = (e) => {
    e.preventDefault();
    if (userRegistrado.nombre == "") {
      setnoUser(true)
      setTimeout(() => {
        setnoUser(false)
      }, 3000);
    }
    if (userRegistrado.email == "") {
      setnoEmail(true)
      setTimeout(() => {
        setnoEmail(false)

      }, 3000);
    }
    if (userRegistrado.password == "") {
      setnoPassword(true)
      setTimeout(() => {
        setnoPassword(false)

      }, 3000);

    }
    if (userRegistrado.nombre != "" && userRegistrado.email != "" && userRegistrado.password != "") {
      setUser(userRegistrado);
      navigate("/login")
    }

  }


  return (
    <>
      <RegisterForm onInputChange={onInputChange} onSubmit={onSubmit} />
      {
        noUser ?
          (
            <p>Tiene que introducir el usuario</p>
          ) :
          ("")
      }
      {
        noEmail ?
          (
            <p>Tiene que introducir el email</p>
          ) :
          ("")
      }
      {
        noPassword ?
          (
            <p>Tiene que introducir el password</p>
          ) :
          ("")
      }


    </>
  )
}

