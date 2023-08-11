import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom'
import { ShoppingContext, ShoppingProvider } from '../../context'

import Home from '../Home'
import Order from '../Order'
import SignIn from '../SignIn'
import Orders from '../Orders'
import Account from '../Account'
import NotFound from '../NotFound'
import Navbar from '../../components/Navbar'

import './App.css'
import { Signup } from '../Sign-up'
import { useContext, useEffect } from 'react'

const AppRouters = () => {

  useEffect(() => {
    const handleBeforeUnload = () => {
      let usuarios = JSON.parse(localStorage.getItem("usuarios"))
      let user = usuarios.find(usuario => usuario.online === true)
      user.online = false
      localStorage.setItem("usuarios", JSON.stringify(usuarios))
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const contexto = useContext(ShoppingContext)
  let isAuthenticated = contexto.online

  let routes = useRoutes([
    { path: '/', element: <Home />, },
    { path: '/home/:category', element: <Home />, },
    { path: '/order', element: <Order />, },
    { path: '/signin', element: <SignIn />, },
    { path: '/orders', element: isAuthenticated ? <Orders /> : <Navigate to="/signin" />, },
    { path: '/orders/last', element: isAuthenticated ? <Orders /> : <Navigate to="/signin" />, },
    { path: '/orders/:orderId', element: isAuthenticated ? <Order /> : <Navigate to="/signin" />, },
    { path: '/account', element: isAuthenticated ? <Account /> : <Navigate to="/signin" />, },
    { path: '/sign-up', element: <Signup />, },
    { path: '*', element: <NotFound />, }
  ])
  return routes
}

function App() {
  return (
    <ShoppingProvider>
      <BrowserRouter>
        <AppRouters />
        <Navbar />
      </BrowserRouter>
    </ShoppingProvider>
  )
}

export default App
