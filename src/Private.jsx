import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "./contexts/Auth"

const Private = ({children}) => {
    const {signed, loadingAuth} = useContext(AuthContext)
    if (loadingAuth) {
        return <h2>Carregando...</h2>
    }
    if(!signed){
        return <Navigate to='/' />
    }
    return children
}

export default Private