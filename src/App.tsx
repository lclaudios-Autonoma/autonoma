import { useEffect, useState } from 'react';
import Shell from './components/layout/Shell';
import Sidebar from './components/layout/Sidebar';
import MobileNav from './components/layout/MobileNav';
import ScrollProgress from './components/layout/ScrollProgress';
import BackgroundFX from './components/layout/BackgroundFX';
import NDAGate from './components/gate/NDAGate';
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
  const { accepted } = useNDASession();

  // Separar "sessão aceita" de "conteúdo revelado" para evitar o ruído visual:
  // o gate precisa terminar seu exit-animation (500 ms) antes de o conteúdo aparecer.
  const [revealed, setRevealed] = useState(accepted);
  useEffect(() => {
    if (!accepted) { setRevealed(false); return; }
    const t = setTimeout(() => setRevealed(true), 550);
    return () => clearTimeout(t);
  }, [accepted]);

  return (
    <>
      <BackgroundFX />
      <NDAGate />
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
    </>
  );
}
