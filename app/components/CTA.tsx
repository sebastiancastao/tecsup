export default function CTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-indigo-600 to-purple-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
          Empieza hoy, gratis
        </h2>
        <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
          Únete a más de 5,000 equipos que ya usan Nexora para entregar mejores resultados.
          Sin tarjeta de crédito requerida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="bg-white text-indigo-600 font-bold px-8 py-4 rounded-full hover:bg-indigo-50 transition-colors shadow-lg text-base"
          >
            Crear cuenta gratis
          </a>
          <a
            href="#"
            className="border border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors text-base"
          >
            Hablar con ventas
          </a>
        </div>
      </div>
    </section>
  );
}
