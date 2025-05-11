import { Link } from "react-router-dom"
import Logo from '../assets/logo.png'
import { AuthContext } from "../contexts/Auth"
import { useContext } from "react"

const Header = () => {
    const {logout} = useContext(AuthContext)
    async function handleLogout(){
        await logout()
    }
    return (
        <header className='bg-primary'>
            <nav className="navbar navbar-expand-md fixed-top bg-primary">
                <div className='container'>
                    <Link to="/home" className="navbar-brand">
                        <img src={Logo} id="logo" width="70" />
                    </Link>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav-principal">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="nav-principal">
                        <ul className="navbar-nav d-flex justify-content-between w-100">
                            <li className="nav-item mx-auto">
                                <Link to="/" className="nav-link fw-bold mb-1 text-light">
                                    <i class="fa-solid fa-house"></i> Início
                                </Link>
                            </li>
                            <li className="nav-item mx-auto">
                                <Link to="/" className="nav-link fw-bold mb-2 text-light">
                                    <i class="fa-solid fa-envelope"></i> Contato
                                </Link>
                            </li>
                            <li className="nav-item mx-auto">
                                <button onClick={handleLogout} className="btn btn-danger px-4 fw-bold">Sair</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header