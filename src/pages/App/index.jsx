import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingProvider } from '../../context'

import Home from '../Home'
import Order from '../Order'
import SignIn from '../SignIn'
import Orders from '../Orders'
import Account from '../Account'
import NotFound from '../NotFound'
import Navbar from '../../components/Navbar'

import './App.css'

const AppRouters = () => {
  let routes = useRoutes([
    { path: '/', element: <Home />, },
    { path: '/order', element: <Order />, },
    { path: '/signin', element: <SignIn />, },
    { path: '/orders', element: <Orders />, },
    { path: '/orders/last', element: <Order />, },
    { path: '/account', element: <Account />, },
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
