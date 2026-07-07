import { useEffect, useState, lazy, Suspense } from 'react';
import Shell from './components/layout/Shell';
import BackgroundFX from './components/layout/BackgroundFX';
import NDAGate from './components/gate/NDAGate';
import LanguageGate from './components/gate/LanguageGate';
import { useNDASession } from './hooks/useNDASession';

const Hero = lazy(() => import('./components/sections/Hero'));
const Sidebar = lazy(() => import('./components/layout/Sidebar'));
const MobileNav = lazy(() => import('./components/layout/MobileNav'));
const ScrollProgress = lazy(() => import('./components/layout/ScrollProgress'));
const PropostaValor = lazy(() => import('./components/sections/PropostaValor'));
const MarcaProduto = lazy(() => import('./components/sections/MarcaProduto'));
const Persona = lazy(() => import('./components/sections/Persona'));
const ModeloReceita = lazy(() => import('./components/sections/ModeloReceita'));
const Agentes = lazy(() => import('./components/sections/Agentes'));
const Planos = lazy(() => import('./components/sections/Planos'));
const Onboarding = lazy(() => import('./components/sections/Onboarding'));
const UnitEconomics = lazy(() => import('./components/sections/UnitEconomics'));
const ProjecaoFinanceira = lazy(() => import('./components/sections/ProjecaoFinanceira'));
const Cronograma = lazy(() => import('./components/sections/Cronograma'));
const Riscos = lazy(() => import('./components/sections/Riscos'));
const ConteudosFechamento = lazy(() => import('./components/sections/ConteudosFechamento'));
const Mercado = lazy(() => import('./components/sections/Mercado'));

export default function App() {
  // ── FONTE ÚNICA DE VERDADE para o estado NDA ──────────────────────
  // useNDASession só é chamado aqui. NDAGate recebe accepted/accept
  // via props para evitar que cada instância tenha estado próprio
  // (o bug que exigia reload após aceite).
  const { accepted, accept } = useNDASession();

  // Separar "sessão aceita" de "conteúdo revelado":
  // aguarda 550 ms para o gate terminar o exit-animation antes de revelar.
  const [revealed, setRevealed] = useState(accepted);
  useEffect(() => {
    if (!accepted) { setRevealed(false); return; }
    const t = setTimeout(() => setRevealed(true), 550);
    return () => clearTimeout(t);
  }, [accepted]);

  return (
    <>
      <BackgroundFX />
      <LanguageGate />
      <NDAGate accepted={accepted} onAccept={accept} />
      {revealed && (
        <Suspense fallback={null}>
          <ScrollProgress />
          <Sidebar />
          <MobileNav />
        </Suspense>
      )}

      <Shell blurred={!revealed}>
        {revealed && (
          <Suspense fallback={null}>
            <Hero />
            <PropostaValor />
            <MarcaProduto />
            <Persona />
            <ModeloReceita />
            <Mercado />
            <Agentes />
            <Planos />
            <Onboarding />
            <UnitEconomics />
            <ProjecaoFinanceira />
            <Cronograma />
            <Riscos />
            <ConteudosFechamento />
          </Suspense>
        )}
      </Shell>
    </>
  );
}
