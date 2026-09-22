/**
 * FELIPE FARIAS SANTANA - PORTFOLIO EXECUTIVO DE ENGENHARIA
 * Sistema Interativo & Internacionalização (PT-BR / EN)
 */

// Estado global da aplicação
const state = {
  currentLang: 'pt',
  currentFilter: 'all',
  activeCurveScenario: 'real',
  currentTheme: localStorage.getItem('portfolio_theme') || 'dark',
  chartInstance: null
};

// Dados completos das Experiências Profissionais (Bilingue)
const experiencesData = [
  {
    id: 'omega',
    category: 'gestao',
    badge: { pt: 'Investimentos Correntes', en: 'Current Capital Investments' },
    role: { pt: 'Técnico de Planejamento Sênior', en: 'Senior Planning Specialist' },
    company: 'Omega Service',
    period: { pt: '07/2023 – Ativo (Presente)', en: '07/2023 – Active (Present)' },
    location: 'Parauapebas / Canaã dos Carajás, PA',
    featured: true,
    highlight: {
      pt: 'Liderança no planejamento integrado multidisciplinar em obras civis, elétricas e mecânicas, com foco em Curva S, Boletins de Medição (BM) e implantação de sistemas de gestão.',
      en: 'Leadership in multidisciplinary integrated planning across civil, electrical, and mechanical projects, focusing on S-Curves, Measurement Bulletins (BM), and management systems implementation.'
    },
    deliverables: {
      pt: [
        'Desenvolvimento, análise e controle de cronogramas integrados executivos de alta complexidade;',
        'Análise, acompanhamento e gestão de obras civis, elétricas e mecânicas industriais;',
        'Confecção de Boletins de Medição (BM) físicos e financeiros para faturamento de contratos;',
        'Elaboração de Planos de Ação táticos e corretivos para mitigação de desvios de cronograma;',
        'Implantação e padronização de sistemas corporativos de gestão de obras;',
        'Desenvolvimento e auditoria de Relatórios Diários de Obras (RDO);',
        'Controle analítico de Curva "S" de avanço físico e financeiro com indicadores de prazo.'
      ],
      en: [
        'Development, analysis, and control of complex executive integrated schedules;',
        'Analysis, monitoring, and management of industrial civil, electrical, and mechanical projects;',
        'Elaboration of physical and financial Measurement Bulletins (BM) for contract billing;',
        'Formulation of tactical and corrective Action Plans to mitigate schedule variances;',
        'Implementation and standardization of corporate construction management systems;',
        'Development and auditing of Daily Construction Reports (RDO);',
        'Analytical control of physical and financial S-Curve with schedule KPIs.'
      ]
    },
    tags: ['Curva S', 'Boletim de Medição (BM)', 'RDO', 'Sistemas de Gestão', 'Obras Civis/Elétricas/Mecânicas', 'MS Project']
  },
  {
    id: 'engeko',
    category: 'gestao',
    badge: { pt: 'Megaprojetos de Mineração (Vale)', en: 'Mining Megaprojects (Vale)' },
    role: { pt: 'Técnico de Planejamento Pleno', en: 'Mid-Level Planning Specialist' },
    company: 'ENGEKO Engenharia',
    period: { pt: '10/2022 – 07/2023', en: '10/2022 – 07/2023' },
    location: 'Onça Puma & Projeto Sossego (Investimentos Correntes)',
    featured: false,
    highlight: {
      pt: 'Atuação estratégica nos complexos industriais de Onça Puma e Sossego, conduzindo EAPs, avanço físico e eficiência de equipes de campo.',
      en: 'Strategic planning within Onça Puma and Sossego industrial complexes, governing WBS/EAP, physical progress, and field crew efficiency.'
    },
    deliverables: {
      pt: [
        'Desenvolvimento e acompanhamento contínuo de EAP (Estrutura Analítica do Projeto);',
        'Análise de desempenho e produtividade de frentes de trabalho multidisciplinares;',
        'Controle rigoroso de avanço físico de cronogramas contratuais;',
        'Mapeamento de gargalos operacionais e implementação de melhorias de processos;',
        'Elaboração e validação de Boletins de Medição (BM) periódicos.'
      ],
      en: [
        'Development and continuous monitoring of WBS (Work Breakdown Structure);',
        'Performance and productivity analysis of multidisciplinary work fronts;',
        'Rigorous tracking of physical progress against baseline contractual schedules;',
        'Bottleneck identification and lean process improvement implementation;',
        'Elaboration and technical validation of periodic Measurement Bulletins (BM).'
      ]
    },
    tags: ['Onça Puma', 'Projeto Sossego', 'EAP / WBS', 'Avanço Físico', 'Produtividade de Equipes', 'Melhoria Contínua']
  },
  {
    id: 'concremat',
    category: 'campo',
    badge: { pt: 'Engenharia Tecnológica & NDT', en: 'Technological Engineering & NDT' },
    role: { pt: 'Engenheiro Civil', en: 'Civil Engineer' },
    company: 'CONCREMAT Engenharia e Tecnologia',
    period: { pt: '07/2022 – 09/2022', en: '07/2022 – 09/2022' },
    location: 'Complexo Salobo III (Expansão de Cobre)',
    featured: true,
    highlight: {
      pt: 'Atuação como Engenheiro Civil especializado em Ensaios Não-Destrutivos (NDT) nas estruturas maciças de concreto armado de HPGR e Moagem em Salobo III.',
      en: 'Civil Engineer specialized in Non-Destructive Testing (NDT) on massive reinforced concrete foundations of HPGR and Grinding Mills at Salobo III expansion.'
    },
    deliverables: {
      pt: [
        'Execução e interpretação de ensaios não-destrutivos (END/NDT) em estruturas críticas de concreto armado;',
        'Controle tecnológico nas unidades de HPGR (High Pressure Grinding Rolls) e Moagem pesada;',
        'Ensaios estruturais com Pacometria (identificação de armaduras), Esclerometria (dureza superficial), Ultrassom de concreto e GPR (Ground Penetrating Radar);',
        'Emissão de planilhas técnicas e relatórios diários de campo com precisão geotécnica/estrutural;',
        'Apoio técnico especializado e consultivo nas tomadas de decisão da fiscalização e diretoria de obra.'
      ],
      en: [
        'Execution and technical interpretation of Non-Destructive Testing (NDT) on critical reinforced concrete structures;',
        'Technological quality control at HPGR (High Pressure Grinding Rolls) and heavy Grinding Mill facilities;',
        'Structural testing utilizing Pacometry (rebar scanning), Sclerometry (surface hardness), Concrete Ultrasound, and GPR (Ground Penetrating Radar);',
        'Issuance of engineering spreadsheets and daily field quality reports;',
        'Specialized consultative engineering support for site management and structural decision-makers.'
      ]
    },
    tags: ['Salobo III', 'Ensaios NDT', 'HPGR & Moagem', 'Pacometria', 'Esclerometria', 'Ultrassom & GPR', 'Concreto Armado']
  },
  {
    id: 'seculos',
    category: 'gestao',
    badge: { pt: 'Mineração & Facilities', en: 'Mining & Facilities' },
    role: { pt: 'Técnico de Planejamento Junior', en: 'Junior Planning Specialist' },
    company: 'SÉCULOS Serviços e Administração',
    period: { pt: '12/2021 – 07/2022', en: '12/2021 – 07/2022' },
    location: 'Salobo N1 e IGBahia (Facilities)',
    featured: false,
    highlight: {
      pt: 'Acompanhamento do planejamento executivo de serviços e facilities industriais com foco em controle de cronogramas em MS Project e análise de desvios.',
      en: 'Monitoring executive planning for industrial facilities and services, controlling schedules in MS Project and analyzing schedule variances.'
    },
    deliverables: {
      pt: [
        'Acompanhamento rigoroso do planejamento e dos serviços executados em campo;',
        'Elaboração de relatórios gerenciais e análise crítica de desvios e ganhos de prazo;',
        'Controle dinâmico e atualização de linhas de base em MS Project;',
        'Interface diária entre frentes operacionais e gestão contratual.'
      ],
      en: [
        'Rigorous tracking of field operations against baseline planning schedules;',
        'Executive reporting and variance analysis (schedule delay/recovery forecasting);',
        'Dynamic baseline maintenance and updating inside MS Project;',
        'Daily technical coordination between frontline operational teams and contract managers.'
      ]
    },
    tags: ['Salobo N1', 'MS Project', 'Controle de Prazos', 'Facilities Industriais', 'Relatórios Executivos']
  },
  {
    id: 'goncalves',
    category: 'implantacao',
    badge: { pt: 'Megaprojetos de Implantação Global', en: 'Global Capital Implementation' },
    role: { pt: 'Técnico de Planejamento Junior', en: 'Junior Planning Specialist' },
    company: 'GONÇALVES E DIAS Engenharia',
    period: { pt: '05/2021 – 10/2021', en: '05/2021 – 10/2021' },
    location: 'Carajás e S11D (Implantação Vale)',
    featured: true,
    highlight: {
      pt: 'Atuação na implantação dos maiores complexos mínero-industriais do planeta (Carajás e S11D Eliezer Batista), controlando curvas físicas, econômicas e financeiras.',
      en: 'Planning role in the implementation of the largest iron ore complexes on Earth (Carajás & S11D Eliezer Batista), monitoring physical, economic, and financial progress.'
    },
    deliverables: {
      pt: [
        'Análise de dados de planejamento e execução física, econômica e financeira dos projetos de implantação;',
        'Avaliação sistemática e reporte imediato de desvios de programação de obra;',
        'Proposição técnica de planos de ação de atuação e contingência;',
        'Acompanhamento e mensuração de curvas de desempenho e produtividade de equipes;',
        'Padronização de rotinas e melhorias contínuas nos processos de controle de projeto.'
      ],
      en: [
        'In-depth analysis of physical, economic, and financial project progress in capital expansion;',
        'Systematic evaluation and real-time reporting of baseline schedule deviations;',
        'Technical proposition of corrective action plans and contingency strategies;',
        'Productivity monitoring and performance curve tracking for workforce teams;',
        'Standardization of project control procedures and lean operational improvements.'
      ]
    },
    tags: ['Carajás', 'S11D Implantação', 'Planejamento Econômico-Financeiro', 'Curva Físico-Financeira', 'Planos de Ação']
  }
];

