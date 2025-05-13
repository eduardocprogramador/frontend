import { AuthContext } from "../contexts/Auth"
import { useContext } from "react"
import Header from "../components/Header"
import Title from "../components/Title"

const Clientes = () => {
  const {user} = useContext(AuthContext)
  return (
    <div>
      <Header />
      <Title titulo="Clientes" icon="fa-solid fa-users"/>
      <div className="container">
        <h6>Olá {user?.email}</h6>
      </div>
    </div>
  )
}

export default Clientes