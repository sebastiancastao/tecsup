const features = [
  {
    icon: "⚡",
    title: "Velocidad extrema",
    description: "Panel que carga en menos de 200ms. Tus datos siempre disponibles al instante.",
  },
  {
    icon: "🔐",
    title: "Seguridad de nivel empresarial",
    description: "Cifrado end-to-end, autenticación 2FA y auditoría de accesos en tiempo real.",
  },
  {
    icon: "🤖",
    title: "IA integrada",
    description: "Obtén resúmenes automáticos, predicciones y sugerencias accionables con un clic.",
  },
  {
    icon: "📊",
    title: "Analíticas avanzadas",
    description: "Visualiza tus KPIs con gráficas interactivas y reportes exportables en PDF o CSV.",
  },
  {
    icon: "🔗",
    title: "Integraciones sin límites",
    description: "Conecta con Slack, Notion, Jira, GitHub y más de 100 herramientas populares.",
  },
  {
    icon: "🌍",
    title: "Multi-equipo y multi-idioma",
    description: "Soporta equipos distribuidos globalmente con roles, permisos e idiomas configurables.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-widest">
            Características
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Todo lo que necesitas
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Diseñado para equipos modernos que quieren moverse rápido sin sacrificar calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50 transition-all duration-300 bg-white"
            >
              <div className="text-4xl mb-5">{f.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {f.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
