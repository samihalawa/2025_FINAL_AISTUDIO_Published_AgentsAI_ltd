import type { Language } from './hooks/useTranslation';

const content = {
    en: {
        PROJECT_DETAILS: [
            {
                name: 'Apolo',
                subtitle: 'Medical imaging workflow assistant',
                value: 'A focused product line for triage support, study review, and radiology workflow acceleration.',
                status: 'Clinical workflow track',
                focus: 'Imaging triage, review support, deployment-ready demos',
                next: 'Tighten demo flows and partner-facing clinical documentation',
                icon: 'heart-pulse'
            },
            {
                name: 'AutoClient.ai',
                subtitle: 'Revenue operations agent',
                value: 'An outbound and follow-up workspace that helps small teams identify prospects, personalize outreach, and keep pipeline movement visible.',
                status: 'Commercial automation track',
                focus: 'Lead discovery, outreach drafting, CRM-style follow-up',
                next: 'Package repeatable operator workflows for service businesses',
                icon: 'briefcase'
            },
            {
                name: 'RadiologyAI',
                subtitle: 'Structured reporting layer',
                value: 'A reporting and quality-assurance layer for turning clinical notes into cleaner structured radiology outputs.',
                status: 'Healthcare documentation track',
                focus: 'Voice-to-report, structured templates, QA review',
                next: 'Unify reporting templates with Apolo clinical workflows',
                icon: 'file-text'
            },
            {
                name: 'AutoFootball.ai',
                subtitle: 'Football intelligence workspace',
                value: 'A sports intelligence product for match review, player comparison, and scouting-style analysis.',
                status: 'Sports analytics track',
                focus: 'Tactical review, player valuation, media-ready insights',
                next: 'Improve presentation examples and analyst workflows',
                icon: 'bar-chart-3'
            },
        ],
        PAGE_SECTIONS: {
            about: {
                title: 'What AGENTS AI Builds',
                content: "AGENTS AI Limited builds practical AI product lines for domains where operators need faster analysis, cleaner workflows, and repeatable expert output. The company is based in London and keeps the portfolio focused on products that can be demonstrated, packaged, and improved quickly.",
                stats: [
                    { value: "4", label: "Active product lines" },
                    { value: "3", label: "Primary markets" },
                    { value: "2026", label: "Current operating cycle" }
                ]
            },
            summary: {
                title: '2026 Operating Focus',
                content: "The current priority is clarity: make every product easier to understand, easier to demo, and easier to connect to a real operator workflow. Each portfolio item keeps its own deck while the homepage now acts as a quick operating overview.",
                metrics: [
                    { value: "Build", label: "Product workflows users can inspect" },
                    { value: "Package", label: "Reusable demos and partner materials" },
                    { value: "Ship", label: "Fast improvements without heavy rewrites" }
                ]
            },
            whyInvest: {
                title: 'Why the Portfolio Works',
                content: "The portfolio is strongest when it stays practical: narrow product surfaces, reusable AI workflow patterns, and domain-specific demos that make each product easy to evaluate.",
                reasons: [
                    { icon: 'layout-dashboard', title: 'Clear product surfaces', text: "Each project has a defined operator, workflow, and presentation deck instead of a vague AI platform claim." },
                    { icon: 'cpu', title: 'Reusable technical base', text: "Shared AI workflow patterns reduce duplicated work while preserving product-specific positioning." },
                    { icon: 'badge-check', title: 'Demo-first communication', text: "The site now explains what each product does before asking visitors to open a deck." },
                    { icon: 'trending-up', title: 'Fast iteration loop', text: "Small, visible improvements can ship quickly while larger opportunities stay productized inside the portfolio." }
                ]
            }
        },
        NAV_LINKS: [
            { href: '#about', text: 'Build' },
            { href: '#summary', text: 'Focus' },
            { href: '#why-invest', text: 'Model' },
            { href: '#portfolio', text: 'Portfolio' },
            { href: '#blog', text: 'Updates' },
            { href: '#cta', text: 'Contact' },
        ],
        BLOG_SECTION: {
            title: 'Operating Updates',
            intro: 'A current, lightweight view of what the portfolio is being shaped around now: clearer demos, product packaging, and sharper operator use cases.',
            ctaLabel: 'Read update',
            posts: [
                {
                    title: 'Homepage refreshed around active product lines',
                    category: 'Portfolio',
                    date: 'May 2026',
                    excerpt: 'The public site now leads with what each product does, who it helps, and what the next improvement focus is.',
                    insight: 'This makes the page useful as a fast portfolio overview instead of a stale investment memo.'
                },
                {
                    title: 'Portfolio cards now show status, focus, and next step',
                    category: 'Product',
                    date: 'May 2026',
                    excerpt: 'Each product card adds practical metadata before linking to the deeper presentation deck.',
                    insight: 'Visitors can scan the portfolio without guessing which deck matters for their use case.'
                },
                {
                    title: 'Contact flow now prepares a direct email draft',
                    category: 'Operations',
                    date: 'May 2026',
                    excerpt: 'The contact form no longer pretends to submit to a missing backend. It opens a prepared email to info@agentsai.ltd.',
                    insight: 'That keeps the static site simple while making the next action explicit and usable.'
                }
            ]
        },
        mainPage: {
            newsletter: {
                title: 'Get Portfolio Updates',
                description: 'Receive concise AGENTS AI product and portfolio updates.'
            }
        }
    },
    es: {
        PROJECT_DETAILS: [
            {
                name: 'Apolo',
                subtitle: 'Asistente de flujo para imagen medica',
                value: 'Linea enfocada en soporte de triaje, revision de estudios y aceleracion del flujo radiologico.',
                status: 'Linea de flujo clinico',
                focus: 'Triaje de imagen, soporte de revision, demos listas para mostrar',
                next: 'Mejorar demos y documentacion clinica para socios',
                icon: 'heart-pulse'
            },
            {
                name: 'AutoClient.ai',
                subtitle: 'Agente de operaciones comerciales',
                value: 'Workspace de outbound y seguimiento para ayudar a equipos pequenos a identificar prospectos, personalizar mensajes y ver el avance del pipeline.',
                status: 'Linea de automatizacion comercial',
                focus: 'Descubrimiento de leads, borradores de outreach, seguimiento tipo CRM',
                next: 'Empaquetar flujos repetibles para negocios de servicios',
                icon: 'briefcase'
            },
            {
                name: 'RadiologyAI',
                subtitle: 'Capa de informes estructurados',
                value: 'Capa de reporting y control de calidad para convertir notas clinicas en salidas radiologicas mas limpias y estructuradas.',
                status: 'Linea de documentacion sanitaria',
                focus: 'Voz a informe, plantillas estructuradas, revision QA',
                next: 'Unificar plantillas con los flujos clinicos de Apolo',
                icon: 'file-text'
            },
            {
                name: 'AutoFootball.ai',
                subtitle: 'Workspace de inteligencia futbolistica',
                value: 'Producto de inteligencia deportiva para revision de partidos, comparacion de jugadores y analisis tipo scouting.',
                status: 'Linea de analitica deportiva',
                focus: 'Revision tactica, valoracion de jugadores, insights para medios',
                next: 'Mejorar ejemplos de presentacion y flujos de analista',
                icon: 'bar-chart-3'
            },
        ],
        PAGE_SECTIONS: {
            about: {
                title: 'Que Construye AGENTS AI',
                content: "AGENTS AI Limited crea lineas de producto de IA practicas para sectores donde los operadores necesitan analisis mas rapido, flujos mas claros y resultados expertos repetibles. La empresa tiene sede en Londres y mantiene el portafolio centrado en productos que se pueden demostrar, empaquetar y mejorar rapido.",
                stats: [
                    { value: "4", label: "Lineas de producto activas" },
                    { value: "3", label: "Mercados principales" },
                    { value: "2026", label: "Ciclo operativo actual" }
                ]
            },
            summary: {
                title: 'Foco Operativo 2026',
                content: "La prioridad actual es claridad: que cada producto sea mas facil de entender, demostrar y conectar con un flujo real de trabajo. Cada item mantiene su deck propio y la pagina principal funciona como resumen operativo rapido.",
                metrics: [
                    { value: "Construir", label: "Flujos que los usuarios pueden inspeccionar" },
                    { value: "Empaquetar", label: "Demos y materiales reutilizables" },
                    { value: "Publicar", label: "Mejoras rapidas sin reescrituras grandes" }
                ]
            },
            whyInvest: {
                title: 'Por Que Funciona el Portafolio',
                content: "El portafolio es mas fuerte cuando se mantiene practico: superficies de producto claras, patrones reutilizables de IA y demos especificas por dominio.",
                reasons: [
                    { icon: 'layout-dashboard', title: 'Superficies de producto claras', text: "Cada proyecto tiene operador, flujo y deck definido en lugar de una promesa generica de plataforma IA." },
                    { icon: 'cpu', title: 'Base tecnica reutilizable', text: "Patrones compartidos de workflow IA reducen trabajo duplicado sin perder posicionamiento por producto." },
                    { icon: 'badge-check', title: 'Comunicacion demo-first', text: "La pagina explica que hace cada producto antes de pedir al visitante que abra un deck." },
                    { icon: 'trending-up', title: 'Iteracion rapida', text: "Las mejoras visibles pueden publicarse rapido mientras las oportunidades grandes se productizan dentro del portafolio." }
                ]
            }
        },
        NAV_LINKS: [
            { href: '#about', text: 'Producto' },
            { href: '#summary', text: 'Foco' },
            { href: '#why-invest', text: 'Modelo' },
            { href: '#portfolio', text: 'Portafolio' },
            { href: '#blog', text: 'Updates' },
            { href: '#cta', text: 'Contacto' },
        ],
        BLOG_SECTION: {
            title: 'Actualizaciones Operativas',
            intro: 'Vista actual y ligera de hacia donde se esta afinando el portafolio: demos mas claras, empaquetado de producto y casos de uso mas concretos.',
            ctaLabel: 'Leer update',
            posts: [
                {
                    title: 'Home actualizada alrededor de productos activos',
                    category: 'Portafolio',
                    date: 'Mayo 2026',
                    excerpt: 'La web publica ahora empieza por que hace cada producto, a quien ayuda y cual es el siguiente foco de mejora.',
                    insight: 'La pagina sirve como resumen rapido del portafolio en vez de parecer un memo de inversion antiguo.'
                },
                {
                    title: 'Las cards muestran estado, foco y siguiente paso',
                    category: 'Producto',
                    date: 'Mayo 2026',
                    excerpt: 'Cada card anade metadatos practicos antes de enlazar al deck de presentacion.',
                    insight: 'El visitante puede escanear el portafolio sin adivinar que deck le conviene abrir.'
                },
                {
                    title: 'El contacto prepara un email directo',
                    category: 'Operaciones',
                    date: 'Mayo 2026',
                    excerpt: 'El formulario ya no simula enviar a un backend inexistente. Abre un email preparado a info@agentsai.ltd.',
                    insight: 'Mantiene la web estatica simple y hace la siguiente accion explicita y usable.'
                }
            ]
        },
        mainPage: {
            newsletter: {
                title: 'Reciba Updates del Portafolio',
                description: 'Actualizaciones concisas sobre productos y portafolio de AGENTS AI.'
            }
        }
    },
    zh: {
        PROJECT_DETAILS: [
            {
                name: 'Apolo',
                subtitle: '医学影像工作流助手',
                value: '面向分诊支持、影像复核和放射科工作流提效的产品线。',
                status: '临床工作流方向',
                focus: '影像分诊、复核支持、可演示流程',
                next: '优化演示流程和合作方临床资料',
                icon: 'heart-pulse'
            },
            {
                name: 'AutoClient.ai',
                subtitle: '营收运营智能体',
                value: '帮助小团队发现潜在客户、生成个性化外联内容，并保持销售跟进可见。',
                status: '商业自动化方向',
                focus: '线索发现、外联草稿、CRM 式跟进',
                next: '为服务型业务打包可复用运营流程',
                icon: 'briefcase'
            },
            {
                name: 'RadiologyAI',
                subtitle: '结构化报告层',
                value: '把临床记录转化为更清晰、更结构化放射报告的报告与质控层。',
                status: '医疗文档方向',
                focus: '语音转报告、结构化模板、质控复核',
                next: '与 Apolo 临床流程统一报告模板',
                icon: 'file-text'
            },
            {
                name: 'AutoFootball.ai',
                subtitle: '足球情报工作台',
                value: '用于比赛复盘、球员对比和球探式分析的体育情报产品。',
                status: '体育分析方向',
                focus: '战术复盘、球员估值、媒体级洞察',
                next: '增强演示案例和分析师工作流',
                icon: 'bar-chart-3'
            },
        ],
        PAGE_SECTIONS: {
            about: {
                title: 'AGENTS AI 正在构建什么',
                content: "AGENTS AI Limited 构建实用型 AI 产品线，服务于需要更快分析、更清晰流程和可复用专家输出的行业。公司位于伦敦，产品组合聚焦于可演示、可打包、可快速改进的方向。",
                stats: [
                    { value: "4", label: "活跃产品线" },
                    { value: "3", label: "主要市场" },
                    { value: "2026", label: "当前运营周期" }
                ]
            },
            summary: {
                title: '2026 运营重点',
                content: "当前重点是清晰度：让每个产品更容易理解、更容易演示，也更容易连接到真实运营流程。每个项目仍保留自己的演示文稿，首页则作为快速运营概览。",
                metrics: [
                    { value: "构建", label: "用户可检查的产品流程" },
                    { value: "打包", label: "可复用演示和合作材料" },
                    { value: "发布", label: "快速改进，避免大重写" }
                ]
            },
            whyInvest: {
                title: '产品组合为何有效',
                content: "当产品组合保持实用时最有价值：清晰的产品界面、可复用的 AI 工作流模式，以及面向具体行业的演示。",
                reasons: [
                    { icon: 'layout-dashboard', title: '清晰的产品界面', text: "每个项目都有明确的操作者、工作流和演示文稿，而不是泛泛的平台叙事。" },
                    { icon: 'cpu', title: '可复用技术底座', text: "共享 AI 工作流模式减少重复建设，同时保留各产品定位。" },
                    { icon: 'badge-check', title: '演示优先表达', text: "页面先解释每个产品能做什么，再引导访客打开详细 deck。" },
                    { icon: 'trending-up', title: '快速迭代循环', text: "小而可见的改进可以快速上线，更大的机会继续在产品组合内沉淀。" }
                ]
            }
        },
        NAV_LINKS: [
            { href: '#about', text: '产品' },
            { href: '#summary', text: '重点' },
            { href: '#why-invest', text: '模式' },
            { href: '#portfolio', text: '组合' },
            { href: '#blog', text: '更新' },
            { href: '#cta', text: '联系' },
        ],
        BLOG_SECTION: {
            title: '运营更新',
            intro: '当前产品组合正在围绕更清晰的演示、产品打包和更明确的运营场景进行调整。',
            ctaLabel: '查看更新',
            posts: [
                {
                    title: '首页围绕活跃产品线刷新',
                    category: '产品组合',
                    date: '2026年5月',
                    excerpt: '公开网站现在优先说明每个产品做什么、帮助谁、下一步优化重点是什么。',
                    insight: '首页变成快速产品组合概览，而不是陈旧的投资备忘录。'
                },
                {
                    title: '产品卡片增加状态、重点和下一步',
                    category: '产品',
                    date: '2026年5月',
                    excerpt: '每张产品卡在链接到详细 deck 前，先展示实用元信息。',
                    insight: '访客不用猜，也能快速判断应该打开哪个产品 deck。'
                },
                {
                    title: '联系流程改为准备直接邮件',
                    category: '运营',
                    date: '2026年5月',
                    excerpt: '表单不再假装提交到不存在的后端，而是打开发往 info@agentsai.ltd 的预填邮件。',
                    insight: '保持静态网站简单，同时让下一步动作明确可用。'
                }
            ]
        },
        mainPage: {
            newsletter: {
                title: '获取产品组合更新',
                description: '接收简明的 AGENTS AI 产品和组合更新。'
            }
        }
    }
};

