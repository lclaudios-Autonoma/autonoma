import { useEffect, useState } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Shell from './components/layout/Shell';
import Sidebar from './components/layout/Sidebar';
import MobileNav from './components/layout/MobileNav';
import ScrollProgress from './components/layout/ScrollProgress';
import BackgroundFX from './components/layout/BackgroundFX';
import NDAGate from './components/gate/NDAGate';
import LanguageGate from './components/gate/LanguageGate';
import { useNDASession } from './hooks/useNDASession';
import Hero from './components/sections/Hero';
import PropostaValor from './components/sections/PropostaValor';
import MarcaProduto from './components/sections/MarcaProduto';
import Persona from './components/sections/Persona';
import ModeloReceita from './components/sections/ModeloReceita';
import Agentes from './components/sections/Agentes';
import Planos from './components/sections/Planos';
import Onboarding from './components/sections/Onboarding';
import UnitEconomics from './components/sections/UnitEconomics';
import ProjecaoFinanceira from './components/sections/ProjecaoFinanceira';
import Cronograma from './components/sections/Cronograma';
import Riscos from './components/sections/Riscos';
import LATAM from './components/sections/LATAM';
import ConteudosFechamento from './components/sections/ConteudosFechamento';

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
      <ScrollProgress />
      <Sidebar />
      <MobileNav />

      <Shell blurred={!revealed}>
        <Hero />
        <PropostaValor />
        <MarcaProduto />
        <Persona />
        <ModeloReceita />
        <Agentes />
        <Planos />
        <Onboarding />
        <UnitEconomics />
        <ProjecaoFinanceira />
        <Cronograma />
        <Riscos />
        <LATAM />
        <ConteudosFechamento />
      </Shell>
      <SpeedInsights />
    </>
  );
}
