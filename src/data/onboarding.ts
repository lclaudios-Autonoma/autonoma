import { Lang } from '../i18n/LanguageContext';

export interface OnboardingQ {
  index: number;
  topic: string;
  prompt: string;
}

export const questions: Record<Lang, OnboardingQ[]> = {
  pt: [
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
  ],
  en: [
    { index: 1, topic: 'Name', prompt: 'What should I call you?' },
    { index: 2, topic: 'Age + Marital status', prompt: 'How old are you and what is your life like today?' },
    { index: 3, topic: 'City + State', prompt: 'Which city are you in?' },
    { index: 4, topic: 'Approximate income', prompt: 'Which range best calibrates my recommendations?' },
    { index: 5, topic: 'Main pain', prompt: 'What drains you the most day to day?' },
    {
      index: 6,
      topic: 'What she seeks',
      prompt: 'If Noma did one thing a week for you, what would it be?',
    },
    { index: 7, topic: 'Habits and hobbies', prompt: 'What do you do when you have some free time?' },
    {
      index: 8,
      topic: 'Free description',
      prompt: 'In a few words, how would you describe what you need?',
    },
  ],
};

export const viralLoopSteps: Record<Lang, string[]> = {
  pt: [
    'Noma apresenta "como ela te vê" — resumo do perfil de volta',
    'Efeito "ela me entendeu" = maior driver de conversão para o convite',
    'Convite de 1 pessoa obrigatório — Noma envia automaticamente',
    'Código único liberado imediatamente — acesso Free garantido',
    'K viral estimado: 0,6–0,8 · CAC cai para R$8–15',
  ],
  en: [
    'Noma presents "how she sees you" — the profile summarized back',
    'The "she got me" effect = biggest conversion driver for the invite',
    'Mandatory invite of 1 person — Noma sends it automatically',
    'Unique code released immediately — Free access guaranteed',
    'Estimated viral K: 0.6–0.8 · CAC drops to R$8–15',
  ],
};

export const onboardingChurnText: Record<Lang, string> = {
  pt:
    'Usuária que investe tempo no onboarding valoriza mais o produto. Noma que já sabe quem ela é cria o "momento aha" na primeira resposta. Meta: 3 resoluções na semana 1 = churn 5x menor.',
  en:
    'A user who invests time in onboarding values the product more. A Noma that already knows who she is creates the "aha moment" in the very first reply. Goal: 3 resolutions in week 1 = 5x lower churn.',
};
