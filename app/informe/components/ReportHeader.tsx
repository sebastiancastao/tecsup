import { reportMeta } from "../data";

export default function ReportHeader() {
  return (
    <div className="bg-gradient-to-br from-[#003087] to-[#0057B8] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-start gap-4 mb-8">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl font-black">
            T
          </div>
          <div>
            <p className="text-blue-200 text-sm font-medium uppercase tracking-widest">Tecsup</p>
            <p className="text-white/70 text-xs">Instituto de Educación Superior Tecnológico</p>
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 max-w-3xl">
          Informe Ejecutivo de Tecsup en{" "}
          <span className="text-blue-200">Ecosistemas de IA</span>
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Para", value: reportMeta.to },
            { label: "De", value: reportMeta.from },
            { label: "Período", value: reportMeta.period },
            { label: "Menciones analizadas", value: reportMeta.totalMentions.toLocaleString("es-PE") },
          ].map((item) => (
            <div key={item.label} className="bg-white/10 rounded-xl px-4 py-3 backdrop-blur-sm">
              <p className="text-blue-200 text-xs font-medium uppercase tracking-wide mb-1">{item.label}</p>
              <p className="text-white font-semibold text-sm leading-snug">{item.value}</p>
            </div>
          ))}
        </div>

        <p className="text-blue-100 max-w-2xl text-sm leading-relaxed border-l-2 border-blue-300 pl-4">
          Presentar un análisis completo de cómo la marca Tecsup está siendo percibida y discutida en motores de
          respuesta de IA, y establecer un plan de acción para optimizar nuestra presencia y mejorar la captación
          de estudiantes.
        </p>
      </div>
    </div>
  );
}
