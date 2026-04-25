import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'

const products = [
  { id: 1, nombre: 'Camiseta Básica Urban', material: 'Algodón 100% orgánico', precio: 29 },
  { id: 2, nombre: 'Jeans Slim Fit', material: 'Denim premium stretch', precio: 89 },
  { id: 3, nombre: 'Sudadera Oversize', material: 'Algodón French Terry', precio: 65 },
  { id: 4, nombre: 'Chaqueta Bomber', material: 'Nylon resistente al agua', precio: 120 },
  { id: 5, nombre: 'Gorra Snapback', material: 'Bordado premium', precio: 35 },
  { id: 6, nombre: 'Zapatillas Urban', material: 'Suela de goma antideslizante', precio: 95 },
]

const Producto = () => {
  return (
    <div>
      <Navbar />
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">NUESTRA COLECCIÓN</h2>
            <p className="text-xl text-gray-600">Estilo urbano para cada ocasión</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Producto