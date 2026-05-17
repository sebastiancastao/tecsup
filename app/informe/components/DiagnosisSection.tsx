"use client";
import { useState } from "react";
import { topicMentions, keyQuestions, sentimentData } from "../data";

const MAX_MENTIONS = 11417;

function MentionBar({ value, max, color }: { value: number; max: number; color: string }) {
  const pct = Math.round((value / max) * 100);
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${color} transition-all duration-700`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-sm font-semibold text-gray-700 w-16 text-right">
        {value.toLocaleString("es-PE")}
      </span>
    </div>
  );
}

function SentimentBar({ positive, neutral, negative }: { positive: number; neutral: number; negative: number }) {
  return (
    <div className="flex h-2.5 rounded-full overflow-hidden gap-0.5 w-full min-w-[120px]">
      <div
        title={`Positivo: ${positive}%`}
        className="bg-green-400 rounded-l-full transition-all"
        style={{ width: `${positive}%` }}
      />
      <div
        title={`Neutral: ${neutral}%`}
        className="bg-gray-300 transition-all"
        style={{ width: `${neutral}%` }}
      />
      <div
        title={`Negativo: ${negative}%`}
        className="bg-red-400 rounded-r-full transition-all"
        style={{ width: `${negative}%` }}
      />
    </div>
  );
}

const tabs = ["Temáticas", "Preguntas clave", "Sentimiento"];
const barColors = [
  "bg-brand-400",
  "bg-brand-500",
  "bg-brand-600",
  "bg-brand-700",
];

export default function DiagnosisSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-12 px-6 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center text-sm font-bold">2</span>
          <h2 className="text-2xl font-bold text-gray-900">Diagnóstico Detallado</h2>
        </div>

        <div className="flex gap-2 mb-6 flex-wrap">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeTab === i
                  ? "bg-brand-600 text-white shadow-md shadow-brand-100"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-brand-300 hover:text-brand-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 0 && (
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-12 text-xs font-semibold text-gray-400 uppercase tracking-widest px-6 py-3 border-b border-gray-100 bg-gray-50">
              <div className="col-span-3 md:col-span-2">Temática</div>
              <div className="col-span-5 md:col-span-6">Menciones</div>
              <div className="col-span-2 hidden md:block">Volumen</div>
              <div className="col-span-4 md:col-span-2 text-right">Lectura estratégica</div>
            </div>
            {topicMentions.map((item, i) => (
              <div
                key={item.topic}
                className="grid grid-cols-12 items-center px-6 py-5 border-b border-gray-50 last:border-0 hover:bg-brand-50/40 transition-colors gap-y-2"
              >
                <div className="col-span-3 md:col-span-2">
                  <span className="font-semibold text-gray-800 text-sm leading-snug">{item.topic}</span>
                </div>
                <div className="col-span-8 md:col-span-6 pr-4">
                  <MentionBar value={item.mentions} max={MAX_MENTIONS} color={barColors[i]} />
                </div>
                <div className="col-span-0 md:col-span-2 hidden md:block" />
                <div className="col-span-12 md:col-span-2 text-xs text-gray-500 leading-snug">
                  {item.reading}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 1 && (
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-12 text-xs font-semibold text-gray-400 uppercase tracking-widest px-6 py-3 border-b border-gray-100 bg-gray-50">
              <div className="col-span-5">Pregunta del usuario</div>
              <div className="col-span-3">Menciones</div>
              <div className="col-span-4">Intención del usuario</div>
            </div>
            {keyQuestions.map((item, i) => (
              <div
                key={item.question}
                className="grid grid-cols-12 items-center px-6 py-5 border-b border-gray-50 last:border-0 hover:bg-brand-50/40 transition-colors gap-y-2"
              >
                <div className="col-span-5">
                  <span className="text-sm font-medium text-gray-800 italic">&quot;{item.question}&quot;</span>
                </div>
                <div className="col-span-3">
                  <div className="flex items-center gap-2">
                    <MentionBar value={item.mentions} max={10292} color={barColors[i]} />
                  </div>
                </div>
                <div className="col-span-4 text-xs text-gray-500 leading-snug pl-2">{item.intent}</div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 2 && (
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="px-6 py-3 border-b border-gray-100 bg-gray-50 flex items-center gap-6 text-xs font-semibold text-gray-400 uppercase tracking-widest">
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-green-400 inline-block" />Positivo</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-gray-300 inline-block" />Neutral</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-red-400 inline-block" />Negativo</span>
            </div>
            {sentimentData.map((item) => (
              <div
                key={item.concept}
                className="px-6 py-5 border-b border-gray-50 last:border-0 hover:bg-gray-50/60 transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-800 text-sm">{item.concept}</span>
                    {item.alert && (
                      <span className="text-xs bg-red-100 text-red-600 font-semibold px-2 py-0.5 rounded-full">
                        ⚠ Alerta
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-500 flex-shrink-0">
                    <span className="text-green-600 font-semibold">{item.positive}%</span>
                    <span className="text-gray-400">{item.neutral}%</span>
                    <span className="text-red-500 font-semibold">{item.negative}%</span>
                  </div>
                </div>
                <SentimentBar
                  positive={item.positive}
                  neutral={item.neutral}
                  negative={item.negative}
                />
                <p className="text-xs text-gray-500 mt-2 leading-snug">{item.reading}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