// Dicionário de Traduções Bilíngues
const i18n = {
  pt: {
    navAbout: 'Sobre',
    navExperiences: 'Experiências',
    navMiningProjects: 'Grandes Obras',
    navCurveS: 'Simulador Curva S',
    navSkills: 'Competências',
    navEducation: 'Formação',
    navContact: 'Contato',
    heroBadge: 'CREA 151832597-1PA • Parauapebas & Canaã dos Carajás, PA',
    heroTitlePrefix: 'Engenheiro Civil &',
    heroTitleHighlight: 'Especialista em Planejamento e BI',
    heroSubtitle: 'Profissional de alta performance com sólida bagagem nos maiores complexos de mineração e infraestrutura industrial do país (Carajás, S11D, Salobo III, Onça Puma e Sossego). Domínio avançado em Curva S, EAP, MS Project, Power BI, medições contratuais e ensaios tecnológicos (NDT).',
    heroStat1Label: 'Anos em Grandes Obras',
    heroStat2Label: 'Complexos Globais de Mineração',
    heroStat3Label: 'M.Eng & MBA de Elite',
    heroStat4Label: 'Domínio em Curva S & BI',
    btnExplore: 'Ver Trajetória Executiva',
    btnCurveS: 'Simulador Curva "S"',
    btnWhatsApp: 'Conversar no WhatsApp',
    btnDownloadCV: 'Imprimir / Salvar PDF',
    aboutHeading: 'Apresentação Executiva & Filosofia de Gestão',
    aboutParagraph1: 'Engenheiro Civil com Mestrado Profissional em Engenharia de Planejamento & BI (PUC Minas) e MBA em Gestão de Projetos (USP/ESALQ), com ampla vivência no acompanhamento e gestão de projetos multidisciplinares (construção civil, hidráulica, elétrica, implantação industrial e manutenção pesada).',
    aboutParagraph2: 'Minha atuação é pautada pelo rigor no controle de qualidade dos entregáveis e pela aplicação de metodologias consagradas (Ciclo PDCA, 5S, KPIs, EAP com método PERT/CPM, Earned Value Management e análise de desempenho semanal e mensal).',
    aboutParagraph3: 'Na programação e controle de campo, foco na otimização de recursos e mão de obra dentro de marcos contratuais, histogramas executivos (HH e custo), elaboração diária de RDOs e garantia de medições auditáveis (BMs) e curvas de tendência sólidas.',
    filterAll: 'Todas as Experiências',
    filterGestao: 'Gestão & Planejamento',
    filterCampo: 'Engenharia de Campo & NDT',
    filterImplantacao: 'Grandes Implantações',
    expDeliverablesTitle: 'Principais Entregas & Atividades:',
    expBtnDetails: 'Ver Detalhamento Técnico',
    simTitle: 'Simulador Interativo de Curva "S" & Project Controls',
    simSubtitle: 'Demonstração em tempo real da metodologia analítica aplicada no acompanhamento de avanço físico, Earned Value (EVM) e previsão de marcos contratuais.',
    simScenarioReal: 'Cenário 1: Desempenho Real (SPI = 1.02)',
    simScenarioDelayed: 'Cenário 2: Desvio Identificado & Plano de Ação',
    simScenarioFinancial: 'Cenário 3: Curva S Físico-Financeira & BMs',
    simMetricPV: 'Valor Planejado (PV)',
    simMetricEV: 'Valor Agregado (EV)',
    simMetricSPI: 'Índice de Prazo (SPI)',
    simMetricStatus: 'Status Contratual',
    ndtTitle: 'Tecnologia Estrutural & Ensaios Não-Destrutivos (NDT)',
    ndtSubtitle: 'Aplicação prática comprovada em Salobo III nas estruturas críticas de HPGR e Moagem pesada.',
    skillsTitle: 'Matriz de Habilidades & Ferramentas Técnicas',
    skillsSubtitle: 'Combinação de software especializado de engenharia, métodos de governança e soft skills de liderança.',
    eduTitle: 'Formação Acadêmica & Certificações de Destaque',
    eduSubtitle: 'Trajetória acadêmica de excelência nas principais instituições do Brasil.',
    contactTitle: 'Conecte-se com Felipe Farias Santana',
    contactSubtitle: 'Disponível para novas oportunidades estratégicas, consultorias de planejamento e projetos industriais com disponibilidade total para viagens.',
    contactEmailCopied: 'E-mail copiado para a área de transferência!',
    whatsappMessage: 'Olá Felipe! Vi seu portfólio executivo e gostaria de conversar sobre uma oportunidade para Engenharia de Planejamento / Gestão de Projetos.',
    themeDark: 'Noturno',
    themeLight: 'Diurno',
    themeToDarkTooltip: 'Mudar para Modo Noturno',
    themeToLightTooltip: 'Mudar para Modo Diurno',
    themeToastLight: 'Modo Diurno ativado',
    themeToastDark: 'Modo Noturno ativado'
  },
  en: {
    navAbout: 'About',
    navExperiences: 'Experience',
    navMiningProjects: 'Mega Projects',
    navCurveS: 'S-Curve Simulator',
    navSkills: 'Competencies',
    navEducation: 'Education',
    navContact: 'Contact',
    heroBadge: 'CREA 151832597-1PA • Parauapebas & Canaã dos Carajás, Brazil',
    heroTitlePrefix: 'Civil Engineer &',
    heroTitleHighlight: 'Planning & BI Specialist',
    heroSubtitle: 'High-performing engineering professional with extensive track record in world-class mining complexes and industrial capital infrastructure (Carajás, S11D, Salobo III, Onça Puma, and Sossego). Advanced mastery in S-Curve analytics, WBS, MS Project, Power BI, contractual measurements, and Non-Destructive Testing (NDT).',
    heroStat1Label: 'Years in Mega Infrastructure',
    heroStat2Label: 'Global Mining Hubs',
    heroStat3Label: 'M.Eng & MBA Elite Degree',
    heroStat4Label: 'Mastery in S-Curve & BI',
    btnExplore: 'Explore Experience Journey',
    btnCurveS: 'Live S-Curve Simulator',
    btnWhatsApp: 'Connect on WhatsApp',
    btnDownloadCV: 'Print / Save as PDF',
    aboutHeading: 'Executive Summary & Management Philosophy',
    aboutParagraph1: 'Civil Engineer holding a Professional Master of Engineering in Planning & BI (PUC Minas) and an MBA in Project Management (USP/ESALQ), with extensive hands-on expertise in multidisciplinary project governance (civil works, hydraulics, electrical networks, industrial commissioning, and maintenance).',
    aboutParagraph2: 'My leadership methodology is driven by strict quality control over deliverables and the execution of proven management frameworks (PDCA Cycle, 5S, KPIs, WBS using PERT/CPM, Earned Value Management, and weekly/monthly performance reviews).',
    aboutParagraph3: 'In field scheduling and control, my core focus is resource and labor optimization against contractual milestones, executive histograms (man-hours and cost), daily progress auditing (RDO), certified measurement bulletins (BM), and predictive variance mitigation.',
    filterAll: 'All Experiences',
    filterGestao: 'Planning & Project Controls',
    filterCampo: 'Field Engineering & NDT',
    filterImplantacao: 'Major Capital Projects',
    expDeliverablesTitle: 'Key Scope & Deliverables:',
    expBtnDetails: 'View Technical Deep Dive',
    simTitle: 'Interactive S-Curve & Project Controls Simulator',
    simSubtitle: 'Real-time demonstration of analytical methodologies applied in tracking physical progress, Earned Value (EVM), and contractual milestone forecasting.',
    simScenarioReal: 'Scenario 1: Actual Performance (SPI = 1.02)',
    simScenarioDelayed: 'Scenario 2: Detected Variance & Recovery Plan',
    simScenarioFinancial: 'Scenario 3: Physical-Financial S-Curve & BMs',
    simMetricPV: 'Planned Value (PV)',
    simMetricEV: 'Earned Value (EV)',
    simMetricSPI: 'Schedule Index (SPI)',
    simMetricStatus: 'Contract Status',
    ndtTitle: 'Structural Technology & Non-Destructive Testing (NDT)',
    ndtSubtitle: 'Proven field application at Salobo III on critical HPGR and heavy Grinding Mill foundations.',
    skillsTitle: 'Technical Competency & Software Matrix',
    skillsSubtitle: 'Union of specialized engineering software, governance methodologies, and strategic leadership skills.',
    eduTitle: 'Academic Credentials & Executive Certifications',
    eduSubtitle: 'Rigorous academic trajectory across Brazil\'s premier engineering and management institutes.',
    contactTitle: 'Connect with Felipe Farias Santana',
    contactSubtitle: 'Available for strategic engineering management roles, planning consultancy, and major industrial ventures with full mobility for travel.',
    contactEmailCopied: 'Email successfully copied to clipboard!',
    whatsappMessage: 'Hello Felipe! I explored your executive portfolio and would like to discuss an engineering planning / project management opportunity.',
    themeDark: 'Dark',
    themeLight: 'Light',
    themeToDarkTooltip: 'Switch to Dark Mode',
    themeToLightTooltip: 'Switch to Light Mode',
    themeToastLight: 'Light Mode activated',
    themeToastDark: 'Dark Mode activated'
  }
};

