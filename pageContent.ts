import { APOLO_SLIDES_EN, APOLO_SLIDES_ES, APOLO_SLIDES_ZH } from './presentations/apolo';
import { AUTOCLIENT_SLIDES_EN, AUTOCLIENT_SLIDES_ES, AUTOCLIENT_SLIDES_ZH } from './presentations/autoclient';
import { RADIOLOGY_AI_SLIDES_EN, RADIOLOGY_AI_SLIDES_ES, RADIOLOGY_AI_SLIDES_ZH } from './presentations/radiology-ai';
import { AUTOFOOTBALL_SLIDES_EN, AUTOFOOTBALL_SLIDES_ES, AUTOFOOTBALL_SLIDES_ZH } from './presentations/autofootball';
import type { SlideDeck } from './presentations/common';
import type { Language } from './hooks/useTranslation';

const content = {
    en: {
        PROJECT_DETAILS: [
            { name: 'Apolo', subtitle: 'AI Diagnostic Assistant for Medical Imaging', value: 'Increases diagnostic efficiency for radiologists by 40% while reducing misdiagnosis rates by 15%.', icon: 'heart-pulse' },
            { name: 'AutoClient.ai', subtitle: 'Automated B2B Sales Lead Engine', value: 'Automatically identifies, contacts, and follows up with potential clients, focusing sales team efforts on conversion.', icon: 'briefcase' },
            { name: 'RadiologyAI', subtitle: 'Next-Generation Radiology Reporting System', value: 'Transforms voice descriptions into structured medical reports in real-time using natural language processing.', icon: 'file-text' },
            { name: 'AutoFootball.ai', subtitle: 'Football Tactics Analysis & Player Performance Valuation', value: 'Provides deep match insights for clubs and media, quantifying player value and tactical efficiency.', icon: 'bar-chart-3' },
        ],
        PAGE_SECTIONS: {
            about: {
                title: 'About Us',
                content: "AGENTS AI is a London-based AI technology company building a unified, cross-industry Agent platform. Our mission is to provide every industry with its own AI expert, seamlessly integrating AI agents into core business processes to become an indispensable growth engine.",
                stats: [
                    { value: "50+", label: "Years of Combined Experience" },
                    { value: "4", label: "Core AI Products" },
                    { value: "Oxbridge", label: "AI Scientist Founders" }
                ]
            },
            summary: {
                title: 'Investment Summary',
                content: "We are seeking seed funding to accelerate the commercialization of our four core AI products. With a unified technology foundation and diverse product matrix, we offer early investors highly attractive return potential.",
                metrics: [
                    { value: "€2.5M", label: "Seed Funding Target" },
                    { value: "18 Months", label: "To €5M Annual Revenue" },
                    { value: "<24 Months", label: "Investment Payback" }
                ]
            },
            roadmap: {
                title: 'Business Plan & Roadmap',
                content: "Our strategic roadmap is designed for rapid development, market penetration, and scalable growth, culminating in a Series A financing round with a target valuation of €100 million.",
                phases: [
                    { phase: "Phase 1 (0-6M)", title: "MVP Completion", text: "Complete MVP development and validation with 5-10 seed users." },
                    { phase: "Phase 2 (6-12M)", title: "European Launch", text: "Launch in UK/EU markets, targeting 50 paying enterprise clients." },
                    { phase: "Phase 3 (12-18M)", title: "Global Expansion", text: "Enter North American and Asia-Pacific markets and initiate Series A financing." }
                ]
            },
            whyInvest: {
                title: 'Why Invest in AGENTS AI',
                content: "Investing in AGENTS AI means backing a top-tier team with a clear vision, a robust and scalable technology stack, and a multi-faceted strategy for market leadership and high returns.",
                reasons: [
                    { icon: 'shield-check', title: 'Diverse Verticals, Mitigated Risk', text: "Products cover healthcare, sales, sports, and finance, hedging against single-industry risks." },
                    { icon: 'cpu', title: 'Unified Technology, Reduced Costs', text: "Core AI framework allows for rapid, cost-effective development of new products." },
                    { icon: 'users-round', title: 'Top-Tier Team, Strong Execution', text: "A blend of academic and industrial elites with proven engineering and commercial capabilities." },
                    { icon: 'trending-up', title: 'Clear Business Model', text: "A mix of SaaS and on-premise solutions ensures stable, diverse revenue streams." }
                ]
            }
        },
        NAV_LINKS: [
            { href: '#about', text: 'About' },
            { href: '#summary', text: 'Summary' },
            { href: '#roadmap', text: 'Roadmap' },
            { href: '#why-invest', text: 'Why Invest' },
            { href: '#portfolio', text: 'Portfolio' },
            { href: '#blog', text: 'Insights' },
            { href: '#cta', text: 'Contact' },
        ],
        PRESENTATIONS: [
            { title: 'Apolo (Medical AI)', slides: APOLO_SLIDES_EN },
            { title: 'AutoClient.ai (Sales AI)', slides: AUTOCLIENT_SLIDES_EN },
            { title: 'RadiologyAI (Radiology AI)', slides: RADIOLOGY_AI_SLIDES_EN },
            { title: 'AutoFootball.ai (Football AI)', slides: AUTOFOOTBALL_SLIDES_EN }
        ],
        BLOG_SECTION: {
            title: 'Latest Intelligence Briefings',
            intro: 'Investor-ready insights that track traction milestones, product validation, and market signals across the AGENTS AI portfolio.',
            ctaLabel: 'Open briefing',
            posts: [
                {
                    title: 'Apolo launches targeted NHS diagnostic pilot',
                    category: 'Healthcare AI',
                    date: 'July 2025',
                    excerpt: 'A two-hospital NHS trust approved a 6-month pilot to benchmark Apolo against incumbent CAD radiology tools across 12,000 annual scans.',
                    insight: 'Pilot expands Apolo’s labelled dataset by 18% and opens NHS procurement pathway for FY26.'
                },
                {
                    title: 'AutoClient.ai automates pipeline for Tier-1 fintech vendor',
                    category: 'Revenue Growth',
                    date: 'August 2025',
                    excerpt: 'Closed a paid deployment with a £80m ARR fintech to orchestrate outbound personalization, delivering 34% lift in opportunity creation within four weeks.',
                    insight: 'Expands ACV to £120k with co-developed compliance templates that can resell into regulated verticals.'
                },
                {
                    title: 'RadiologyAI earns CE Class IIa readiness milestone',
                    category: 'Regulatory',
                    date: 'September 2025',
                    excerpt: 'Completed clinical risk management audit and penultimate cybersecurity review, positioning RadiologyAI for CE mark submission in Q4 2025.',
                    insight: 'Accelerates European commercialization roadmap and strengthens pricing power with hospitals demanding evidence-backed automation.'
                }
            ]
        }
    },
    es: {
        PROJECT_DETAILS: [
            { name: 'Apolo', subtitle: 'Asistente de Diagnóstico por IA para Imágenes Médicas', value: 'Aumenta la eficiencia diagnóstica de los radiólogos en un 40% y reduce las tasas de diagnóstico erróneo en un 15%.', icon: 'heart-pulse' },
            { name: 'AutoClient.ai', subtitle: 'Motor Automatizado de Clientes Potenciales B2B', value: 'Identifica, contacta y realiza seguimientos automáticos a clientes potenciales, enfocando los esfuerzos del equipo de ventas en la conversión.', icon: 'briefcase' },
            { name: 'RadiologyAI', subtitle: 'Sistema de Informes Radiológicos de Nueva Generación', value: 'Transforma descripciones de voz en informes médicos estructurados en tiempo real mediante procesamiento de lenguaje natural.', icon: 'file-text' },
            { name: 'AutoFootball.ai', subtitle: 'Análisis Táctico de Fútbol y Valoración del Rendimiento de Jugadores', value: 'Proporciona análisis profundos de partidos para clubes y medios, cuantificando el valor del jugador y la eficiencia táctica.', icon: 'bar-chart-3' },
        ],
        PAGE_SECTIONS: {
            about: {
                title: 'Sobre Nosotros',
                content: "AGENTS AI es una empresa tecnológica de IA con sede en Londres que construye una plataforma de Agentes unificada e intersectorial. Nuestra misión es proporcionar a cada industria su propio experto en IA, integrando agentes de IA en los procesos de negocio para ser un motor de crecimiento indispensable.",
                stats: [
                    { value: "50+", label: "Años de Experiencia Combinada" },
                    { value: "4", label: "Productos de IA Principales" },
                    { value: "Oxbridge", label: "Científicos de IA Fundadores" }
                ]
            },
            summary: {
                title: 'Resumen de Inversión',
                content: "Buscamos financiación semilla para acelerar la comercialización de nuestros cuatro productos principales de IA. Con una base tecnológica unificada y una matriz de productos diversificada, ofrecemos a los primeros inversores un potencial de retorno muy atractivo.",
                metrics: [
                    { value: "2,5M €", label: "Objetivo Financiación Semilla" },
                    { value: "18 Meses", label: "Para 5M € Ingresos Anuales" },
                    { value: "<24 Meses", label: "Retorno de la Inversión" }
                ]
            },
            roadmap: {
                title: 'Plan de Negocio y Hoja de Ruta',
                content: "Nuestra hoja de ruta estratégica está diseñada para un rápido desarrollo, penetración en el mercado y crecimiento escalable, culminando en una ronda de financiación Serie A con una valoración objetivo de 100 millones de euros.",
                phases: [
                    { phase: "Fase 1 (0-6M)", title: "Finalización del MVP", text: "Completar el desarrollo y la validación del MVP con 5-10 usuarios semilla." },
                    { phase: "Fase 2 (6-12M)", title: "Lanzamiento en Europa", text: "Lanzamiento en los mercados del Reino Unido/UE, con el objetivo de 50 clientes empresariales de pago." },
                    { phase: "Fase 3 (12-18M)", title: "Expansión Global", text: "Entrar en los mercados de América del Norte y Asia-Pacífico e iniciar la financiación de Serie A." }
                ]
            },
            whyInvest: {
                title: 'Por Qué Invertir en AGENTS AI',
                content: "Invertir en AGENTS AI significa respaldar a un equipo de primer nivel con una visión clara, una pila tecnológica robusta y escalable, y una estrategia multifacética para el liderazgo en el mercado y altos rendimientos.",
                reasons: [
                    { icon: 'shield-check', title: 'Verticales Diversas, Riesgo Mitigado', text: "Los productos cubren salud, ventas, deportes y finanzas, mitigando los riesgos de una sola industria." },
                    { icon: 'cpu', title: 'Tecnología Unificada, Costos Reducidos', text: "El marco de IA central permite un desarrollo rápido y rentable de nuevos productos." },
                    { icon: 'users-round', title: 'Equipo de Primer Nivel, Fuerte Ejecución', text: "Una mezcla de élites académicas e industriales con probadas capacidades de ingeniería y comerciales." },
                    { icon: 'trending-up', title: 'Modelo de Negocio Claro', text: "Una combinación de SaaS y soluciones locales garantiza flujos de ingresos estables y diversos." }
                ]
            }
        },
        NAV_LINKS: [
            { href: '#about', text: 'Nosotros' },
            { href: '#summary', text: 'Resumen' },
            { href: '#roadmap', text: 'Hoja de Ruta' },
            { href: '#why-invest', text: 'Por Qué Invertir' },
            { href: '#portfolio', text: 'Portafolio' },
            { href: '#blog', text: 'Perspectivas' },
            { href: '#cta', text: 'Contacto' },
        ],
        PRESENTATIONS: [
            { title: 'Apolo (IA Médica)', slides: APOLO_SLIDES_ES },
            { title: 'AutoClient.ai (IA de Ventas)', slides: AUTOCLIENT_SLIDES_ES },
            { title: 'RadiologyAI (IA de Radiología)', slides: RADIOLOGY_AI_SLIDES_ES },
            { title: 'AutoFootball.ai (IA de Fútbol)', slides: AUTOFOOTBALL_SLIDES_ES }
        ],
        BLOG_SECTION: {
            title: 'Informes Estratégicos Recientes',
            intro: 'Actualizaciones preparadas para inversores que conectan tracción comercial, validación de producto y señales de mercado en todo el portafolio de AGENTS AI.',
            ctaLabel: 'Abrir informe',
            posts: [
                {
                    title: 'Apolo inicia piloto dirigido con un trust del NHS',
                    category: 'IA en Salud',
                    date: 'Julio 2025',
                    excerpt: 'Un trust del NHS que reúne a dos hospitales aprobó un piloto de 6 meses para comparar Apolo con las herramientas CAD existentes en 12 000 estudios anuales.',
                    insight: 'El piloto amplía el conjunto de datos etiquetados de Apolo en un 18 % y abre la vía de compras del NHS para el ejercicio 2026.'
                },
                {
                    title: 'AutoClient.ai automatiza el pipeline para proveedor fintech de nivel 1',
                    category: 'Crecimiento de Ingresos',
                    date: 'Agosto 2025',
                    excerpt: 'Se cerró un despliegue de pago con una fintech de £80M ARR para orquestar la personalización outbound, logrando un aumento del 34 % en oportunidades creadas en cuatro semanas.',
                    insight: 'Amplía el ACV a £120k con plantillas de cumplimiento co-desarrolladas que pueden revenderse en verticales regulados.'
                },
                {
                    title: 'RadiologyAI alcanza hito de preparación para marcado CE Clase IIa',
                    category: 'Regulación',
                    date: 'Septiembre 2025',
                    excerpt: 'Completó la auditoría de gestión de riesgos clínicos y la penúltima revisión de ciberseguridad, preparando a RadiologyAI para presentar la certificación CE en el 4T 2025.',
                    insight: 'Acelera la hoja de ruta de comercialización europea y refuerza el poder de fijación de precios con hospitales que exigen automatización respaldada por evidencia.'
                }
            ]
        }
    },
    zh: {
        PROJECT_DETAILS: [
            { name: 'Apolo', subtitle: '医疗影像 AI 诊断助手', value: '将放射科医生的诊断效率提升 40%，同时将误诊率降低 15%。', icon: 'heart-pulse' },
            { name: 'AutoClient.ai', subtitle: 'B2B 销售线索自动化引擎', value: '自动识别、触达并跟进潜在客户，将销售团队的精力聚焦于转化环节。', icon: 'briefcase' },
            { name: 'RadiologyAI', subtitle: '下一代放射学报告系统', value: '通过自然语言处理技术，将语音描述实时转化为结构化的医学报告。', icon: 'file-text' },
            { name: 'AutoFootball.ai', subtitle: '足球战术分析与球员表现评估', value: '为俱乐部和媒体提供深度比赛洞察，量化球员价值与战术效率。', icon: 'bar-chart-3' },
        ],
        PAGE_SECTIONS: {
            about: {
                title: '关于我们',
                content: "AGENTS AI 是一家总部位于伦敦的 AI 科技公司，致力于构建统一的、跨行业的智能体平台。我们的使命是“让每个行业都拥有专属的 AI 专家”，将 AI 智能体无缝集成到核心业务流程中，成为不可或缺的增长引擎。",
                stats: [
                    { value: "50+", label: "年综合经验" },
                    { value: "4", label: "个核心AI产品" },
                    { value: "牛津剑桥", label: "AI科学家创始人" }
                ]
            },
            summary: {
                title: '投资摘要',
                content: "我们正在寻求种子轮融资，以加速我们四个核心AI产品的商业化。凭借统一的技术基础和多样化的产品矩阵，我们为早期投资者提供了极具吸引力的回报潜力。",
                metrics: [
                    { value: "250万欧元", label: "种子轮融资目标" },
                    { value: "18个月", label: "实现500万欧元年收入" },
                    { value: "<24个月", label: "投资回收期" }
                ]
            },
            roadmap: {
                title: '商业计划与路线图',
                content: "我们的战略路线图旨在实现快速开发、市场渗透和可扩展增长，最终目标是以1亿欧元的目标估值完成A轮融资。",
                phases: [
                    { phase: "第一阶段 (0-6个月)", title: "完成MVP", text: "完成MVP开发并与5-10名种子用户进行验证。" },
                    { phase: "第二阶段 (6-12个月)", title: "欧洲市场启动", text: "在英国/欧盟市场推出，目标是50家付费企业客户。" },
                    { phase: "第三阶段 (12-18个月)", title: "全球扩张", text: "进入北美和亚太市场，并启动A轮融资。" }
                ]
            },
            whyInvest: {
                title: '为何投资 AGENTS AI',
                content: "投资AGENTS AI意味着支持一个拥有清晰愿景、强大可扩展技术栈以及多元化市场领先战略的顶尖团队，以获取高额回报。",
                reasons: [
                    { icon: 'shield-check', title: '多元赛道，分散风险', text: "产品覆盖医疗、销售、体育和金融领域，对冲单一行业风险。" },
                    { icon: 'cpu', title: '统一技术，降本增效', text: "核心AI框架支持快速、经济高效的新产品开发。" },
                    { icon: 'users-round', title: '顶尖团队，执行力强', text: "学术界与工业界精英的结合，拥有经过验证的工程和商业能力。" },
                    { icon: 'trending-up', title: '清晰的商业模式', text: "SaaS和本地部署解决方案的结合确保了稳定、多元的收入来源。" }
                ]
            }
        },
        NAV_LINKS: [
            { href: '#about', text: '关于' },
            { href: '#summary', text: '摘要' },
            { href: '#roadmap', text: '路线图' },
            { href: '#why-invest', text: '为何投资' },
            { href: '#portfolio', text: '项目组合' },
            { href: '#blog', text: '洞察' },
            { href: '#cta', text: '联系' },
        ],
        PRESENTATIONS: [
            { title: 'Apolo (医疗AI)', slides: APOLO_SLIDES_ZH },
            { title: 'AutoClient.ai (销售AI)', slides: AUTOCLIENT_SLIDES_ZH },
            { title: 'RadiologyAI (放射科AI)', slides: RADIOLOGY_AI_SLIDES_ZH },
            { title: 'AutoFootball.ai (足球AI)', slides: AUTOFOOTBALL_SLIDES_ZH }
        ],
        BLOG_SECTION: {
            title: '最新战略洞察',
            intro: '面向投资人的高价值简报，串联 AGENTS AI 各项目的商业进展、产品验证与市场信号。',
            ctaLabel: '打开简报',
            posts: [
                {
                    title: 'Apolo 启动 NHS 定向诊断试点',
                    category: '医疗AI',
                    date: '2025年7月',
                    excerpt: '两家英国国民健康署医院批准为期 6 个月的试点，将 Apolo 与现有 CAD 放射工具在每年 1.2 万例影像上进行对比。',
                    insight: '试点将 Apolo 的标注数据集扩充 18%，为 2026 财年打开 NHS 采购通道。'
                },
                {
                    title: 'AutoClient.ai 支持一级金融科技供应商自动化线索',
                    category: '营收增长',
                    date: '2025年8月',
                    excerpt: '与一家年经常性收入 8000 万英镑的金融科技企业签订付费部署，四周内实现商机创建提升 34%。',
                    insight: '结合共建的合规模板，将年度合同额提升至 12 万英镑，可复制至受监管行业。'
                },
                {
                    title: 'RadiologyAI 达成 CE Class IIa 提交前关键节点',
                    category: '监管合规',
                    date: '2025年9月',
                    excerpt: '完成临床风险管理审计与倒数第二次网络安全评估，计划于 2025 年第四季度提交 CE 认证。',
                    insight: '加速欧洲商业化节奏，并以有证据支撑的自动化能力增强医院端的议价空间。'
                }
            ]
        }
    }
};