interface ProjectDetail {
    name: string;
    subtitle: string;
    value: string;
    status: string;
    focus: string;
    next: string;
    icon: string;
}

interface PageContent {
    PROJECT_DETAILS: ProjectDetail[];
    PAGE_SECTIONS: {
        about: { title: string; content: string; stats: { value: string; label: string }[] };
        summary: { title: string; content: string; metrics: { value: string; label: string }[] };
        whyInvest: { title: string; content: string; reasons: { icon: string; title: string; text: string }[] };
    };
    NAV_LINKS: { href: string; text: string }[];
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
    const data = content[lang] || content.en;

    const serializeSection = (
        title: string,
        section: {
            content?: string;
            stats?: Array<{ label: string; value: string }>;
            metrics?: Array<{ label: string; value: string }>;
            reasons?: Array<{ title: string; text: string }>;
        }
    ): string => {
        let context = `## ${title}\n`;
        if (typeof section.content === 'string') {
            context += `${section.content}\n`;
        }
        if (section.stats) {
            context += section.stats.map((s) => `- ${s.label}: ${s.value}`).join('\n') + '\n';
        }
        if (section.metrics) {
            context += section.metrics.map((m) => `- ${m.label}: ${m.value}`).join('\n') + '\n';
        }
        if (section.reasons) {
            context += section.reasons.map((r) => `### ${r.title}\n${r.text}`).join('\n') + '\n';
        }
        return context;
    };

    const serializeProjects = (projects: ProjectDetail[]): string => {
        return `## Portfolio\n${projects.map(project => `### ${project.name}\n${project.subtitle}\n${project.value}\nStatus: ${project.status}\nFocus: ${project.focus}\nNext: ${project.next}`).join('\n\n')}\n`;
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
                .map(([, value]) => serializeSection(value.title, value))
                .join('\n\n');
            const projectContext = serializeProjects(data.PROJECT_DETAILS);
            const blogContext = serializeBlog(data.BLOG_SECTION);
            return `${sectionContext}\n\n${projectContext}\n\n${blogContext}`.trim();
        }
    };
};
