import { useState } from 'react'

const ContactForm = () => {
  const [nombre, setNombre] = useState('')
  const [apellidos, setApellidos] = useState('')
  const [email, setEmail] = useState('')
  const [asunto, setAsunto] = useState('')
  const [mensaje, setMensaje] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = { nombre, apellidos, email, asunto, mensaje }
    console.log('Formulario enviado:', formData)
    localStorage.setItem('contactForm', JSON.stringify(formData))
    alert('Mensaje enviado correctamente')
  }

  return (
    <div className="bg-white p-8 shadow-lg">
      <h3 className="text-2xl font-semibold mb-6">ENVÍANOS UN MENSAJE</h3>

      <div className="bg-amber-100 border-l-4 border-amber-500 p-4 mb-6">
        <p className="text-amber-700 text-sm">
          <strong>Demo:</strong> Este es un formulario de demostración.
          Los mensajes no se enviarán realmente.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">NOMBRE</label>
            <input
              type="text"
              required
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">APELLIDOS</label>
            <input
              type="text"
              required
              value={apellidos}
              onChange={(e) => setApellidos(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">EMAIL</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">ASUNTO</label>
          <select
            required
            value={asunto}
            onChange={(e) => setAsunto(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 outline-none focus:ring-2 focus:ring-gray-900"
          >
            <option value="">Selecciona un asunto</option>
            <option value="general">Consulta general</option>
            <option value="product">Información de producto</option>
            <option value="order">Estado de pedido</option>
            <option value="return">Devoluciones</option>
            <option value="other">Otro</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">MENSAJE</label>
          <textarea
            rows={5}
            required
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 outline-none focus:ring-2 focus:ring-gray-900 resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-900 text-white py-4 px-6 hover:bg-gray-800 transition-colors font-semibold tracking-wider"
        >
          ENVIAR MENSAJE
        </button>
      </form>
    </div>
  )
}

export default ContactForm
