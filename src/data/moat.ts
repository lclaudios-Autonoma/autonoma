import { Lang } from '../i18n/LanguageContext';

export interface MoatPillar {
  kicker: string;
  title: string;
  text: string;
}

export const moatPillars: Record<Lang, MoatPillar[]> = {
  pt: [
    {
      kicker: 'Infraestrutura, não diferencial',
      title: 'Anthropic move o motor',
      text: 'Haiku 4.5 alimenta os 14 dias de trial gratuito — custo mínimo para criar o hábito. Sonnet 4.6 sustenta os planos pagos, com a robustez para memória profunda e agentes autônomos. O Prompt Caching é o que torna o ticket de R$39,90 viável: sem ele, lembrar a rotina de cada usuária custaria mais do que o plano paga.',
    },
    {
      kicker: 'O que ninguém compra de prateleira',
      title: 'O moat é o dado, não o modelo',
      text: 'Qualquer concorrente acessa a mesma API. Nenhum acessa os meses de conversas, rotinas e preferências que a Noma acumula sobre cada Marina. Cada interação ensina a Noma a antecipar melhor — e essa vantagem composta é exatamente o tipo de ativo que um competidor bem financiado não recria em menos de dois anos.',
    },
    {
      kicker: 'Por que a mulher brasileira, e não o genérico',
      title: 'Profundidade vertical > amplitude genérica',
      text: 'Assistentes generalistas tratam todo usuário igual. A Noma é construída para uma pessoa específica — a mulher brasileira de 25 a 50 anos com carga mental real. Essa especificidade vira lock-in: trocar de produto não é só perder um app, é perder o histórico que faz a Noma entender sem precisar perguntar de novo.',
    },
  ],
  en: [
    {
      kicker: 'Infrastructure, not differentiation',
      title: 'Anthropic powers the engine',
      text: "Haiku 4.5 fuels the 14-day free trial — minimal cost to build the habit. Sonnet 4.6 sustains paid plans, with the robustness for deep memory and autonomous agents. Prompt Caching is what makes the R$39.90 ticket viable: without it, remembering each user\'s routine would cost more than the plan itself.",
    },
    {
      kicker: 'What no one can buy off the shelf',
      title: 'The moat is the data, not the model',
      text: "Any competitor accesses the same API. None accesses the months of conversations, routines and preferences Noma accumulates about each Marina. Every interaction teaches Noma to anticipate better — and that compounding advantage is exactly the kind of asset a well-funded competitor can\'t recreate in under two years.",
    },
    {
      kicker: 'Why the Brazilian woman, not the generic',
      title: 'Vertical depth beats generic breadth',
      text: 'Generalist assistants treat every user the same. Noma is built for one specific person — the Brazilian woman aged 25–50 carrying real mental load. That specificity becomes lock-in: switching products means losing the history that lets Noma understand without asking again.',
    },
  ],
};
