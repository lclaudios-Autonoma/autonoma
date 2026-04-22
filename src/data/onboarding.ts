export interface OnboardingQ {
  index: number;
  topic: string;
  prompt: string;
}

export const questions: OnboardingQ[] = [
  { index: 1, topic: 'Nome', prompt: 'Como posso te chamar?' },
  { index: 2, topic: 'Idade + Estado civil', prompt: 'Quantos anos e como é sua vida hoje?' },
  { index: 3, topic: 'Cidade + Estado', prompt: 'Em que cidade você está?' },
  { index: 4, topic: 'Renda aproximada', prompt: 'Qual faixa calibra melhor o que te indicar?' },
  { index: 5, topic: 'Dor principal', prompt: 'O que mais te consome no dia a dia?' },
  {
    index: 6,
    topic: 'O que ela busca',
    prompt: 'Se a Noma fizesse uma coisa por semana, o que seria?',
  },
  { index: 7, topic: 'Hábitos e hobbies', prompt: 'O que você faz quando tem um tempinho?' },
  {
    index: 8,
    topic: 'Descrição livre',
    prompt: 'Em poucas palavras, como você descreveria o que precisa?',
  },
];

export const viralLoopSteps = [
  'Noma apresenta "como ela te vê" — resumo do perfil de volta',
  'Efeito "ela me entendeu" = maior driver de conversão para o convite',
  'Convite de 1 pessoa obrigatório — Noma envia automaticamente',
  'Código único liberado imediatamente — acesso Free garantido',
  'K viral estimado: 0,6–0,8 · CAC cai para R$8–15',
];

export const onboardingChurnText =
  'Usuária que investe tempo no onboarding valoriza mais o produto. Noma que já sabe quem ela é cria o "momento aha" na primeira resposta. Meta: 3 resoluções na semana 1 = churn 5x menor.';
