"use client";
import { useState } from "react";
import { priorities } from "../data";

export default function ActionPlan() {
  const [expanded, setExpanded] = useState<number | null>(1);

  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center text-sm font-bold">3</span>
          <h2 className="text-2xl font-bold text-gray-900">Plan de Acción — Mayo</h2>
        </div>
        <p className="text-gray-500 text-sm ml-11 mb-8">
          5 prioridades estratégicas para optimizar la presencia de Tecsup en ecosistemas de IA.
        </p>

        <div className="space-y-4">
          {priorities.map((p) => {
            const isOpen = expanded === p.id;
            return (
              <div
                key={p.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? "border-brand-200 shadow-md shadow-brand-50" : "border-gray-100 hover:border-gray-200"
                }`}
              >
                <button
                  onClick={() => setExpanded(isOpen ? null : p.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${p.color} text-white flex items-center justify-center text-sm font-extrabold flex-shrink-0`}
                    >
                      P{p.id}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-gray-900 text-base">{p.title}</span>
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${p.badgeColor}`}>
                          {p.badge}
                        </span>
                      </div>
                    </div>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="pt-5 mb-6">
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">Objetivo</p>
                      <p className="text-gray-700 leading-relaxed">{p.objective}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">
                          Lo que se busca hacer
                        </p>
                        <ul className="space-y-2">
                          {p.actions.map((action) => (
                            <li key={action} className="flex items-start gap-2 text-sm text-gray-700">
                              <svg
                                className={`w-4 h-4 mt-0.5 flex-shrink-0 bg-gradient-to-br ${p.color} text-white rounded-full p-0.5`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                              {action}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">
                          Métricas GEO
                        </p>
                        <ul className="space-y-2">
                          {p.metrics.map((metric) => (
                            <li key={metric} className="flex items-start gap-2 text-sm text-gray-600">
                              <svg
                                className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                              {metric}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
