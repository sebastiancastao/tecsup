import Image from "next/image";
import { reportMeta } from "../data";
import seoLabLogo from "../../../SeoLab Logo (3).png";

export default function ReportHeader() {
  return (
    <div className="bg-gradient-to-br from-brand-700 to-brand-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col gap-6 mb-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl font-black">
              T
            </div>
            <div>
              <p className="text-brand-100 text-sm font-medium uppercase tracking-widest">Tecsup</p>
              <p className="text-white/70 text-xs">Instituto de Educación Superior Tecnológico</p>
            </div>
          </div>

          <div className="self-end rounded-2xl bg-white/95 px-4 py-3 shadow-lg shadow-black/10 sm:self-start">
            <Image
              src={seoLabLogo}
              alt="SeoLab"
              priority
              className="h-auto w-36 sm:w-40 md:w-44"
            />
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 max-w-3xl">
          Informe Ejecutivo de Tecsup en{" "}
          <span className="text-brand-100">Ecosistemas de IA</span>
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Para", value: reportMeta.to },
            { label: "De", value: reportMeta.from },
            { label: "Período", value: reportMeta.period },
            { label: "Menciones analizadas", value: reportMeta.totalMentions.toLocaleString("es-PE") },
          ].map((item) => (
            <div key={item.label} className="bg-white/10 rounded-xl px-4 py-3 backdrop-blur-sm">
              <p className="text-brand-100 text-xs font-medium uppercase tracking-wide mb-1">{item.label}</p>
              <p className="text-white font-semibold text-sm leading-snug">{item.value}</p>
            </div>
          ))}
        </div>

        <p className="text-brand-50 max-w-2xl text-sm leading-relaxed border-l-2 border-brand-200 pl-4">
          Presentar un análisis completo de cómo la marca Tecsup está siendo percibida y discutida en motores de
          respuesta de IA, y establecer un plan de acción para optimizar nuestra presencia y mejorar la captación
          de estudiantes.
        </p>
      </div>
    </div>
  );
}
