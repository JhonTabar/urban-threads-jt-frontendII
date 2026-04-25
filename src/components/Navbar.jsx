import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="urban-gradient text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-xl font-bold tracking-wider">URBAN THREADS</h1>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="nav-link px-3 py-2 text-sm font-medium hover:text-amber-400">
                Inicio
              </Link>
              <Link to="/producto" className="nav-link px-3 py-2 text-sm font-medium hover:text-amber-400">
                Productos
              </Link>
              <Link to="/contacto" className="nav-link px-3 py-2 text-sm font-medium hover:text-amber-400">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar