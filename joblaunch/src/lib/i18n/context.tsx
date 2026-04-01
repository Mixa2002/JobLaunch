'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react';
import { translations, type Language, type TranslationKey } from './translations';

interface I18nContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = 'joblaunch-language';
const DEFAULT_LANGUAGE: Language = 'sr';

export function I18nProvider({ children }: { children: ReactNode }) {
  // Initialize with the default language so SSR and first client render match.
  // This avoids returning null (blank flash) while still preventing hydration mismatch.
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);

  useEffect(() => {
    // After mount, read the stored preference and update if different.
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'sr') {
      setLanguageState(stored);
    }
  }, []);

  // Keep the <html lang> attribute in sync with the current language.
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  }, []);

  const t = useCallback(
    (key: TranslationKey): string => {
      return translations[key]?.[language] ?? key;
    },
    [language]
  );

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
