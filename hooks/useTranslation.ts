import React, { createContext, useState, useContext, useEffect, useCallback, ReactNode, useMemo } from 'react';

export const translations = {
  en: {
    'mainPage.title': 'AGENTS AI Limited :: Investment Proposal',
    'mainPage.header.title': 'AGENTS AI Limited',
    'mainPage.header.subtitle': 'Unified Intelligence, Driving the Future',
    'mainPage.header.location': 'London, United Kingdom',
    'mainPage.header.regNo': 'Reg. No',
    'mainPage.portfolio.title': 'Flagship Project Portfolio',
    'mainPage.portfolio.description': 'Click on a project below to view an interactive presentation and delve into its technical details, market potential, and business model.',
    'mainPage.portfolio.viewAria': 'View presentation for',
    'mainPage.portfolio.viewButton': 'View Presentation',
    'mainPage.cta.title': 'Act Now, Co-create the Future',
    'mainPage.cta.description': 'We sincerely invite you to have an in-depth discussion with our founding team. You can start by chatting with our AI analyst or schedule a meeting directly.',
    'mainPage.cta.chatButton': 'Chat with AI Analyst',
    'mainPage.cta.meetingButton': 'Schedule a Meeting',
    'mainPage.footer.copyright': 'Copyright © 2025 AGENTS AI Limited. All rights reserved.',
    'mainPage.footer.address': 'Address: 123 Tech Avenue, London, EC1V 2NX, United Kingdom | Company Registration No: 13374242',
    'mainPage.footer.confidentialityTitle': 'Confidentiality Notice:',
    'mainPage.footer.confidentialityText': 'This document contains confidential information of AGENTS AI Limited and is intended only for the designated recipients. Any reproduction, distribution, or disclosure of any part of this document without prior written consent from the company is strictly prohibited.',
    
    'presentationsPage.title': 'Project Portfolio - AGENTS AI Limited',
    'presentationsPage.header.main': 'AGENTS AI Limited',
    'presentationsPage.header.sub': 'Project Portfolio',
    'presentationsPage.header.back': 'Back to Home',
    'presentationsPage.toggleFullscreen': 'Toggle Fullscreen',
    'presentationsPage.viewer.ariaLabel': 'Showing presentation for {{project}}',
    'presentationsPage.nav.prev': 'Previous Slide',
    'presentationsPage.nav.next': 'Next Slide',
    'presentationsPage.nav.grid': 'Grid View',
    'presentationsPage.nav.notes': 'Speaker Notes',
    'presentationsPage.grid.title': 'Slide Navigation',
    'presentationsPage.grid.close': 'Close Grid View',
    'presentationsPage.grid.goto': 'Go to slide',
    'presentationsPage.notes.title': 'Speaker Notes',
    'presentationsPage.notes.close': 'Close Notes Panel',
    'presentationsPage.notes.generating': 'Generating notes...',
    'presentationsPage.notes.analyzing': 'The AI is analyzing the slide',
    'presentationsPage.notes.generateButton': '✨ Generate AI Notes',
    'presentationsPage.notes.generateHint': 'Generate key points and prompts for the current slide.',
    'presentationsPage.notes.poweredBy': 'Powered by Gemini AI',
    'presentationsPage.notes.error.generic': '<p>An error occurred while generating notes. Please check your API key or try again later.</p>',
    'presentationsPage.notes.error.noApiKey': '<p>API key is not configured. AI features are unavailable.</p>',
    'presentationsPage.notes.error.noContent': '<p>Could not analyze the content of this slide.</p>',
    
    'contactModal.title': 'Contact Us',
    'contactModal.close': 'Close contact form',
    'contactModal.success.title': 'Thank you for your inquiry!',
    'contactModal.success.body': 'We have received your message and will get back to you shortly.',
    'contactModal.success.close': 'Close',
    'contactModal.form.name': 'Name',
    'contactModal.form.email': 'Email',
    'contactModal.form.interest': 'Project of Interest',
    'contactModal.form.interest.placeholder': 'Select a project...',
    'contactModal.form.interest.general': 'General Inquiry',
    'contactModal.form.message': 'Message',
    'contactModal.form.submit': 'Send Message',

    'chatbot.title': 'AI Investment Analyst',
    'chatbot.open': 'Open AI Investment Analyst chat',
    'chatbot.close': 'Close chat',
    'chatbot.inputPlaceholder': 'Ask about our technology...',
    'chatbot.initialMessage': 'Hello! I am the investment analyst for AGENTS AI. How can I help you today? Feel free to ask about our projects, financials, or team.',
    'chatbot.starterHint': 'Or try a starter question:',
    'chatbot.starterQuestions.q1': 'What is the total funding amount?',
    'chatbot.starterQuestions.q2': "Summarize the 'Apolo' project.",
    'chatbot.starterQuestions.q3': 'What is the company’s exit strategy?',
    'chatbot.starterQuestions.q4': 'Who are the core team members?',
    'chatbot.error': 'Sorry, I encountered an error. Please try again or use the contact form for help.',
    'chatbot.systemInstruction': "You are a sophisticated AI Investment Analyst for AGENTS AI Limited. Your goal is to provide clear, concise, and helpful answers to potential investors based ONLY on the information provided in the following context. You are professional, knowledgeable, and encouraging. Do not invent any information or make assumptions. If a question cannot be answered from the provided context, politely state that the information is not available in the provided materials and suggest they use the contact form or arrange a meeting for more detailed inquiries. Respond in English. Here is the context about AGENTS AI Limited:\n\n{{context}}",

    'contextPane.title': 'AI Insights',
    'contextPane.close': 'Close insights panel',
    'contextPane.placeholder.title': 'AI Insights Generate Here',
    'contextPane.placeholder.body': 'Click any paragraph on the left to reveal summaries, key terms, and related questions.',
    'contextPane.summary': 'Summary',
    'contextPane.keyTerms': 'Key Terms',
    'contextPane.relatedSlide': 'Related Slide',
    'contextPane.relatedSlide.view': 'View presentation on',
    'contextPane.deepDive': 'Deep Dive',
    'contextPane.error.generic': 'Could not generate contextual information. Please try again.',
    'contextPane.error.noApiKey': 'API key not configured. AI features are unavailable.',
    'contextPane.error.fromApi': 'Failed to generate contextual information from the AI service.',
    
    'interactiveSection.complexContent': 'Complex content placeholder',

    'spinner.loading': 'Loading...',

    'languageSwitcher.label': 'Change language',

    'gemini.speakerNotesPrompt': `You are a professional presentation coach. Based on the following slide content, generate concise and helpful speaker notes for a presenter. Focus on key talking points, potential audience questions, and timing cues. Output in simple HTML format (using <p>, <strong>, and <ul>/<li> tags). Respond in English. Here is the slide content:\n\n"{{slideText}}"`,
    'gemini.contextInfoPrompt': `As an AI Investment Analyst for AGENTS AI Limited, analyze the following paragraph. Look for relevant information within the "Full Context" to provide deeper insights. Respond in English.

Paragraph to Analyze:
"{{paragraph}}"

Full Context:
"{{fullContext}}"

Based on your analysis, provide the following in JSON format:
1.  **summary**: A concise, single-paragraph summary of the paragraph, highlighting its importance to a potential investor.
2.  **keyTerms**: Identify up to 3 key terms or concepts from the text.
3.  **followUpQuestions**: Generate 3 insightful follow-up questions an investor might ask to facilitate a deeper discussion.
`,
    'gemini.contextInfoSchema.summary': 'A concise, single-paragraph summary of the provided text, highlighting its importance to a potential investor. Respond in English.',
    'gemini.contextInfoSchema.keyTerms': 'Identify up to 3 key terms or concepts from the text.',
    'gemini.contextInfoSchema.keyTerms.term': 'The key term. Respond in English.',
    'gemini.contextInfoSchema.keyTerms.definition': 'A concise definition of the term. Respond in English.',
    'gemini.contextInfoSchema.followUpQuestions': 'Generate 3 insightful follow-up questions an investor might ask to facilitate a deeper discussion. Respond in English.',
  },
  es: {
    'mainPage.title': 'AGENTS AI Limited :: Propuesta de Inversión',
    'mainPage.header.title': 'AGENTS AI Limited',
    'mainPage.header.subtitle': 'Inteligencia Unificada, Impulsando el Futuro',
    'mainPage.header.location': 'Londres, Reino Unido',
    'mainPage.header.regNo': 'Nº Reg',
    'mainPage.portfolio.title': 'Portafolio de Proyectos Emblemáticos',
    'mainPage.portfolio.description': 'Haga clic en un proyecto a continuación para ver una presentación interactiva y profundizar en sus detalles técnicos, potencial de mercado y modelo de negocio.',
    'mainPage.portfolio.viewAria': 'Ver presentación de',
    'mainPage.portfolio.viewButton': 'Ver Presentación',
    'mainPage.cta.title': 'Actúe Ahora, Co-cree el Futuro',
    'mainPage.cta.description': 'Le invitamos sinceramente a tener una discusión profunda con nuestro equipo fundador. Puede comenzar chateando con nuestro analista de IA o programar una reunión directamente.',
    'mainPage.cta.chatButton': 'Chatear con Analista de IA',
    'mainPage.cta.meetingButton': 'Programar una Reunión',
    'mainPage.footer.copyright': 'Copyright © 2025 AGENTS AI Limited. Todos los derechos reservados.',
    'mainPage.footer.address': 'Dirección: 123 Tech Avenue, London, EC1V 2NX, Reino Unido | Nº de Registro de la Empresa: 13374242',
    'mainPage.footer.confidentialityTitle': 'Aviso de Confidencialidad:',
    'mainPage.footer.confidentialityText': 'Este documento contiene información confidencial de AGENTS AI Limited y está destinado únicamente a los destinatarios designados. Queda estrictamente prohibida cualquier reproducción, distribución o divulgación de cualquier parte de este documento sin el consentimiento previo por escrito de la empresa.',

    'presentationsPage.title': 'Portafolio de Proyectos - AGENTS AI Limited',
    'presentationsPage.header.main': 'AGENTS AI Limited',
    'presentationsPage.header.sub': 'Portafolio de Proyectos',
    'presentationsPage.header.back': 'Volver al Inicio',
    'presentationsPage.toggleFullscreen': 'Pantalla Completa',
    'presentationsPage.viewer.ariaLabel': 'Mostrando la presentación de {{project}}',
    'presentationsPage.nav.prev': 'Diapositiva Anterior',
    'presentationsPage.nav.next': 'Siguiente Diapositiva',
    'presentationsPage.nav.grid': 'Vista de Rejilla',
    'presentationsPage.nav.notes': 'Notas del Orador',
    'presentationsPage.grid.title': 'Navegación de Diapositivas',
    'presentationsPage.grid.close': 'Cerrar Vista de Rejilla',
    'presentationsPage.grid.goto': 'Ir a la diapositiva',
    'presentationsPage.notes.title': 'Notas del Orador',
    'presentationsPage.notes.close': 'Cerrar Panel de Notas',
    'presentationsPage.notes.generating': 'Generando notas...',
    'presentationsPage.notes.analyzing': 'La IA está analizando la diapositiva',
    'presentationsPage.notes.generateButton': '✨ Generar Notas con IA',
    'presentationsPage.notes.generateHint': 'Genere puntos clave y sugerencias para la diapositiva actual.',
    'presentationsPage.notes.poweredBy': 'Potenciado por Gemini AI',
    'presentationsPage.notes.error.generic': '<p>Ocurrió un error al generar las notas. Por favor, verifique su clave de API o intente de nuevo más tarde.</p>',
    'presentationsPage.notes.error.noApiKey': '<p>La clave de API no está configurada. Las funciones de IA no están disponibles.</p>',
    'presentationsPage.notes.error.noContent': '<p>No se pudo analizar el contenido de esta diapositiva.</p>',

    'contactModal.title': 'Contáctenos',
    'contactModal.close': 'Cerrar formulario de contacto',
    'contactModal.success.title': '¡Gracias por su consulta!',
    'contactModal.success.body': 'Hemos recibido su mensaje y nos pondremos en contacto con usted en breve.',
    'contactModal.success.close': 'Cerrar',
    'contactModal.form.name': 'Nombre',
    'contactModal.form.email': 'Correo electrónico',
    'contactModal.form.interest': 'Proyecto de Interés',
    'contactModal.form.interest.placeholder': 'Seleccione un proyecto...',
    'contactModal.form.interest.general': 'Consulta General',
    'contactModal.form.message': 'Mensaje',
    'contactModal.form.submit': 'Enviar Mensaje',
    
    'chatbot.title': 'Analista de Inversiones de IA',
    'chatbot.open': 'Abrir chat del Analista de Inversiones de IA',
    'chatbot.close': 'Cerrar chat',
    'chatbot.inputPlaceholder': 'Pregunte sobre nuestra tecnología...',
    'chatbot.initialMessage': '¡Hola! Soy el analista de inversiones de AGENTS AI. ¿Cómo puedo ayudarle hoy? No dude en preguntar sobre nuestros proyectos, finanzas o equipo.',
    'chatbot.starterHint': 'O intente una pregunta de inicio:',
    'chatbot.starterQuestions.q1': '¿Cuál es el monto total de financiamiento?',
    'chatbot.starterQuestions.q2': 'Resuma el proyecto "Apolo".',
    'chatbot.starterQuestions.q3': '¿Cuál es la estrategia de salida de la empresa?',
    'chatbot.starterQuestions.q4': '¿Quiénes son los miembros del equipo central?',
    'chatbot.error': 'Lo siento, encontré un error. Por favor, intente de nuevo o use el formulario de contacto para obtener ayuda.',
    'chatbot.systemInstruction': "Usted es un sofisticado Analista de Inversiones de IA para AGENTS AI Limited. Su objetivo es proporcionar respuestas claras, concisas y útiles a los posibles inversores basándose ÚNICAMENTE en la información proporcionada en el siguiente contexto. Sea profesional, conocedor y alentador. No invente ninguna información ni haga suposiciones. Si una pregunta no puede ser respondida con el contexto proporcionado, indique cortésmente que la información no está disponible en los materiales proporcionados y sugiera que utilicen el formulario de contacto o concierten una reunión para consultas más detalladas. Responda en español. Aquí está el contexto sobre AGENTS AI Limited:\n\n{{context}}",

    'contextPane.title': 'Perspectivas de IA',
    'contextPane.close': 'Cerrar panel de perspectivas',
    'contextPane.placeholder.title': 'Las Perspectivas de IA se Generan Aquí',
    'contextPane.placeholder.body': 'Haga clic en cualquier párrafo a la izquierda para revelar resúmenes, términos clave y preguntas relacionadas.',
    'contextPane.summary': 'Resumen',
    'contextPane.keyTerms': 'Términos Clave',
    'contextPane.relatedSlide': 'Diapositiva Relacionada',
    'contextPane.relatedSlide.view': 'Ver presentación sobre',
    'contextPane.deepDive': 'Análisis Profundo',
    'contextPane.error.generic': 'No se pudo generar información contextual. Por favor, inténtelo de nuevo.',
    'contextPane.error.noApiKey': 'Clave de API no configurada. Las funciones de IA no están disponibles.',
    'contextPane.error.fromApi': 'No se pudo generar información contextual desde el servicio de IA.',

    'interactiveSection.complexContent': 'Marcador de posición de contenido complejo',

    'spinner.loading': 'Cargando...',

    'languageSwitcher.label': 'Cambiar idioma',

    'gemini.speakerNotesPrompt': `Eres un entrenador de presentaciones profesional. Basado en el siguiente contenido de la diapositiva, genera notas de orador concisas y útiles para un presentador. Concéntrate en los puntos clave, posibles preguntas de la audiencia y pistas de tiempo. La salida debe ser en formato HTML simple (usando etiquetas <p>, <strong> y <ul>/<li>). Responde en español. Aquí está el contenido de la diapositiva:\n\n"{{slideText}}"`,
    'gemini.contextInfoPrompt': `Como Analista de Inversiones de IA para AGENTS AI Limited, analiza el siguiente párrafo. Busca información relevante dentro del "Contexto Completo" para proporcionar perspectivas más profundas. Responde en español.

Párrafo a Analizar:
"{{paragraph}}"

Contexto Completo:
"{{fullContext}}"

Basado en tu análisis, proporciona lo siguiente en formato JSON:
1.  **summary**: Un resumen conciso de un solo párrafo del párrafo, destacando su importancia para un inversor potencial.
2.  **keyTerms**: Identifica hasta 3 términos o conceptos clave del texto.
3.  **followUpQuestions**: Genera 3 preguntas de seguimiento perspicaces que un inversor podría hacer para facilitar una discusión más profunda.
`,
    'gemini.contextInfoSchema.summary': 'Un resumen conciso de un solo párrafo del texto proporcionado, destacando su importancia para un inversor potencial. Responde en español.',
    'gemini.contextInfoSchema.keyTerms': 'Identifica hasta 3 términos o conceptos clave del texto.',
    'gemini.contextInfoSchema.keyTerms.term': 'El término clave. Responde en español.',
    'gemini.contextInfoSchema.keyTerms.definition': 'Una definición concisa del término. Responde en español.',
    'gemini.contextInfoSchema.followUpQuestions': 'Genera 3 preguntas de seguimiento perspicaces que un inversor podría hacer para facilitar una discusión más profunda. Responde en español.',
  },
  zh: {
    'mainPage.title': 'AGENTS AI Limited :: 投资建议书',
    'mainPage.header.title': 'AGENTS AI Limited',
    'mainPage.header.subtitle': '统一智能 · 驱动未来 | Unified Intelligence, Driving the Future',
    'mainPage.header.location': '英国伦敦',
    'mainPage.header.regNo': '注册号',
    'mainPage.portfolio.title': '旗舰项目组合',
    'mainPage.portfolio.description': '点击下方项目，查看每个项目的交互式演示文稿，深入了解其技术细节、市场潜力与商业模式。',
    'mainPage.portfolio.viewAria': '查看演示文稿',
    'mainPage.portfolio.viewButton': '查看演示',
    'mainPage.cta.title': '即刻行动，共创未来',
    'mainPage.cta.description': '我们诚挚邀请您与我们的创始人团队进行深度交流。您可以先与我们的AI分析师对话，或直接预约会议。',
    'mainPage.cta.chatButton': '与AI分析师对话',
    'mainPage.cta.meetingButton': '安排会议',
    'mainPage.footer.copyright': '版权所有 © 2025 AGENTS AI Limited. 保留所有权利。',
    'mainPage.footer.address': '地址: 123 Tech Avenue, London, EC1V 2NX, United Kingdom | 公司注册号: 13374242',
    'mainPage.footer.confidentialityTitle': '保密声明:',
    'mainPage.footer.confidentialityText': '本文件包含 AGENTS AI Limited 的机密信息，仅供指定收件人参考。未经本公司事先书面同意，严禁对本文件的任何部分进行复制、分发或披露。',

    'presentationsPage.title': '项目组合 - AGENTS AI Limited',
    'presentationsPage.header.main': 'AGENTS AI Limited',
    'presentationsPage.header.sub': '项目组合',
    'presentationsPage.header.back': '返回主页',
    'presentationsPage.toggleFullscreen': '切换全屏',
    'presentationsPage.viewer.ariaLabel': '正在展示 {{project}} 的演示文稿',
    'presentationsPage.nav.prev': '上一张幻灯片',
    'presentationsPage.nav.next': '下一张幻灯片',
    'presentationsPage.nav.grid': '网格视图',
    'presentationsPage.nav.notes': '演讲者备注',
    'presentationsPage.grid.title': '幻灯片导航',
    'presentationsPage.grid.close': '关闭网格视图',
    'presentationsPage.grid.goto': '跳转到幻灯片',
    'presentationsPage.notes.title': '演讲者备注',
    'presentationsPage.notes.close': '关闭备注面板',
    'presentationsPage.notes.generating': '正在生成备注...',
    'presentationsPage.notes.analyzing': 'AI 正在分析幻灯片',
    'presentationsPage.notes.generateButton': '✨ 生成 AI 备注',
    'presentationsPage.notes.generateHint': '为当前幻灯片生成要点和提示。',
    'presentationsPage.notes.poweredBy': '由 Gemini AI 强力驱动',
    'presentationsPage.notes.error.generic': '<p>生成备注时出错。请检查您的 API 密钥或稍后重试。</p>',
    'presentationsPage.notes.error.noApiKey': '<p>API 密钥未配置。无法使用 AI 功能。</p>',
    'presentationsPage.notes.error.noContent': '<p>无法分析此幻灯片的内容。</p>',

    'contactModal.title': '联系我们',
    'contactModal.close': '关闭联系表单',
    'contactModal.success.title': '感谢您的联系！',
    'contactModal.success.body': '我们已收到您的消息，并将尽快与您联系。',
    'contactModal.success.close': '关闭',
    'contactModal.form.name': '姓名',
    'contactModal.form.email': '邮箱',
    'contactModal.form.interest': '感兴趣的项目',
    'contactModal.form.interest.placeholder': '选择一个项目...',
    'contactModal.form.interest.general': '一般咨询',
    'contactModal.form.message': '消息',
    'contactModal.form.submit': '发送消息',

    'chatbot.title': 'AI 投资分析师',
    'chatbot.open': '打开 AI 投资分析师聊天',
    'chatbot.close': '关闭聊天',
    'chatbot.inputPlaceholder': '询问关于我们技术的问题...',
    'chatbot.initialMessage': '您好！我是 AGENTS AI 的投资分析师。今天我能为您提供什么帮助？欢迎随时询问关于我们的项目、财务或团队的问题。',
    'chatbot.starterHint': '或尝试一个起始问题：',
    'chatbot.starterQuestions.q1': '融资总额是多少？',
    'chatbot.starterQuestions.q2': '总结一下 "Apolo" 项目。',
    'chatbot.starterQuestions.q3': '公司的退出策略是什么？',
    'chatbot.starterQuestions.q4': '核心团队有哪些成员？',
    'chatbot.error': '抱歉，我遇到了一个错误。请重试或使用联系表单寻求帮助。',
    'chatbot.systemInstruction': "你是一位为AGENTS AI Limited服务的资深AI投资分析师。你的目标是基于以下提供的上下文，为潜在投资者提供清晰、简洁且有帮助的回答。你必须保持专业、知识渊博和鼓励的态度。不要捏造任何信息或做出假设。如果一个问题无法从提供的上下文中回答，请礼貌地说明这些信息在所提供的材料中不可用，并建议他们使用联系表格或安排会议以获取更详细的查询。请用中文回答。以下是关于AGENTS AI Limited的上下文信息：\n\n{{context}}",

    'contextPane.title': 'AI 见解',
    'contextPane.close': '关闭见解面板',
    'contextPane.placeholder.title': 'AI 见解在此生成',
    'contextPane.placeholder.body': '点击左侧任意段落以揭示摘要、关键术语和相关问题。',
    'contextPane.summary': '摘要',
    'contextPane.keyTerms': '关键术语',
    'contextPane.relatedSlide': '相关幻灯片',
    'contextPane.relatedSlide.view': '查看关于',
    'contextPane.deepDive': '深入探讨',
    'contextPane.error.generic': '无法生成上下文信息。请重试。',
    'contextPane.error.noApiKey': 'API 密钥未配置。无法使用 AI 功能。',
    'contextPane.error.fromApi': '无法从AI服务生成上下文信息。',

    'interactiveSection.complexContent': '复杂内容占位符',

    'spinner.loading': '正在加载...',

    'languageSwitcher.label': '切换语言',

    'gemini.speakerNotesPrompt': `你是一名专业的演讲教练。根据以下幻灯片内容，为演讲者生成简洁有用的演讲者备注。专注于关键谈话要点、潜在的观众问题和时间提示。以简单的HTML格式（使用<p>, <strong>和<ul>/<li>标签）输出。语言为中文。幻灯片内容如下：\n\n"{{slideText}}"`,
    'gemini.contextInfoPrompt': `作为 AGENTS AI Limited 的 AI 投资分析师，请分析以下段落。在“完整上下文”中寻找相关信息，以提供更深入的见解。请用中文回答。

要分析的段落：
"{{paragraph}}"

完整上下文：
"{{fullContext}}"

根据分析，请以JSON格式提供以下信息：
1.  **summary**: 对该段落的简洁摘要。
2.  **keyTerms**: 最多3个关键术语及其定义。
3.  **followUpQuestions**: 投资者可能提出的3个相关问题。
`,
    'gemini.contextInfoSchema.summary': '对提供的文本进行简洁的单段摘要，突出其对潜在投资者的重要性。语言为中文。',
    'gemini.contextInfoSchema.keyTerms': '从文本中识别出最多3个关键术语或概念。',
    'gemini.contextInfoSchema.keyTerms.term': '关键术语。语言为中文。',
    'gemini.contextInfoSchema.keyTerms.definition': '对该术语的简明定义。语言为中文。',
    'gemini.contextInfoSchema.followUpQuestions': '生成3个投资者可能会问的富有洞察力的后续问题，以促进更深入的讨论。语言为中文。',
  }
};

