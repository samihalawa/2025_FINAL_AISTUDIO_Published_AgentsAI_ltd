import React, { createContext, useState, useContext, useEffect, useCallback, ReactNode, useMemo } from 'react';

export const translations = {
  en: {
    'mainPage.title': 'AGENTS AI Limited :: AI Product Portfolio',
    'mainPage.header.title': 'AGENTS AI Limited',
    'mainPage.header.subtitle': 'A London AI company building practical product lines for healthcare, revenue operations, and sports intelligence.',
    'mainPage.header.kicker': '2026 portfolio snapshot',
    'mainPage.header.portfolioButton': 'View portfolio',
    'mainPage.header.contactButton': 'Contact AGENTS AI',
    'mainPage.header.location': 'London, United Kingdom',
    'mainPage.header.regNo': 'Reg. No',
    'mainPage.header.tel': 'Tel',
    'mainPage.header.email': 'Email',
    'mainPage.portfolio.title': 'Active Portfolio',
    'mainPage.portfolio.description': 'Scan the current product lines, then open the deeper presentation deck for the product that matches your use case.',
    'mainPage.portfolio.viewAria': 'View presentation for',
    'mainPage.portfolio.viewButton': 'Open Deck',
    'mainPage.portfolio.focusLabel': 'Focus',
    'mainPage.portfolio.nextLabel': 'Next',
    'mainPage.cta.title': 'Start the Right Conversation',
    'mainPage.cta.description': 'Use the contact form to prepare a direct email about a product, partnership, or portfolio question.',
    'mainPage.cta.chatButton': 'Chat with AI Analyst',
    'mainPage.cta.meetingButton': 'Prepare Email',
    'mainPage.footer.copyright': 'Copyright © 2026 AGENTS AI Limited. All rights reserved.',
    'mainPage.footer.address': 'Registered office: 27 Old Gloucester Street, London WC1N 3AX, United Kingdom',
    'mainPage.footer.contact': 'Tel: +44 7883306011 | Email: info@agentsai.ltd',
    'mainPage.footer.legal': 'Registered in England and Wales as AGENTS AI Limited (Reg. No: 16570822). Associated entity: PIME AI LTD.',
    'mainPage.footer.confidentialityTitle': 'Confidentiality Notice:',
    'mainPage.footer.confidentialityText': 'This site summarizes the current AGENTS AI Limited product portfolio and links to supporting presentation material.',
    'mainPage.newsletter.title': 'Get Portfolio Updates',
    'mainPage.newsletter.description': 'Receive concise AGENTS AI product and portfolio updates.',

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
    'contactModal.success.title': 'Email draft prepared',
    'contactModal.success.body': 'Your mail app should now show a prepared message to info@agentsai.ltd.',
    'contactModal.success.close': 'Close',
    'contactModal.form.name': 'Name',
    'contactModal.form.email': 'Email',
    'contactModal.form.interest': 'Project of Interest',
    'contactModal.form.interest.placeholder': 'Select a project...',
    'contactModal.form.interest.general': 'General Inquiry',
    'contactModal.form.message': 'Message',
    'contactModal.form.submit': 'Prepare Email',

    'chatbot.title': 'AI Portfolio Assistant',
    'chatbot.open': 'Open AI Portfolio Assistant chat',
    'chatbot.close': 'Close chat',
    'chatbot.inputPlaceholder': 'Ask about our technology...',
    'chatbot.initialMessage': 'Hello. I can help you understand the current AGENTS AI product portfolio, decks, and contact options.',
    'chatbot.starterHint': 'Or try a starter question:',
    'chatbot.starterQuestions.q1': 'Which product should I look at first?',
    'chatbot.starterQuestions.q2': "Summarize the 'Apolo' project.",
    'chatbot.starterQuestions.q3': 'What is the current operating focus?',
    'chatbot.starterQuestions.q4': 'How do I contact the team?',
    'chatbot.error': 'Sorry, I encountered an error. Please try again or use the contact form for help.',
    'chatbot.systemInstruction': "You are a concise AI portfolio assistant for AGENTS AI Limited. Answer only from the provided context about the current product portfolio, decks, and contact options. Do not invent traction, funding, regulatory, or team details. If the context does not answer the question, say the site does not include that detail and suggest using the contact form. Respond in English. Context:\n\n{{context}}",

    'contextPane.title': 'AI Insights',
    'contextPane.close': 'Close insights panel',
    'contextPane.placeholder.title': 'Portfolio Notes',
    'contextPane.placeholder.body': 'Select portfolio text to see a concise explanation.',
    'contextPane.summary': 'Summary',
    'contextPane.keyTerms': 'Key Terms',
    'contextPane.relatedSlide': 'Related Slide',
    'contextPane.relatedSlide.view': 'View presentation on',
    'contextPane.deepDive': 'Deep Dive',
    'contextPane.error.generic': 'Could not generate contextual information. Please try again.',
    'contextPane.error.noApiKey': 'API key not configured. AI features are unavailable.',
    'contextPane.error.fromApi': 'Failed to generate contextual information from the AI service.',

    'interactiveSection.complexContent': 'Portfolio detail',

    'spinner.loading': 'Loading...',

    'languageSwitcher.label': 'Change language',

    'gemini.speakerNotesPrompt': `You are a professional presentation coach. Based on the following slide content, generate concise and helpful speaker notes for a presenter. Focus on key talking points, potential audience questions, and timing cues. Output in simple HTML format (using <p>, <strong>, and <ul>/<li> tags). Respond in English. Here is the slide content:\n\n"{{slideText}}"`,
    'gemini.contextInfoPrompt': `As an AI portfolio assistant for AGENTS AI Limited, analyze the following paragraph. Look for relevant information within the "Full Context" to provide clearer product context. Respond in English.

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
    'mainPage.title': 'AGENTS AI Limited :: Portafolio de Productos IA',
    'mainPage.header.title': 'AGENTS AI Limited',
    'mainPage.header.subtitle': 'Empresa de IA en Londres que construye lineas de producto practicas para salud, operaciones comerciales e inteligencia deportiva.',
    'mainPage.header.kicker': 'Snapshot del portafolio 2026',
    'mainPage.header.portfolioButton': 'Ver portafolio',
    'mainPage.header.contactButton': 'Contactar AGENTS AI',
    'mainPage.header.location': 'Londres, Reino Unido',
    'mainPage.header.regNo': 'Nº Reg',
    'mainPage.header.tel': 'Tel.',
    'mainPage.header.email': 'Correo',
    'mainPage.portfolio.title': 'Portafolio Activo',
    'mainPage.portfolio.description': 'Revise las lineas de producto actuales y abra el deck del producto que coincida con su caso de uso.',
    'mainPage.portfolio.viewAria': 'Ver presentación de',
    'mainPage.portfolio.viewButton': 'Abrir Deck',
    'mainPage.portfolio.focusLabel': 'Foco',
    'mainPage.portfolio.nextLabel': 'Siguiente',
    'mainPage.cta.title': 'Inicie la Conversacion Correcta',
    'mainPage.cta.description': 'Use el formulario para preparar un email directo sobre producto, partnership o una pregunta del portafolio.',
    'mainPage.cta.chatButton': 'Chatear con Analista de IA',
    'mainPage.cta.meetingButton': 'Preparar Email',
    'mainPage.footer.copyright': 'Copyright © 2026 AGENTS AI Limited. Todos los derechos reservados.',
    'mainPage.footer.address': 'Oficina registrada: 27 Old Gloucester Street, Londres WC1N 3AX, Reino Unido',
    'mainPage.footer.contact': 'Tel.: +44 7883306011 | Correo: info@agentsai.ltd',
    'mainPage.footer.legal': 'Registrada en Inglaterra y Gales como AGENTS AI Limited (Nº Reg.: 16570822). Entidad asociada: PIME AI LTD.',
    'mainPage.footer.confidentialityTitle': 'Aviso de Confidencialidad:',
    'mainPage.footer.confidentialityText': 'Este sitio resume el portafolio actual de productos de AGENTS AI Limited y enlaza materiales de presentacion.',
    'mainPage.newsletter.title': 'Reciba Updates del Portafolio',
    'mainPage.newsletter.description': 'Actualizaciones concisas sobre productos y portafolio de AGENTS AI.',

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
    'contactModal.success.title': 'Email preparado',
    'contactModal.success.body': 'Su app de correo deberia mostrar ahora un mensaje preparado para info@agentsai.ltd.',
    'contactModal.success.close': 'Cerrar',
    'contactModal.form.name': 'Nombre',
    'contactModal.form.email': 'Correo electrónico',
    'contactModal.form.interest': 'Proyecto de Interés',
    'contactModal.form.interest.placeholder': 'Seleccione un proyecto...',
    'contactModal.form.interest.general': 'Consulta General',
    'contactModal.form.message': 'Mensaje',
    'contactModal.form.submit': 'Preparar Email',

    'chatbot.title': 'Asistente del Portafolio IA',
    'chatbot.open': 'Abrir chat del asistente del portafolio',
    'chatbot.close': 'Cerrar chat',
    'chatbot.inputPlaceholder': 'Pregunte sobre nuestra tecnología...',
    'chatbot.initialMessage': 'Hola. Puedo ayudarle a entender el portafolio actual de AGENTS AI, sus decks y las opciones de contacto.',
    'chatbot.starterHint': 'O intente una pregunta de inicio:',
    'chatbot.starterQuestions.q1': '¿Qué producto deberia ver primero?',
    'chatbot.starterQuestions.q2': 'Resuma el proyecto "Apolo".',
    'chatbot.starterQuestions.q3': '¿Cuál es el foco operativo actual?',
    'chatbot.starterQuestions.q4': '¿Cómo contacto al equipo?',
    'chatbot.error': 'Lo siento, encontré un error. Por favor, intente de nuevo o use el formulario de contacto para obtener ayuda.',
    'chatbot.systemInstruction': "Usted es un asistente conciso del portafolio de AGENTS AI Limited. Responda solo con el contexto proporcionado sobre el portafolio actual, decks y opciones de contacto. No invente traccion, financiacion, regulacion ni detalles del equipo. Si el contexto no responde, diga que la web no incluye ese detalle y sugiera usar el formulario. Responda en español. Contexto:\n\n{{context}}",

    'contextPane.title': 'Perspectivas de IA',
    'contextPane.close': 'Cerrar panel de perspectivas',
    'contextPane.placeholder.title': 'Notas del Portafolio',
    'contextPane.placeholder.body': 'Seleccione texto del portafolio para ver una explicacion concisa.',
    'contextPane.summary': 'Resumen',
    'contextPane.keyTerms': 'Términos Clave',
    'contextPane.relatedSlide': 'Diapositiva Relacionada',
    'contextPane.relatedSlide.view': 'Ver presentación sobre',
    'contextPane.deepDive': 'Análisis Profundo',
    'contextPane.error.generic': 'No se pudo generar información contextual. Por favor, inténtelo de nuevo.',
    'contextPane.error.noApiKey': 'Clave de API no configurada. Las funciones de IA no están disponibles.',
    'contextPane.error.fromApi': 'No se pudo generar información contextual desde el servicio de IA.',

    'interactiveSection.complexContent': 'Detalle del portafolio',

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
    'mainPage.title': 'AGENTS AI Limited :: AI 产品组合',
    'mainPage.header.title': 'AGENTS AI Limited',
    'mainPage.header.subtitle': '位于伦敦的 AI 公司，构建面向医疗、营收运营和体育情报的实用产品线。',
    'mainPage.header.kicker': '2026 产品组合快照',
    'mainPage.header.portfolioButton': '查看产品组合',
    'mainPage.header.contactButton': '联系 AGENTS AI',
    'mainPage.header.location': '英国伦敦',
    'mainPage.header.regNo': '注册号',
    'mainPage.header.tel': '电话',
    'mainPage.header.email': '邮箱',
    'mainPage.portfolio.title': '活跃产品组合',
    'mainPage.portfolio.description': '先快速浏览当前产品线，再打开与使用场景最匹配的详细演示文稿。',
    'mainPage.portfolio.viewAria': '查看演示文稿',
    'mainPage.portfolio.viewButton': '打开 Deck',
    'mainPage.portfolio.focusLabel': '重点',
    'mainPage.portfolio.nextLabel': '下一步',
    'mainPage.cta.title': '开始正确的对话',
    'mainPage.cta.description': '使用联系表单准备一封关于产品、合作或产品组合问题的直接邮件。',
    'mainPage.cta.chatButton': '与AI分析师对话',
    'mainPage.cta.meetingButton': '准备邮件',
    'mainPage.footer.copyright': '版权所有 © 2026 AGENTS AI Limited. 保留所有权利。',
    'mainPage.footer.address': '注册地址：英国伦敦 Old Gloucester Street 27 号，WC1N 3AX',
    'mainPage.footer.contact': '电话：+44 7883306011 | 邮箱：info@agentsai.ltd',
    'mainPage.footer.legal': '在英格兰和威尔士注册为 AGENTS AI Limited（注册号：16570822）。关联实体：PIME AI LTD。',
    'mainPage.footer.confidentialityTitle': '保密声明:',
    'mainPage.footer.confidentialityText': '本网站概述 AGENTS AI Limited 当前产品组合，并链接相关演示资料。',
    'mainPage.newsletter.title': '获取产品组合更新',
    'mainPage.newsletter.description': '接收简明的 AGENTS AI 产品和组合更新。',

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
    'contactModal.success.title': '邮件草稿已准备',
    'contactModal.success.body': '您的邮件应用现在应显示一封发往 info@agentsai.ltd 的预填邮件。',
    'contactModal.success.close': '关闭',
    'contactModal.form.name': '姓名',
    'contactModal.form.email': '邮箱',
    'contactModal.form.interest': '感兴趣的项目',
    'contactModal.form.interest.placeholder': '选择一个项目...',
    'contactModal.form.interest.general': '一般咨询',
    'contactModal.form.message': '消息',
    'contactModal.form.submit': '准备邮件',

    'chatbot.title': 'AI 产品组合助手',
    'chatbot.open': '打开 AI 产品组合助手',
    'chatbot.close': '关闭聊天',
    'chatbot.inputPlaceholder': '询问关于我们技术的问题...',
    'chatbot.initialMessage': '您好。我可以帮助您了解 AGENTS AI 当前产品组合、演示文稿和联系方式。',
    'chatbot.starterHint': '或尝试一个起始问题：',
    'chatbot.starterQuestions.q1': '我应该先看哪个产品？',
    'chatbot.starterQuestions.q2': '总结一下 "Apolo" 项目。',
    'chatbot.starterQuestions.q3': '当前运营重点是什么？',
    'chatbot.starterQuestions.q4': '如何联系团队？',
    'chatbot.error': '抱歉，我遇到了一个错误。请重试或使用联系表单寻求帮助。',
    'chatbot.systemInstruction': "你是 AGENTS AI Limited 的简洁产品组合助手。只能基于提供的上下文回答当前产品组合、演示文稿和联系方式。不要编造融资、进展、监管或团队细节。如果上下文没有答案，请说明网站未包含该细节，并建议使用联系表单。请用中文回答。上下文：\n\n{{context}}",

    'contextPane.title': 'AI 见解',
    'contextPane.close': '关闭见解面板',
    'contextPane.placeholder.title': '产品组合备注',
    'contextPane.placeholder.body': '选择产品组合文字以查看简明解释。',
    'contextPane.summary': '摘要',
    'contextPane.keyTerms': '关键术语',
    'contextPane.relatedSlide': '相关幻灯片',
    'contextPane.relatedSlide.view': '查看关于',
    'contextPane.deepDive': '深入探讨',
    'contextPane.error.generic': '无法生成上下文信息。请重试。',
    'contextPane.error.noApiKey': 'API 密钥未配置。无法使用 AI 功能。',
    'contextPane.error.fromApi': '无法从AI服务生成上下文信息。',

    'interactiveSection.complexContent': '产品组合详情',

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
