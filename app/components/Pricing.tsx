const plans = [
  {
    name: "Starter",
    price: "Gratis",
    period: "",
    description: "Para equipos pequeños que están comenzando.",
    features: ["Hasta 3 usuarios", "5 proyectos activos", "Analíticas básicas", "Soporte por email"],
    cta: "Comenzar gratis",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/ mes",
    description: "Para equipos en crecimiento que necesitan más potencia.",
    features: [
      "Usuarios ilimitados",
      "Proyectos ilimitados",
      "IA integrada",
      "Analíticas avanzadas",
      "Integraciones premium",
      "Soporte prioritario",
    ],
    cta: "Empezar prueba gratis",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Para organizaciones que necesitan control total.",
    features: [
      "Todo lo de Pro",
      "SSO / SAML",
      "SLA garantizado",
      "Auditoría avanzada",
      "Onboarding dedicado",
      "Manager de cuenta",
    ],
    cta: "Contactar ventas",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-widest">Precios</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Simple y transparente
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            Sin sorpresas. Sin letra pequeña. Cancela en cualquier momento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border transition-all ${
                plan.highlight
                  ? "border-indigo-500 bg-indigo-600 text-white shadow-2xl shadow-indigo-200 scale-105"
                  : "border-gray-200 bg-white text-gray-900"
              }`}
            >
              {plan.highlight && (
                <span className="inline-block mb-4 text-xs font-bold tracking-widest uppercase bg-white/20 text-white px-3 py-1 rounded-full">
                  Más popular
                </span>
              )}
              <h3 className={`text-xl font-bold mb-1 ${plan.highlight ? "text-white" : "text-gray-900"}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.highlight ? "text-indigo-100" : "text-gray-500"}`}>
                {plan.description}
              </p>
              <div className="flex items-end gap-1 mb-8">
                <span className={`text-5xl font-extrabold ${plan.highlight ? "text-white" : "text-gray-900"}`}>
                  {plan.price}
                </span>
                <span className={`text-base mb-2 ${plan.highlight ? "text-indigo-200" : "text-gray-400"}`}>
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <svg
                      className={`w-4 h-4 flex-shrink-0 ${plan.highlight ? "text-indigo-200" : "text-indigo-500"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.highlight ? "text-indigo-100" : "text-gray-600"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`block text-center font-semibold py-3 rounded-full transition-colors text-sm ${
                  plan.highlight
                    ? "bg-white text-indigo-600 hover:bg-indigo-50"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