interface PageContent {
    PROJECT_DETAILS: { name: string; subtitle: string; value: string; icon: string }[];
    PAGE_SECTIONS: {
        about: { title: string; content: string; stats: { value: string; label: string }[] };
        summary: { title: string; content: string; metrics: { value: string; label: string }[] };
        roadmap: { title: string; content: string; phases: { phase: string; title: string; text: string }[] };
        whyInvest: { title: string; content: string; reasons: { icon: string; title: string; text: string }[] };
    };
    NAV_LINKS: { href: string; text: string }[];
    PRESENTATIONS: SlideDeck[];
    BLOG_SECTION: {
        title: string;
        intro: string;
        ctaLabel: string;
        posts: {
            title: string;
            category: string;
            date: string;
            excerpt: string;
            insight: string;
        }[];
    };
    getPageContext: () => string;
}

export const getPageContent = (lang: Language): PageContent => {
    const data = content[lang] || content['en'];
    
    const serializeSection = (title: string, content: any): string => {
        let context = `## ${title}\n`;
        if (typeof content.content === 'string') {
            context += `${content.content}\n`;
        }
        if (content.stats) {
            context += content.stats.map((s: any) => `- ${s.label}: ${s.value}`).join('\n') + '\n';
        }
        if (content.metrics) {
            context += content.metrics.map((m: any) => `- ${m.label}: ${m.value}`).join('\n') + '\n';
        }
        if (content.phases) {
            context += content.phases.map((p: any) => `### ${p.phase}: ${p.title}\n${p.text}`).join('\n') + '\n';
        }
        if (content.reasons) {
            context += content.reasons.map((r: any) => `### ${r.title}\n${r.text}`).join('\n') + '\n';
        }
        return context;
    };

    const serializeBlog = (blog: PageContent['BLOG_SECTION']): string => {
        let context = `## ${blog.title}\n${blog.intro}\n`;
        context += blog.posts.map(post => `### ${post.title} (${post.category}, ${post.date})\n${post.excerpt}\n${post.insight}`).join('\n') + '\n';
        return context;
    };

    return {
        ...data,
        getPageContext: (): string => {
            const sectionContext = Object.entries(data.PAGE_SECTIONS)
                                         .map(([_, value]) => serializeSection(value.title, value))
                                         .join('\n\n');
            const blogContext = serializeBlog(data.BLOG_SECTION);
            return `${sectionContext}\n\n${blogContext}`.trim();
        }
    };
};
