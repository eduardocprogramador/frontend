import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Private from "./Private"
import Clientes from "./pages/Clientes"

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/home" element={<Private><Home /></Private>} />
      <Route path="/clientes" element={<Private><Clientes /></Private>} />
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default RoutesApp