export type Language = keyof typeof translations;

type TranslationContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, replacements?: Record<string, string>) => string;
};

const LanguageContext = createContext<TranslationContextType | undefined>(undefined);

const getInitialLanguage = (): Language => {
    try {
        const savedLang = localStorage.getItem('language') as Language;
        if (savedLang && translations[savedLang]) {
            return savedLang;
        }
    } catch (e) {
        console.warn('Could not access localStorage for language setting.');
    }
    
    if (typeof navigator !== 'undefined') {
        const preferredLangs = navigator.languages || [navigator.language];
        for (const lang of preferredLangs) {
            const shortCode = lang.split('-')[0] as Language;
            if (translations[shortCode]) {
                return shortCode;
            }
        }
    }

    return 'en';
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    try {
        localStorage.setItem('language', lang);
    } catch (e) {
        console.warn('Could not save language to localStorage.');
    }
    setLanguageState(lang);
  }, []);

  const t = useCallback((key: string, replacements?: Record<string, string>): string => {
    let translation = translations[language]?.[key] || translations['en'][key] || key;
    if (replacements) {
        Object.keys(replacements).forEach(placeholder => {
            translation = translation.replace(`{{${placeholder}}}`, replacements[placeholder]);
        });
    }
    return translation;
  }, [language]);
  
  const contextValue = useMemo(() => ({
    language,
    setLanguage,
    t
  }), [language, setLanguage, t]);

  return React.createElement(
    LanguageContext.Provider,
    { value: contextValue },
    children
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
