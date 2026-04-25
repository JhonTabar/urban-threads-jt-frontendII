import React from 'react'
import { Link } from 'react-router-dom'

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          <div className="text-center">
            <div className="w-16 h-16 bg-gray-900 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.828 2.828A4 4 0 019.172 21H7l-2-2h5.172a4 4 0 002.828-2.828L21 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">DISEÑO ÚNICO</h3>
            <p className="text-gray-600">Piezas exclusivas con estética urbana y minimalista</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gray-900 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">CALIDAD PREMIUM</h3>
            <p className="text-gray-600">Materiales de alta calidad para máxima durabilidad</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gray-900 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">ENVÍO RÁPIDO</h3>
            <p className="text-gray-600">Entrega express en 24-48 horas</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Features