// Gerenciamento de Tema (Modo Noturno / Modo Diurno)
function applyTheme(theme) {
  state.currentTheme = theme;
  localStorage.setItem('portfolio_theme', theme);
  const isLight = theme === 'light';

  if (isLight) {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  } else {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
  }

  // Atualizar botões de tema (ícone, texto e tooltip)
  const buttons = [
    document.getElementById('theme-toggle-btn'),
    document.getElementById('mobile-theme-toggle-btn')
  ];

  buttons.forEach(btn => {
    if (!btn) return;
    const icon = btn.querySelector('i');
    const label = btn.querySelector('.theme-label');
    const dict = i18n[state.currentLang];

    if (isLight) {
      if (icon) icon.className = 'fas fa-moon text-xs text-amber-500';
      if (label) label.innerText = dict.themeDark;
      btn.title = dict.themeToDarkTooltip;
    } else {
      if (icon) icon.className = 'fas fa-sun text-xs text-amber-400';
      if (label) label.innerText = dict.themeLight;
      btn.title = dict.themeToLightTooltip;
    }
  });

  // Re-renderiza o gráfico com a paleta do tema ativo se o canvas existir
  if (document.getElementById('curvaSChart')) {
    initCurvaSChart();
  }
}

function toggleTheme() {
  const newTheme = state.currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
  const dict = i18n[state.currentLang];
  const msg = newTheme === 'light' ? dict.themeToastLight : dict.themeToastDark;
  showToast(msg);
}

