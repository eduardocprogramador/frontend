import { useRef } from "react"
import { Link } from "react-router-dom"
import Logo from '../assets/logo.png'
import { AuthContext } from "../contexts/Auth"
import { useContext } from "react"

const Register = () => {
  const emailRef = useRef()
  const senhaRef = useRef()
  const confirmSenhaRef = useRef()
  const {register, loading} = useContext(AuthContext)
  async function handleRegister(e){
    e.preventDefault()
    const email = emailRef.current.value
    const senha = senhaRef.current.value
    const confirmSenha = confirmSenhaRef.current.value
    await register(email, senha, confirmSenha)
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
              <h3 className="text-center mb-3">Criar Conta</h3>
              <form onSubmit={handleRegister}>
                <label className="mb-2">Email:</label>
                <input required type="email" ref={emailRef} className="form-control mb-3"/>
                <label className="mb-2">Senha:</label>
                <input required type="password" ref={senhaRef} className="form-control mb-3"/>
                <label className="mb-2">Confirmar Senha:</label>
                <input required type="password" ref={confirmSenhaRef} className="form-control mb-4"/>
                <div className="col-md-6 offset-md-3 col-8 offset-2">
                  <input type="submit" value={loading ? 'Carregando...' : 'Cadastrar'} className="form-control btn btn-primary mb-4" disabled={loading} />
                </div>
              </form>
              <span>Já possui uma conta? </span>
              <Link to='/' className="text-decoration-none">faça login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register