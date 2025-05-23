import { AuthContext } from "../contexts/Auth"
import { useContext } from "react"
import Header from "../components/Header"
import Title from "../components/Title"

const Home = () => {
  const {user} = useContext(AuthContext)
  return (
    <div>
      <Header />
      <Title titulo="Chamados" icon="fa-solid fa-house"/>
      <div className="container">
        <h6>Olá {user?.email}</h6>
      </div>
    </div>
  )
}

export default Home