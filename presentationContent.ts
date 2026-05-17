import { APOLO_SLIDES_EN, APOLO_SLIDES_ES, APOLO_SLIDES_ZH } from './presentations/apolo';
import { AUTOCLIENT_SLIDES_EN, AUTOCLIENT_SLIDES_ES, AUTOCLIENT_SLIDES_ZH } from './presentations/autoclient';
import { AUTOFOOTBALL_SLIDES_EN, AUTOFOOTBALL_SLIDES_ES, AUTOFOOTBALL_SLIDES_ZH } from './presentations/autofootball';
import type { Language } from './hooks/useTranslation';
import { RADIOLOGY_AI_SLIDES_EN, RADIOLOGY_AI_SLIDES_ES, RADIOLOGY_AI_SLIDES_ZH } from './presentations/radiology-ai';
import type { SlideDeck } from './presentations/common';

const presentationsByLanguage: Record<Language, SlideDeck[]> = {
  en: [
    { title: 'Apolo (Medical AI)', slides: APOLO_SLIDES_EN },
    { title: 'AutoClient.ai (Sales AI)', slides: AUTOCLIENT_SLIDES_EN },
    { title: 'RadiologyAI (Radiology AI)', slides: RADIOLOGY_AI_SLIDES_EN },
    { title: 'AutoFootball.ai (Football AI)', slides: AUTOFOOTBALL_SLIDES_EN },
  ],
  es: [
    { title: 'Apolo (IA Médica)', slides: APOLO_SLIDES_ES },
    { title: 'AutoClient.ai (IA de Ventas)', slides: AUTOCLIENT_SLIDES_ES },
    { title: 'RadiologyAI (IA de Radiología)', slides: RADIOLOGY_AI_SLIDES_ES },
    { title: 'AutoFootball.ai (IA de Fútbol)', slides: AUTOFOOTBALL_SLIDES_ES },
  ],
  zh: [
    { title: 'Apolo (医疗AI)', slides: APOLO_SLIDES_ZH },
    { title: 'AutoClient.ai (销售AI)', slides: AUTOCLIENT_SLIDES_ZH },
    { title: 'RadiologyAI (放射科AI)', slides: RADIOLOGY_AI_SLIDES_ZH },
    { title: 'AutoFootball.ai (足球AI)', slides: AUTOFOOTBALL_SLIDES_ZH },
  ],
};

export const getPresentationDecks = (lang: Language): SlideDeck[] =>
  presentationsByLanguage[lang] || presentationsByLanguage.en;
