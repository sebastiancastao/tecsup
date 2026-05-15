"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          Nexora
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#features" className="hover:text-indigo-600 transition-colors">Características</a>
          <a href="#testimonials" className="hover:text-indigo-600 transition-colors">Testimonios</a>
          <a href="#pricing" className="hover:text-indigo-600 transition-colors">Precios</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">
            Iniciar sesión
          </a>
          <a
            href="#"
            className="bg-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-indigo-700 transition-colors"
          >
            Empezar gratis
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4 text-sm font-medium text-gray-700">
          <a href="#features" onClick={() => setOpen(false)}>Características</a>
          <a href="#testimonials" onClick={() => setOpen(false)}>Testimonios</a>
          <a href="#pricing" onClick={() => setOpen(false)}>Precios</a>
          <a href="#" className="text-indigo-600 font-semibold">Empezar gratis →</a>
        </div>
      )}
    </header>
  );
}
