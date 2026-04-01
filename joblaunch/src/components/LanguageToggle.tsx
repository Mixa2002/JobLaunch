'use client';

import { useI18n } from '@/lib/i18n';

export function LanguageToggle() {
  const { language, setLanguage } = useI18n();

  return (
    <button
      type="button"
      role="switch"
      aria-checked={language === 'en'}
      onClick={() => setLanguage(language === 'sr' ? 'en' : 'sr')}
      className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-1.5 text-sm font-medium transition-colors hover:bg-gray-100"
      aria-label={language === 'sr' ? 'Switch to English' : 'Prebaci na srpski'}
    >
      <span aria-hidden="true" className={language === 'sr' ? 'font-bold' : 'text-gray-400'}>SR</span>
      <span aria-hidden="true" className="text-gray-300">/</span>
      <span aria-hidden="true" className={language === 'en' ? 'font-bold' : 'text-gray-400'}>EN</span>
    </button>
  );
}
