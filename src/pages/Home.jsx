import { AuthContext } from "../contexts/Auth"
import { useContext } from "react"
import Header from "../components/Header"

const Home = () => {
  const {user} = useContext(AuthContext)
  return (
    <div>
      <Header />
      <h2 className="margin-header">Olá {user?.email}</h2>
    </div>
  )
}

export default Home