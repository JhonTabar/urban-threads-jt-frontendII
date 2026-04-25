
const Navbar = () => {
  return (
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex justify-between items-center h-16">
    <div className="flex items-center">
      <h1 className="text-xl font-bold tracking-wider">URBAN THREADS</h1>
    </div>
    <div className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-8">
        <a href="#" onclick="showPage('home')" className="nav-link px-3 py-2 text-sm font-medium hover:text-amber-400 cursor-pointer">Inicio</a>
        <a href="#" onclick="showPage('products')" className="nav-link px-3 py-2 text-sm font-medium hover:text-amber-400 cursor-pointer">Productos</a>
        <a href="#" onClick="showPage('contact')" className="nav-link px-3 py-2 text-sm font-medium hover:text-amber-400 cursor-pointer">Contacto</a>
      </div>
    </div>
    <div className="md:hidden">
      <button onclick="toggleMobileMenu()" className="text-white hover:text-amber-400 focus:outline-none">
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>
</div>

  )
}
export default Navbar;


