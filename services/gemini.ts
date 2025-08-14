import { GoogleGenAI, Type } from "@google/genai";
import { Language, translations } from '../hooks/useTranslation';

// This is not a component, so we can't use the hook.
// We'll create a manual `t` function.
const getT = (language: Language) => (key: string, replacements?: Record<string, string>): string => {
    let translation = translations[language]?.[key] || translations['en'][key] || key;
    if (replacements) {
        Object.keys(replacements).forEach(placeholder => {
            translation = translation.replace(`{{${placeholder}}}`, replacements[placeholder]);
        });
    }
    return translation;
};

// This file assumes that process.env.API_KEY is properly configured in the environment.
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY is not set. AI features will be disabled.");
}

const ai = new GoogleGenAI({apiKey: API_KEY!});

export interface ContextualInfo {
    summary: string;
    keyTerms: { term: string; definition: string }[];
    followUpQuestions: string[];
    relatedSlide?: {
        deckIndex: number;
        title: string;
    }
}


function extractTextFromHtml(html: string): string {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const body = doc.body;
    body.querySelectorAll('script, style').forEach(el => el.remove());
    return body.textContent?.replace(/\s+/g, ' ').trim() || '';
  } catch (error) {
    console.error("Could not parse slide HTML for text extraction", error);
    return '';
  }
}

function formatNotes(text: string): string {
    return text
        .replace(/^\s*# (.*$)/gim, '<h3>$1</h3>')
        .replace(/^\s*\*\*([^\*]+)\*\*/gim, '<strong>$1</strong>')
        .replace(/^\s*\* (.*$)/gim, '<li>$1</li>')
        .replace(/(\r\n|\n|\r)/gm, '<br>')
        .replace(/(<br\s*\/?>\s*){2,}/gi, '</p><p>')
        .replace(/<\/li><br\s*\/?>/gi, '</li>')
        .replace(/^(?!<(?:h3|li|p|strong)>)(.*)$/gim, '<p>$1</p>')
        .replace(/<p><\/p>/g,'')
        .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
}

export async function generateSpeakerNotes(slideHtml: string, language: Language): Promise<string> {
    const t = getT(language);

    if (!API_KEY) {
      return Promise.resolve(t('presentationsPage.notes.error.noApiKey'));
    }
    const slideText = extractTextFromHtml(slideHtml);
    if (!slideText) {
        return Promise.resolve(t('presentationsPage.notes.error.noContent'));
    }

    const prompt = t('gemini.speakerNotesPrompt', { slideText });

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });

        const notesText = response.text;
        return formatNotes(notesText);
    } catch (error) {
        console.error("Error generating speaker notes:", error);
        return Promise.resolve(t('presentationsPage.notes.error.generic'));
    }
}

export async function generateContextualInfo(paragraph: string, fullContext: string, language: Language): Promise<ContextualInfo> {
    const t = getT(language);

    if (!API_KEY) {
        throw new Error(t('contextPane.error.noApiKey'));
    }

    const contextSchema = {
        type: Type.OBJECT,
        properties: {
            summary: {
                type: Type.STRING,
                description: t('gemini.contextInfoSchema.summary')
            },
            keyTerms: {
                type: Type.ARRAY,
                description: t('gemini.contextInfoSchema.keyTerms'),
                items: {
                    type: Type.OBJECT,
                    properties: {
                        term: { type: Type.STRING, description: t('gemini.contextInfoSchema.keyTerms.term') },
                        definition: { type: Type.STRING, description: t('gemini.contextInfoSchema.keyTerms.definition') }
                    },
                    required: ["term", "definition"]
                }
            },
            followUpQuestions: {
                type: Type.ARRAY,
                description: t('gemini.contextInfoSchema.followUpQuestions'),
                items: {
                    type: Type.STRING
                }
            }
        },
        required: ["summary", "keyTerms", "followUpQuestions"]
    };

    const prompt = t('gemini.contextInfoPrompt', { paragraph, fullContext });

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: contextSchema,
            },
        });
        
        const jsonText = response.text.trim();
        const parsedJson = JSON.parse(jsonText);

        if (parsedJson.summary && Array.isArray(parsedJson.keyTerms) && Array.isArray(parsedJson.followUpQuestions)) {
            return parsedJson as ContextualInfo;
        } else {
             throw new Error("Parsed JSON does not match the expected schema.");
        }

    } catch (error) {
        console.error("Error generating contextual info:", error);
        throw new Error(t('contextPane.error.fromApi'));
    }
}