// Inicialização após carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(state.currentTheme);
  renderExperiences();
  setupEventListeners();
  updateLanguageUI();
});

// Renderização dos cards de Experiências com base no filtro e idioma
function renderExperiences() {
  const container = document.getElementById('experiences-container');
  if (!container) return;

  const filtered = state.currentFilter === 'all' 
    ? experiencesData 
    : experiencesData.filter(exp => exp.category === state.currentFilter);

  const lang = state.currentLang;

  container.innerHTML = filtered.map((exp, index) => {
    return `
      <div class="glass-panel glass-panel-hover p-6 md:p-8 rounded-2xl relative overflow-hidden transition-all duration-300 border border-slate-800/80 hover:border-amber-500/50 group" data-category="${exp.category}">
        <!-- Top Badge & Counter -->
        <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30 engineering-badge">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
            ${exp.badge[lang]}
          </span>
          <span class="text-xs font-mono text-slate-400 bg-slate-800/60 px-2.5 py-1 rounded-md border border-slate-700/50">
            ${exp.period[lang]}
          </span>
        </div>

        <!-- Role & Company -->
        <h3 class="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors duration-200">
          ${exp.role[lang]}
        </h3>
        <div class="flex items-center gap-2 mt-1 mb-4 text-cyan-400 font-medium">
          <i class="fas fa-building text-sm"></i>
          <span>${exp.company}</span>
          <span class="text-slate-500">•</span>
          <span class="text-xs text-slate-400"><i class="fas fa-map-marker-alt text-amber-400/80 mr-1"></i>${exp.location}</span>
        </div>

        <!-- Highlight Paragraph -->
        <p class="text-slate-300 text-sm md:text-base leading-relaxed mb-6 border-l-2 border-amber-500/60 pl-3">
          ${exp.highlight[lang]}
        </p>

        <!-- Deliverables List -->
        <div class="space-y-2 mb-6">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
            ${i18n[lang].expDeliverablesTitle}
          </h4>
          <ul class="space-y-2 text-sm text-slate-300">
            ${exp.deliverables[lang].map(item => `
              <li class="flex items-start gap-2.5">
                <i class="fas fa-check-circle text-amber-400 text-xs mt-1 shrink-0"></i>
                <span>${item}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Tags Strip -->
        <div class="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
          ${exp.tags.map(tag => `
            <span class="text-xs font-mono px-2.5 py-1 rounded bg-slate-800/70 text-slate-300 border border-slate-700/40">
              #${tag}
            </span>
          `).join('')}
        </div>

        <!-- Action Button -->
        <div class="mt-6 flex justify-end">
          <button onclick="openExperienceModal('${exp.id}')" class="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors uppercase tracking-wider font-mono bg-amber-500/10 hover:bg-amber-500/20 px-3.5 py-2 rounded-lg border border-amber-500/30">
            <span>${i18n[lang].expBtnDetails}</span>
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// Configuração do Gráfico Interativo de Curva S
function initCurvaSChart() {
  const ctx = document.getElementById('curvaSChart');
  if (!ctx) return;

  const months = ['Mês 01', 'Mês 02', 'Mês 03', 'Mês 04', 'Mês 05', 'Mês 06', 'Mês 07', 'Mês 08', 'Mês 09', 'Mês 10', 'Mês 11', 'Mês 12'];

  const plannedCurve = [5, 12, 22, 36, 52, 68, 80, 89, 95, 98, 100, 100];
  const actualCurveReal = [6, 14, 25, 38, 55, 71, null, null, null, null, null, null];
  const actualCurveDelayed = [4, 9, 16, 26, 39, 50, null, null, null, null, null, null];
  const actualCurveFinancial = [5, 11, 21, 35, 51, 67, null, null, null, null, null, null];

  let currentActual = actualCurveReal;
  if (state.activeCurveScenario === 'delayed') currentActual = actualCurveDelayed;
  if (state.activeCurveScenario === 'financial') currentActual = actualCurveFinancial;

  if (state.chartInstance) {
    state.chartInstance.destroy();
  }

  const isLight = state.currentTheme === 'light';
  const plannedBorder = isLight ? '#64748b' : '#94a3b8';
  const plannedBg = isLight ? 'rgba(100, 116, 139, 0.08)' : 'rgba(148, 163, 184, 0.05)';
  const actualBorder = isLight ? '#d97706' : '#f59e0b';
  const actualBg = isLight ? 'rgba(217, 119, 6, 0.18)' : 'rgba(245, 158, 11, 0.15)';
  const legendColor = isLight ? '#0f172a' : '#e2e8f0';
  const gridColor = isLight ? 'rgba(15, 23, 42, 0.08)' : 'rgba(255, 255, 255, 0.05)';
  const tickColor = isLight ? '#475569' : '#94a3b8';
  const tooltipBg = isLight ? 'rgba(255, 255, 255, 0.98)' : 'rgba(15, 23, 42, 0.95)';
  const tooltipTitle = isLight ? '#d97706' : '#f59e0b';
  const tooltipBody = isLight ? '#0f172a' : '#e2e8f0';
  const tooltipBorder = isLight ? 'rgba(217, 119, 6, 0.5)' : 'rgba(245, 158, 11, 0.4)';

  state.chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: months,
      datasets: [
        {
          label: state.currentLang === 'pt' ? 'Planejado (Baseline PV)' : 'Planned Baseline (PV)',
          data: plannedCurve,
          borderColor: plannedBorder,
          borderDash: [5, 5],
          backgroundColor: plannedBg,
          tension: 0.35,
          borderWidth: 2,
          pointRadius: 4,
          pointBackgroundColor: plannedBorder
        },
        {
          label: state.currentLang === 'pt' ? 'Avanço Realizado (EV)' : 'Earned Value / Actual (EV)',
          data: currentActual,
          borderColor: actualBorder,
          backgroundColor: actualBg,
          fill: true,
          tension: 0.35,
          borderWidth: 3,
          pointRadius: 6,
          pointHoverRadius: 8,
          pointBackgroundColor: actualBorder,
          pointBorderColor: '#ffffff'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      plugins: {
        legend: {
          labels: {
            color: legendColor,
            font: { family: 'Outfit', size: 12 }
          }
        },
        tooltip: {
          backgroundColor: tooltipBg,
          titleColor: tooltipTitle,
          bodyColor: tooltipBody,
          borderColor: tooltipBorder,
          borderWidth: 1,
          padding: 12,
          callbacks: {
            label: function(context) {
              return ` ${context.dataset.label}: ${context.parsed.y}%`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: { color: gridColor },
          ticks: { color: tickColor, font: { family: 'JetBrains Mono' } }
        },
        y: {
          min: 0,
          max: 100,
          grid: { color: gridColor },
          ticks: {
            color: tickColor,
            font: { family: 'JetBrains Mono' },
            callback: function(value) { return value + '%'; }
          }
        }
      }
    }
  });

  updateCurveMetrics();
}

function updateCurveMetrics() {
  const spiElem = document.getElementById('metric-spi');
  const statusElem = document.getElementById('metric-status');
  const pvElem = document.getElementById('metric-pv');
  const evElem = document.getElementById('metric-ev');

  if (!spiElem || !statusElem) return;

  if (state.activeCurveScenario === 'real') {
    pvElem.innerText = '68.0%';
    evElem.innerText = '71.0%';
    spiElem.innerText = '1.04';
    spiElem.className = 'text-2xl font-bold font-mono text-emerald-400';
    statusElem.innerText = state.currentLang === 'pt' ? 'Adiantado / Saudável' : 'Ahead of Schedule';
    statusElem.className = 'text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30';
  } else if (state.activeCurveScenario === 'delayed') {
    pvElem.innerText = '68.0%';
    evElem.innerText = '50.0%';
    spiElem.innerText = '0.74';
    spiElem.className = 'text-2xl font-bold font-mono text-rose-400';
    statusElem.innerText = state.currentLang === 'pt' ? 'Atraso / Plano de Ação Ativo' : 'Delay / Recovery Plan Active';
    statusElem.className = 'text-xs font-semibold px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30';
  } else {
    pvElem.innerText = '68.0%';
    evElem.innerText = '67.0%';
    spiElem.innerText = '0.99';
    spiElem.className = 'text-2xl font-bold font-mono text-cyan-400';
    statusElem.innerText = state.currentLang === 'pt' ? 'Medição Aprovada (BM Conforme)' : 'Certified Measurement OK';
    statusElem.className = 'text-xs font-semibold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30';
  }
}

// Configuração dos Event Listeners
function setupEventListeners() {
  // Filtros de experiências
  document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('bg-amber-500', 'text-black', 'border-amber-400');
        btn.classList.add('bg-slate-800/80', 'text-slate-300', 'border-slate-700/50');
      });
      button.classList.remove('bg-slate-800/80', 'text-slate-300', 'border-slate-700/50');
      button.classList.add('bg-amber-500', 'text-black', 'border-amber-400');
      
      state.currentFilter = button.dataset.filter;
      renderExperiences();
    });
  });

  // Botões de cenários da Curva S
  document.querySelectorAll('.scenario-btn').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.scenario-btn').forEach(btn => {
        btn.classList.remove('border-amber-500', 'text-amber-400', 'bg-amber-500/10');
        btn.classList.add('border-slate-700', 'text-slate-400', 'bg-slate-800/40');
      });
      button.classList.remove('border-slate-700', 'text-slate-400', 'bg-slate-800/40');
      button.classList.add('border-amber-500', 'text-amber-400', 'bg-amber-500/10');

      state.activeCurveScenario = button.dataset.scenario;
      initCurvaSChart();
    });
  });

  // Alternador de Tema (Modo Noturno / Diurno)
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  const mobileThemeToggleBtn = document.getElementById('mobile-theme-toggle-btn');
  if (mobileThemeToggleBtn) {
    mobileThemeToggleBtn.addEventListener('click', toggleTheme);
  }

  // Alternador de Idioma (PT / EN)
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      state.currentLang = state.currentLang === 'pt' ? 'en' : 'pt';
      langToggleBtn.querySelector('.lang-label').innerText = state.currentLang.toUpperCase();
      updateLanguageUI();
      renderExperiences();
      initCurvaSChart();
    });
  }

  // Copiar E-mail com Feedback
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'felipe.engmdc@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast(i18n[state.currentLang].contactEmailCopied);
      });
    });
  }

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    // Fechar ao clicar em link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
  }
}

