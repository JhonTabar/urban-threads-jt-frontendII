const ProductCard = ({ nombre, material, precio }) => {
  return (
    <div className="product-card bg-white shadow-lg overflow-hidden">
      <div className="h-80 bg-gray-200 flex items-center justify-center">
        <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">{nombre}</h3>
        <p className="text-gray-600 mb-4">{material}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">€{precio}</span>
          <button className="bg-gray-900 text-white px-4 py-2 hover:bg-gray-800 transition-colors">
            AÑADIR
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard