import { useState, useEffect, createContext } from "react"
import { auth } from "../Firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export const AuthContext = createContext({})

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [loadingAuth, setLoadingAuth] = useState(true)
    const navigate = useNavigate()
    useEffect(() => {
        const storagedUser = localStorage.getItem('@user')
        if (storagedUser) {
            setUser(JSON.parse(storagedUser))
        }
        setLoadingAuth(false)
    },[])
    async function register(email, senha, confirmSenha){
        if(senha != confirmSenha){
            toast.error('Senha e confirmar senha precisam ser iguais')
            return
        } 
        setLoading(true)
        await createUserWithEmailAndPassword(auth, email, senha)
        .then(() => {
            navigate('/')
            toast.success('Conta Criada')
        }).catch((erro) => {
        if (erro.code.includes('email-already-in-use')) {
            toast.error('Este email já está em uso')
        } else if(erro.code.includes('weak-password')) {
            toast.error('Senha precisa ter no mínimo 6 caracteres')
        }else {
            toast.error('Erro ao cadastrar')
        }
        })
        setLoading(false)
    }
    async function login(email,senha){
        setLoading(true)
        await signInWithEmailAndPassword(auth, email, senha)
        .then((value) => {
            const userData = {
                uid: value.user.uid,
                email: value.user.email
            }
            setUser(userData)
            localStorage.setItem('@user', JSON.stringify(userData))
            navigate('/home')
        }).catch((erro) => {
            if (erro.code.includes('invalid-credential')) {
                toast.error('Email e/ou senha incorreta')
            } else{
                toast.error('Erro ao fazer o login')
            }   
        })
        setLoading(false)
    }
    async function logout(){
        await signOut(auth)
        localStorage.removeItem('@user')
        setUser(null)
    }
    return (
        <AuthContext.Provider value={{signed: !!user, user, setUser, loading, loadingAuth, register, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider