import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import RoutesApp from './RoutesApp'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './contexts/Auth'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer autoClose={3000} />
        <RoutesApp />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
