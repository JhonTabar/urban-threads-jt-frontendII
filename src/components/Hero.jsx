import { Link } from 'react-router-dom'
import React from 'react'

const Hero = () => {
    return (
        <section className="urban-gradient text-white py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="hero-text text-5xl text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight">
                    ESTILO URBANO
                    <span className="block text-amber-400">REDEFINIDO</span>
                </h2>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light text-center">
                    Descubre nuestra colección exclusiva de ropa urbana minimalista
                </p>
                <Link
                    to="/productos"
                    className="bg-amber-500 hover:bg-amber-600 text-black font-semibold py-4 px-8 transition-all duration-300 inline-block"
                >
                    EXPLORAR COLECCIÓN
                </Link>
            </div>
        </section>
    )
}

export default Hero