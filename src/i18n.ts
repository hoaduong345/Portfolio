import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import English translations
import commonEN from './locales/en/common.json';
import skillsEN from './locales/en/skills.json';
import heroEN from './locales/en/hero.json';
import aboutEN from './locales/en/about.json';
import projectsEN from './locales/en/projects.json';
import experienceEN from './locales/en/experience.json';
import motivationEN from './locales/en/motivation.json';

// Import Vietnamese translations
import commonVI from './locales/vi/common.json';
import skillsVI from './locales/vi/skills.json';
import heroVI from './locales/vi/hero.json';
import aboutVI from './locales/vi/about.json';
import projectsVI from './locales/vi/projects.json';
import experienceVI from './locales/vi/experience.json';
import motivationVI from './locales/vi/motivation.json';

// the translations
const resources = {
  en: {
    common: commonEN,
    skills: skillsEN,
    hero: heroEN,
    about: aboutEN,
    projects: projectsEN,
    experience: experienceEN,
    motivation: motivationEN
  },
  vi: {
    common: commonVI,
    skills: skillsVI,
    hero: heroVI,
    about: aboutVI,
    projects: projectsVI,
    experience: experienceVI,
    motivation: motivationVI
  }
};

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next
  .use(initReactI18next)
  // init i18next
  .init({
    resources,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',

    // have a common namespace used around the full app
    ns: ['common', 'skills', 'hero', 'about', 'projects', 'experience', 'motivation'],
    defaultNS: 'common',

    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  });

export default i18n;