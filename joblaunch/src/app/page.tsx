'use client';

import { useI18n } from '@/lib/i18n';
import { LanguageToggle } from '@/components/LanguageToggle';

export default function Home() {
  const { t } = useI18n();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-8 py-32 px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            {t('appName')}
          </h1>
          <p className="text-lg text-gray-600">{t('tagline')}</p>
        </div>
        <LanguageToggle />
        <p className="text-sm text-gray-400">
          {t('demoModeBanner')}
        </p>
      </main>
    </div>
  );
}
