import { createBrowserRouter } from 'react-router-dom'
import Inicio from '../pages/Inicio'
import Producto from '../pages/Producto'
import Contacto from '../pages/Contacto'
import Hero from '../components/Hero'

const RouterApp = createBrowserRouter([
  {
    path: '/',
    element: <Inicio />,
  },
  {
    path: '/producto',
    element: <Producto />,
  },
  {
    path: '/contacto',
    element: <Contacto />,
  },
  {
    path: '/Hero',
    element: <Hero />,
  },
  {
  },
])

export default RouterApp