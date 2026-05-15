export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-indigo-100/60 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-100/60 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block mb-4 text-xs font-semibold tracking-widest text-indigo-600 uppercase bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100">
          Nuevo · Versión 2.0 ya disponible
        </span>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight mb-6">
          Haz más con{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            menos esfuerzo
          </span>
        </h1>

        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Nexora centraliza tus proyectos, equipos y métricas en un solo lugar.
          Toma decisiones más rápidas con datos en tiempo real.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="bg-indigo-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 text-base"
          >
            Pruébalo gratis 14 días
          </a>
          <a
            href="#features"
            className="flex items-center justify-center gap-2 text-gray-700 font-semibold px-8 py-4 rounded-full border border-gray-200 hover:border-indigo-300 hover:text-indigo-600 transition-colors text-base"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Ver demo
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6 text-sm text-gray-400">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Sin tarjeta de crédito
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Cancela cuando quieras
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Soporte 24/7
          </span>
        </div>
      </div>

      <div className="mt-20 max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-indigo-100 border border-gray-100">
        <div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
          <div className="ml-4 flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-400">
            app.nexora.io/dashboard
          </div>
        </div>
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 h-64 flex items-center justify-center">
          <p className="text-white/60 text-sm font-medium">[ Vista previa del dashboard ]</p>
        </div>
      </div>
    </section>
  );
}
