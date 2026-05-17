const testimonials = [
  {
    name: "Ana García",
    role: "CTO en Startify",
    avatar: "AG",
    color: "bg-brand-500",
    quote:
      "Nexora transformó la forma en que coordinamos nuestros sprints. Redujimos reuniones a la mitad y la visibilidad del equipo es increíble.",
  },
  {
    name: "Carlos Mendoza",
    role: "Product Manager en FinFlow",
    avatar: "CM",
    color: "bg-brand-600",
    quote:
      "Las analíticas con IA nos ayudaron a detectar un cuello de botella que nos costaba 20% de conversiones. Recuperamos la inversión en el primer mes.",
  },
  {
    name: "Sofía Reyes",
    role: "CEO en NovaTech",
    avatar: "SR",
    color: "bg-brand-700",
    quote:
      "La interfaz es tan intuitiva que no necesitamos onboarding. Mi equipo de 40 personas lo adoptó en un día sin una sola queja.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-gradient-to-br from-brand-50 to-brand-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-semibold text-sm uppercase tracking-widest">
            Testimonios
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Amado por equipos reales
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            Más de 5,000 equipos en 40 países confían en Nexora cada día.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-8 shadow-sm border border-white">
              <div className="flex mb-4 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 italic">&quot;{t.quote}&quot;</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
