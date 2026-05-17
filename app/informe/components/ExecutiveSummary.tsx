export default function ExecutiveSummary() {
  return (
    <section className="py-12 px-6 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center text-sm font-bold">1</span>
          <h2 className="text-2xl font-bold text-gray-900">Resumen Ejecutivo</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2 bg-brand-50 rounded-2xl p-6 border border-brand-100">
            <p className="text-gray-700 leading-relaxed">
              El análisis de casi{" "}
              <span className="font-bold text-brand-700">20,000 menciones</span> en plataformas de IA durante los
              últimos tres meses revela que Tecsup tiene una fuerte presencia y es un tema de conversación
              relevante para los potenciales estudiantes.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              Tecsup es una marca reconocida, pero para convertir el interés en inscripciones, debemos
              enfocarnos en{" "}
              <span className="font-semibold text-gray-800">reforzar la confianza</span> y{" "}
              <span className="font-semibold text-gray-800">clarificar nuestra propuesta de valor económico</span>.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="bg-green-50 border border-green-100 rounded-xl p-4 flex items-start gap-3">
              <span className="text-2xl">📚</span>
              <div>
                <p className="font-semibold text-green-800 text-sm">Mayor interés</p>
                <p className="text-green-700 text-sm">Oferta académica</p>
              </div>
            </div>
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 flex items-start gap-3">
              <span className="text-2xl">⚠️</span>
              <div>
                <p className="font-semibold text-orange-800 text-sm">Área de mejora</p>
                <p className="text-orange-700 text-sm">Costos y financiamiento</p>
              </div>
            </div>
            <div className="bg-brand-50 border border-brand-100 rounded-xl p-4 flex items-start gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <p className="font-semibold text-brand-800 text-sm">Acción clave</p>
                <p className="text-brand-700 text-sm">Convertir interés en inscripciones</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
