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
      className="flex items-center gap-1.5 rounded-lg border border-border px-3.5 py-2.5 text-sm font-medium transition-colors hover:bg-border-light min-h-[44px] min-w-[44px]"
      aria-label={language === 'sr' ? 'Switch to English' : 'Prebaci na srpski'}
    >
      <span aria-hidden="true" className={language === 'sr' ? 'font-bold text-navy' : 'text-muted'}>SR</span>
      <span aria-hidden="true" className="text-border">|</span>
      <span aria-hidden="true" className={language === 'en' ? 'font-bold text-navy' : 'text-muted'}>EN</span>
    </button>
  );
}