// Atualização de todos os textos com base no idioma atual
function updateLanguageUI() {
  const dict = i18n[state.currentLang];
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerText = dict[key];
    }
  });

  // Atualizar link do WhatsApp com mensagem codificada no idioma
  const whatsappBtn = document.getElementById('hero-whatsapp-btn');
  const whatsappFloatingBtn = document.getElementById('floating-whatsapp-btn');
  const contactWhatsAppBtn = document.getElementById('contact-whatsapp-btn');
  const encodedMsg = encodeURIComponent(dict.whatsappMessage);
  const waUrl = `https://wa.me/5593991515807?text=${encodedMsg}`;

  if (whatsappBtn) whatsappBtn.href = waUrl;
  if (whatsappFloatingBtn) whatsappFloatingBtn.href = waUrl;
  if (contactWhatsAppBtn) contactWhatsAppBtn.href = waUrl;

  // Atualizar botões de tema com base no idioma
  const themeBtns = [
    document.getElementById('theme-toggle-btn'),
    document.getElementById('mobile-theme-toggle-btn')
  ];
  themeBtns.forEach(btn => {
    if (!btn) return;
    const label = btn.querySelector('.theme-label');
    const isLight = state.currentTheme === 'light';
    if (label) label.innerText = isLight ? dict.themeDark : dict.themeLight;
    btn.title = isLight ? dict.themeToDarkTooltip : dict.themeToLightTooltip;
  });
}

