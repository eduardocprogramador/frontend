import { useRef } from "react"
import { Link } from "react-router-dom"
import Logo from '../assets/logo.png'
import { AuthContext } from "../contexts/Auth"
import { useContext } from "react"

const Login = () => {
    const emailRef = useRef()
    const senhaRef = useRef()
    const {login, loading} = useContext(AuthContext)
    async function handleLogin(e){
        e.preventDefault()
        const email = emailRef.current.value
        const senha = senhaRef.current.value
        await login(email, senha)
    }
    return (
        <div className="container">
            <div className="row min-vh-100 align-items-center">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="col-2 offset-5 mt-4 mb-3">
                            <img src={Logo} alt="Logo" className="img-fluid" />
                        </div>
                        <div className="card-body">
                            <h3 className="text-center mb-3">Login</h3>
                            <form onSubmit={handleLogin}>
                                <label className="mb-2">Email:</label>
                                <input required type="email" ref={emailRef} className="form-control mb-3"/>
                                <label className="mb-2">Senha:</label>
                                <input required type="password" ref={senhaRef} className="form-control mb-4"/>
                                <div className="col-md-6 offset-md-3 col-8 offset-2">
                                    <input type="submit" value={loading ? 'Carregando...' : 'Acessar'} className="form-control btn btn-primary mb-3" disabled={loading}/>
                                </div>
                            </form>
                            <span>Não possui uma conta? </span>
                            <Link to='/register' className="text-decoration-none">crie aqui</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login