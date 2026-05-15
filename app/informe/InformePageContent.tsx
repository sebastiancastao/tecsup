import ReportHeader from "./components/ReportHeader";
import ExecutiveSummary from "./components/ExecutiveSummary";
import DiagnosisSection from "./components/DiagnosisSection";
import ActionPlan from "./components/ActionPlan";

export default function InformePageContent() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <ReportHeader />
      <ExecutiveSummary />
      <DiagnosisSection />
      <ActionPlan />

      <footer className="bg-[#003087] text-blue-200 text-center py-6 text-xs">
        Tecsup - Informe Ejecutivo IA - Periodo Feb-Abr 2026 - Equipo de Estrategia Digital
      </footer>
    </div>
  );
}
