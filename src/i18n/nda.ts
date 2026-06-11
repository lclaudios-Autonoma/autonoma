import { Lang } from './LanguageContext';

export interface NDAClause {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  /** Parágrafo exibido após os bullets (ex.: sobrevivência das obrigações). */
  post?: string;
}

export interface NDADict {
  choice: {
    titlePre: string;
    titleHi: string;
    body: string;
    readBtn: string;
    skipBtn: string;
    finePrint: string;
  };
  header: {
    eyebrow: string;
    titlePre: string;
    titleHi: string;
  };
  warning: string;
  id: {
    title: string;
    sub: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
  };
  terms: {
    titleFull: string;
    titleSkip: string;
    subFull: string;
    subSkip: string;
    progressLabel: string;
    unlockedMsg: string;
    lockedMsg: string;
    summaryLabel: string;
    summaryBullets: string[];
    readFullLink: string;
  };
  accept: {
    title: string;
    sub: string;
    checkboxes: string[];
    submitIdle: string;
    submitBusy: string;
    finePrint: string;
  };
  contract: {
    title: string;
    subtitle: string;
    /** Nota de prevalência (apenas EN). */
    note?: string;
    clauses: NDAClause[];
    footer: string;
  };
}

export const nda: Record<Lang, NDADict> = {
  pt: {
    choice: {
      titlePre: 'Acordo de ',
      titleHi: 'Confidencialidade',
      body: 'Este material é restrito a investidores autorizados. Para continuar, você precisa aceitar os termos de confidencialidade da AutoNoma. Deseja ler o contrato completo antes de assinar?',
      readBtn: 'Sim, quero ler o contrato',
      skipBtn: 'Aceitar sem ler — assinar diretamente',
      finePrint: 'Ao aceitar, seus dados de acesso são registrados como prova eletrônica.',
    },
    header: {
      eyebrow: 'AutoNoma · NDA · 2026',
      titlePre: 'Acordo de ',
      titleHi: 'Confidencialidade',
    },
    warning:
      'Documento juridicamente vinculante. IP, dispositivo e localização são registrados automaticamente como prova eletrônica.',
    id: {
      title: 'Identificação',
      sub: 'Dados vinculados ao aceite como prova eletrônica',
      nameLabel: 'Nome completo',
      namePlaceholder: 'Seu nome completo',
      emailLabel: 'E-mail',
      emailPlaceholder: 'voce@fundo.com',
    },
    terms: {
      titleFull: 'Termos do Acordo — Leitura Completa',
      titleSkip: 'Termos do Acordo — Resumo',
      subFull: 'Role até o final para liberar o aceite',
      subSkip: 'Modo de aceite direto',
      progressLabel: 'Progresso de leitura',
      unlockedMsg: '✓ Leitura concluída — preencha o aceite abaixo',
      lockedMsg: '↑ Role até o fim para liberar o aceite',
      summaryLabel: 'Resumo dos termos — AutoNoma NDA v1.0',
      summaryBullets: [
        'As informações do deck são estritamente confidenciais — não compartilhe com terceiros.',
        'Uso exclusivo para avaliação de investimento na AutoNoma.',
        'Vigência das obrigações: 5 anos após o término da relação.',
        'Violação sujeita a multa de R$ 500.000,00 por evento.',
        'Seus dados de acesso (IP, dispositivo) são registrados como prova eletrônica.',
        'Foro: Comarca de São Paulo — SP. Lei brasileira.',
      ],
      readFullLink: 'Prefiro ler o contrato completo',
    },
    accept: {
      title: 'Confirmar Aceite',
      sub: 'Marque cada declaração para assinar',
      checkboxes: [
        'Li e aceito os termos do Acordo de Confidencialidade da AutoNoma.',
        'Estou de acordo com a multa imposta em caso de descumprimento de cláusulas da NDA.',
        'Autorizo o registro dos meus dados de acesso como prova eletrônica, conforme a LGPD.',
        'As informações fornecidas são verdadeiras e este aceite tem plena validade jurídica.',
      ],
      submitIdle: 'Confirmar Aceite e Acessar o Deck',
      submitBusy: 'Abrindo deck…',
      finePrint: 'Ao clicar você assina eletronicamente. Sessão temporária — dados não trafegam para servidores externos.',
    },
    contract: {
      title: 'Acordo de Confidencialidade e Não Divulgação',
      subtitle: 'AutoNoma Tecnologia Ltda. · NDA v1.0 · Brasil · 2026',
      clauses: [
        {
          heading: '1 · Objeto e Informações Confidenciais',
          paragraphs: [
            'São confidenciais todos os dados, documentos, código, algoritmos, modelos de IA, estratégias, projeções financeiras, dados de usuárias, identidade de marca e propriedade intelectual da AutoNoma Tecnologia Ltda.',
          ],
        },
        {
          heading: '2 · Obrigações da Parte Receptora',
          paragraphs: [],
          bullets: [
            'Manter sigilo absoluto, usando as informações exclusivamente para a finalidade autorizada;',
            'Não reproduzir, divulgar ou compartilhar com terceiros sem autorização escrita prévia;',
            'Não usar para fins competitivos, desenvolvimento de produtos concorrentes ou benefício próprio;',
            'Notificar imediatamente qualquer vazamento ou acesso não autorizado;',
            'Destruir ou devolver todos os materiais ao término da relação, em até 5 dias úteis.',
          ],
          post: 'As obrigações sobrevivem ao término da relação pelo prazo de 5 anos.',
        },
        {
          heading: '3 · Exceções',
          paragraphs: [
            'Não se aplica a informações de domínio público anterior, recebidas legitimamente de terceiros, desenvolvidas de forma independente ou de divulgação obrigatória por lei (com notificação prévia à AutoNoma).',
          ],
        },
        {
          heading: '4 · Propriedade Intelectual',
          paragraphs: [
            'Nenhum direito de PI é transferido. Qualquer desenvolvimento derivado das informações pertence à AutoNoma. Vedado registrar marcas, patentes ou ativos que derivem das informações confidenciais.',
          ],
        },
        {
          heading: '5 · LGPD e Dados Pessoais',
          paragraphs: [
            'Dados de usuárias tratados exclusivamente para a finalidade autorizada. Incidentes notificados em até 24h. Dados deste aceite (nome, e-mail, IP, localização) armazenados exclusivamente como prova do aceite, conforme Art. 7º, II e VI da LGPD.',
          ],
        },
        {
          heading: '6 · Penalidade por Violação',
          paragraphs: [
            'A violação dos termos implica multa de R$ 500.000,00 por evento, devida em 30 dias após notificação, com juros de 1% ao mês e correção pelo IPCA, sem prejuízo de indenização por danos superiores.',
          ],
        },
        {
          heading: '7 · Aceite Eletrônico',
          paragraphs: [
            'O preenchimento deste formulário e clique de confirmação constituem aceite com validade jurídica (MP 2.200-2/2001 e Art. 107 CC). O protocolo gerado é prova eletrônica do aceite.',
          ],
        },
        {
          heading: '8 · Disposições Gerais',
          paragraphs: [
            'Foro: Comarca de São Paulo — SP. Lei aplicável: Código Civil (L. 10.406/02), LPI (L. 9.279/96), LDA (L. 9.610/98) e LGPD (L. 13.709/18).',
          ],
        },
      ],
      footer: 'AutoNoma Tecnologia Ltda. · Brasil · 2026 · v1.0 · CONFIDENCIAL',
    },
  },

  en: {
    choice: {
      titlePre: 'Non-Disclosure ',
      titleHi: 'Agreement',
      body: 'This material is restricted to authorized investors. To continue, you must accept the AutoNoma confidentiality terms. Would you like to read the full agreement before signing?',
      readBtn: 'Yes, I want to read the agreement',
      skipBtn: 'Accept without reading — sign directly',
      finePrint: 'By accepting, your access data is recorded as electronic evidence.',
    },
    header: {
      eyebrow: 'AutoNoma · NDA · 2026',
      titlePre: 'Non-Disclosure ',
      titleHi: 'Agreement',
    },
    warning:
      'Legally binding document. IP address, device and location are automatically recorded as electronic evidence.',
    id: {
      title: 'Identification',
      sub: 'Data linked to your acceptance as electronic evidence',
      nameLabel: 'Full name',
      namePlaceholder: 'Your full name',
      emailLabel: 'E-mail',
      emailPlaceholder: 'you@fund.com',
    },
    terms: {
      titleFull: 'Terms of the Agreement — Full Reading',
      titleSkip: 'Terms of the Agreement — Summary',
      subFull: 'Scroll to the end to unlock acceptance',
      subSkip: 'Direct acceptance mode',
      progressLabel: 'Reading progress',
      unlockedMsg: '✓ Reading complete — fill in the acceptance below',
      lockedMsg: '↑ Scroll to the end to unlock acceptance',
      summaryLabel: 'Summary of terms — AutoNoma NDA v1.0',
      summaryBullets: [
        'All deck information is strictly confidential — do not share it with third parties.',
        'Use is exclusively for evaluating an investment in AutoNoma.',
        'Obligations remain in force for 5 years after the relationship ends.',
        'Breach is subject to a penalty of R$500,000.00 (BRL) per event.',
        'Your access data (IP, device) is recorded as electronic evidence.',
        'Jurisdiction: Courts of São Paulo — SP, Brazil. Brazilian law applies.',
      ],
      readFullLink: 'I prefer to read the full agreement',
    },
    accept: {
      title: 'Confirm Acceptance',
      sub: 'Check each statement to sign',
      checkboxes: [
        'I have read and accept the terms of the AutoNoma Non-Disclosure Agreement.',
        'I agree with the penalty imposed in case of breach of the NDA clauses.',
        'I authorize the recording of my access data as electronic evidence, pursuant to the LGPD (Brazilian Data Protection Law).',
        'The information provided is true and this acceptance has full legal validity.',
      ],
      submitIdle: 'Confirm Acceptance and Access the Deck',
      submitBusy: 'Opening deck…',
      finePrint: 'By clicking you sign electronically. Temporary session — no data is sent to external servers.',
    },
    contract: {
      title: 'Confidentiality and Non-Disclosure Agreement',
      subtitle: 'AutoNoma Tecnologia Ltda. · NDA v1.0 · Brazil · 2026',
      note: 'This English translation is provided for convenience only. The Portuguese version constitutes the legally binding instrument and shall prevail in case of any conflict or discrepancy.',
      clauses: [
        {
          heading: '1 · Subject Matter and Confidential Information',
          paragraphs: [
            'Confidential information includes all data, documents, code, algorithms, AI models, strategies, financial projections, user data, brand identity and intellectual property of AutoNoma Tecnologia Ltda.',
          ],
        },
        {
          heading: '2 · Obligations of the Receiving Party',
          paragraphs: [],
          bullets: [
            'Maintain absolute secrecy, using the information exclusively for the authorized purpose;',
            'Not reproduce, disclose or share with third parties without prior written authorization;',
            'Not use it for competitive purposes, development of competing products or personal benefit;',
            'Immediately report any leak or unauthorized access;',
            'Destroy or return all materials upon termination of the relationship, within 5 business days.',
          ],
          post: 'These obligations survive the termination of the relationship for a period of 5 years.',
        },
        {
          heading: '3 · Exceptions',
          paragraphs: [
            'This agreement does not apply to information previously in the public domain, legitimately received from third parties, independently developed, or whose disclosure is required by law (with prior notice to AutoNoma).',
          ],
        },
        {
          heading: '4 · Intellectual Property',
          paragraphs: [
            'No IP rights are transferred. Any development derived from the information belongs to AutoNoma. Registering trademarks, patents or assets derived from the confidential information is prohibited.',
          ],
        },
        {
          heading: '5 · LGPD and Personal Data',
          paragraphs: [
            'User data is processed exclusively for the authorized purpose. Incidents are reported within 24 hours. Data from this acceptance (name, e-mail, IP, location) is stored exclusively as proof of acceptance, pursuant to Art. 7, II and VI of the LGPD (Brazilian Data Protection Law).',
          ],
        },
        {
          heading: '6 · Penalty for Breach',
          paragraphs: [
            'Breach of these terms entails a penalty of R$500,000.00 (BRL) per event, due within 30 days of notice, with interest of 1% per month and adjustment by the IPCA index, without prejudice to compensation for greater damages.',
          ],
        },
        {
          heading: '7 · Electronic Acceptance',
          paragraphs: [
            'Completing this form and clicking to confirm constitute acceptance with legal validity (Provisional Measure 2.200-2/2001 and Art. 107 of the Brazilian Civil Code). The generated protocol is electronic evidence of acceptance.',
          ],
        },
        {
          heading: '8 · General Provisions',
          paragraphs: [
            'Jurisdiction: Courts of São Paulo — SP, Brazil. Governing law: Brazilian Civil Code (L. 10.406/02), Industrial Property Law (L. 9.279/96), Copyright Law (L. 9.610/98) and LGPD (L. 13.709/18).',
          ],
        },
      ],
      footer: 'AutoNoma Tecnologia Ltda. · Brazil · 2026 · v1.0 · CONFIDENTIAL',
    },
  },
};
