import { useRoutes, BrowserRouter } from 'react-router-dom'

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
    {path: '/', element: <Home/>,},
    {path: '/order', element: <Order/>,},
    {path: '/signin', element: <SignIn/>,},
    {path: '/orders', element: <Orders/>,},
    {path: '/account', element: <Account/>,},
    {path: '*', element: <NotFound/>,}
  ])
  return routes
}

function App() {
  return (
    <BrowserRouter>
      <AppRouters/>
      <Navbar/>
    </BrowserRouter>
  ) 
}

export default App