// Modal de Detalhamento de Experiência
window.openExperienceModal = function(id) {
  const exp = experiencesData.find(e => e.id === id);
  if (!exp) return;

  const modal = document.getElementById('experience-modal');
  const modalBody = document.getElementById('modal-body');
  const lang = state.currentLang;

  modalBody.innerHTML = `
    <div class="space-y-6">
      <div class="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30 mb-2 font-mono">
            ${exp.badge[lang]}
          </span>
          <h2 class="text-2xl md:text-3xl font-bold text-white">${exp.role[lang]}</h2>
          <p class="text-lg text-cyan-400 font-semibold mt-1">${exp.company}</p>
          <p class="text-xs text-slate-400 mt-1 font-mono"><i class="fas fa-map-marker-alt text-amber-400 mr-1"></i>${exp.location} | <i class="fas fa-calendar-alt text-amber-400 mr-1"></i>${exp.period[lang]}</p>
        </div>
      </div>

      <div>
        <h4 class="text-sm font-mono text-amber-400 uppercase tracking-wider mb-2 font-bold">${lang === 'pt' ? 'Contexto do Projeto:' : 'Project Context:'}</h4>
        <p class="text-slate-300 leading-relaxed text-sm md:text-base">${exp.highlight[lang]}</p>
      </div>

      <div>
        <h4 class="text-sm font-mono text-amber-400 uppercase tracking-wider mb-3 font-bold">${lang === 'pt' ? 'Escopo & Entregas Chave Detalhadas:' : 'Detailed Scope & Key Deliverables:'}</h4>
        <div class="grid grid-cols-1 gap-2.5">
          ${exp.deliverables[lang].map((item, idx) => `
            <div class="flex items-start gap-3 bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
              <span class="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">0${idx + 1}</span>
              <span class="text-sm text-slate-200 leading-snug">${item}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div>
        <h4 class="text-sm font-mono text-slate-400 uppercase tracking-wider mb-2 font-bold">${lang === 'pt' ? 'Metodologias e Tecnologias:' : 'Methodologies & Technologies:'}</h4>
        <div class="flex flex-wrap gap-2">
          ${exp.tags.map(t => `<span class="px-3 py-1 bg-slate-800 text-cyan-300 text-xs rounded-lg border border-slate-700 font-mono">#${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
};

window.closeExperienceModal = function() {
  const modal = document.getElementById('experience-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

// Toast de Notificação
function showToast(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'fixed bottom-6 right-6 z-50 bg-slate-900 text-amber-400 border border-amber-500/50 shadow-2xl px-5 py-3.5 rounded-xl text-sm font-mono flex items-center gap-3 transition-all duration-300 transform translate-y-10 opacity-0';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fas fa-check-circle text-emerald-400 text-base"></i><span>${message}</span>`;
  toast.classList.remove('translate-y-10', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-10', 'opacity-0');
  }, 3500);
}

// Função otimizada para Impressão / Exportação para PDF
window.printResume = function() {
  // Fecha modais se houver algum aberto
  if (typeof closeExperienceModal === 'function') {
    closeExperienceModal();
  }
  // Exibe todas as experiências para garantir que o currículo impresso esteja 100% completo
  state.currentFilter = 'all';
  document.querySelectorAll('.filter-btn').forEach(btn => {
    if (btn.dataset.filter === 'all') {
      btn.classList.remove('bg-slate-800/80', 'text-slate-300', 'border-slate-700/50');
      btn.classList.add('bg-amber-500', 'text-black', 'border-amber-400');
    } else {
      btn.classList.remove('bg-amber-500', 'text-black', 'border-amber-400');
      btn.classList.add('bg-slate-800/80', 'text-slate-300', 'border-slate-700/50');
    }
  });
  renderExperiences();

  // Pequeno timeout para garantir renderização do DOM antes da impressão
  setTimeout(() => {
    window.print();
  }, 150);
};
