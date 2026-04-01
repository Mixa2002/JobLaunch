'use client';

import { useState, useCallback } from 'react';
import { useI18n } from '@/lib/i18n';
import { createEmptyProfile } from '@/lib/types/profile';
import type { UserProfileFormState } from '@/lib/types/profile';
import type { JobListing, TailoredCV } from '@/lib/types/job';
import { Header } from '@/components/layout/Header';
import { StepProgress } from '@/components/StepProgress';
import type { TranslationKey } from '@/lib/i18n';

const TOTAL_STEPS = 5;

const STEP_KEYS: TranslationKey[] = [
  'stepUpload',
  'stepProfile',
  'stepSearch',
  'stepResults',
  'stepTailored',
];

const STEP_DESCRIPTIONS: Record<number, { sr: string; en: string }> = {
  0: { sr: 'Otpremi svoj CV i pustite nas da ga analiziramo', en: 'Upload your CV and let us analyze it' },
  1: { sr: 'Proveri informacije koje smo izvukli', en: 'Review the information we extracted' },
  2: { sr: 'Podesi filtere pretrage poslova', en: 'Configure your job search filters' },
  3: { sr: 'Pregledaj poslove koji odgovaraju tvom profilu', en: 'Browse jobs matching your profile' },
  4: { sr: 'Preuzmi prilagodene CV-jeve', en: 'Download your tailored CVs' },
};

export default function Home() {
  const { t, language } = useI18n();

  const [currentStep, setCurrentStep] = useState(0);
  const [highestCompletedStep, setHighestCompletedStep] = useState(-1);
  const [profile, setProfile] = useState<UserProfileFormState>(createEmptyProfile);
  const [jobResults, setJobResults] = useState<JobListing[]>([]);
  const [selectedJobs, setSelectedJobs] = useState<JobListing[]>([]);
  const [tailoredCVs, setTailoredCVs] = useState<TailoredCV[]>([]);

  const goToStep = useCallback((step: number) => {
    if (step <= highestCompletedStep + 1 && step >= 0 && step < TOTAL_STEPS) {
      setCurrentStep(step);
    }
  }, [highestCompletedStep]);

  const goNext = useCallback(() => {
    if (currentStep < TOTAL_STEPS - 1) {
      setHighestCompletedStep((prev) => Math.max(prev, currentStep));
      setCurrentStep((prev) => prev + 1);
    }
  }, [currentStep]);

  const goBack = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep]);

  return (
    <div className="flex flex-col flex-1 min-h-full">
      <Header />

      <main className="flex-1 mx-auto w-full max-w-5xl px-4 sm:px-6 py-4 sm:py-6">
        {/* Tagline — warm, encouraging context for nervous students */}
        {currentStep === 0 && (
          <p className="text-center text-sm text-muted mb-2">
            {t('tagline')}
          </p>
        )}

        {/* Progress indicator */}
        <StepProgress currentStep={currentStep} onStepClick={goToStep} />

        {/* Step content area */}
        <div className="mt-4 sm:mt-6">
          {/* Step header */}
          <div className="mb-6 text-center">
            <h1 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
              {t(STEP_KEYS[currentStep])}
            </h1>
            <p className="mt-2 text-base text-muted">
              {STEP_DESCRIPTIONS[currentStep]?.[language] ?? ''}
            </p>
          </div>

          {/* Placeholder step content */}
          <div className="rounded-2xl border border-border bg-white p-6 sm:p-10 min-h-[300px] flex flex-col items-center justify-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-electric/10 text-electric mb-4">
              <span className="text-2xl font-heading font-bold">{currentStep + 1}</span>
            </div>
            <p className="text-base text-muted max-w-md">
              {language === 'sr'
                ? 'Sadrzaj ovog koraka bice uskoro dostupan.'
                : 'This step\'s content is coming soon.'}
            </p>
          </div>

          {/* Navigation buttons */}
          <div className="mt-6 flex items-center justify-between">
            <button
              type="button"
              onClick={goBack}
              disabled={currentStep === 0}
              className={`
                flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all min-h-[44px]
                ${currentStep === 0
                  ? 'invisible'
                  : 'border border-border text-navy hover:bg-border-light active:scale-[0.98]'
                }
              `}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              {t('back')}
            </button>

            <button
              type="button"
              onClick={goNext}
              disabled={currentStep === TOTAL_STEPS - 1}
              className={`
                flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-all min-h-[44px]
                ${currentStep === TOTAL_STEPS - 1
                  ? 'invisible'
                  : 'bg-electric text-white shadow-md shadow-electric/25 hover:bg-electric-dark active:scale-[0.98]'
                }
              `}
            >
              {t('continue')}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

          {/* Demo mode banner */}
          <p className="mt-8 text-center text-xs text-muted">
            {t('demoModeBanner')}
          </p>
        </div>
      </main>
    </div>
  );
}
