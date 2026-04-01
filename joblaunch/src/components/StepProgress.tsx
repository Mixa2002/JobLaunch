'use client';

import { useI18n } from '@/lib/i18n';
import type { TranslationKey } from '@/lib/i18n';

interface StepProgressProps {
  currentStep: number;
  onStepClick: (step: number) => void;
}

const STEP_KEYS: TranslationKey[] = [
  'stepUpload',
  'stepProfile',
  'stepSearch',
  'stepResults',
  'stepTailored',
];

/** Simple SVG icons for each step. */
function StepIcon({ step, status }: { step: number; status: 'completed' | 'current' | 'upcoming' }) {
  if (status === 'completed') {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    );
  }

  const icons = [
    // Upload
    <svg key="upload" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>,
    // Profile
    <svg key="profile" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>,
    // Search
    <svg key="search" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>,
    // Results
    <svg key="results" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>,
    // Tailored
    <svg key="tailored" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>,
  ];

  return icons[step] ?? null;
}

export function StepProgress({ currentStep, onStepClick }: StepProgressProps) {
  const { t } = useI18n();

  const getStatus = (index: number): 'completed' | 'current' | 'upcoming' => {
    if (index < currentStep) return 'completed';
    if (index === currentStep) return 'current';
    return 'upcoming';
  };

  return (
    <nav aria-label="Progress" className="w-full">
      {/* Mobile view: step counter + current step name with nav */}
      <div className="flex items-center justify-between sm:hidden py-3">
        <button
          type="button"
          onClick={() => onStepClick(currentStep - 1)}
          disabled={currentStep === 0}
          className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
            currentStep === 0
              ? 'text-border cursor-default'
              : 'text-muted hover:bg-border-light hover:text-navy active:scale-95'
          }`}
          aria-label={t(STEP_KEYS[Math.max(0, currentStep - 1)])}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <div className="flex flex-col items-center gap-1">
          <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-electric text-white text-xs font-bold px-1.5">
            {currentStep + 1}/{STEP_KEYS.length}
          </span>
          <span className="font-heading font-semibold text-sm text-navy">
            {t(STEP_KEYS[currentStep])}
          </span>
        </div>
        <button
          type="button"
          onClick={() => onStepClick(currentStep + 1)}
          disabled={currentStep >= STEP_KEYS.length - 1}
          className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
            currentStep >= STEP_KEYS.length - 1
              ? 'text-border cursor-default'
              : 'text-muted hover:bg-border-light hover:text-navy active:scale-95'
          }`}
          aria-label={t(STEP_KEYS[Math.min(STEP_KEYS.length - 1, currentStep + 1)])}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
      {/* Mobile: mini progress dots */}
      <div className="flex items-center justify-center gap-2 sm:hidden pb-2">
        {STEP_KEYS.map((key, index) => (
          <div
            key={key}
            className={`rounded-full transition-all ${
              index === currentStep
                ? 'h-2 w-6 bg-electric'
                : index < currentStep
                  ? 'h-2 w-2 bg-success'
                  : 'h-2 w-2 bg-border'
            }`}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Desktop view: full horizontal stepper */}
      <div className="hidden sm:flex items-center justify-between py-4">
        {STEP_KEYS.map((key, index) => {
          const status = getStatus(index);
          const isClickable = status === 'completed';

          return (
            <div key={key} className="flex flex-1 items-center">
              {/* Step circle + label */}
              <button
                type="button"
                disabled={!isClickable}
                onClick={() => isClickable && onStepClick(index)}
                className={`
                  group flex flex-col items-center gap-1.5 p-1 transition-colors
                  ${isClickable ? 'cursor-pointer' : 'cursor-default'}
                `}
                aria-current={status === 'current' ? 'step' : undefined}
                aria-label={`${t(key)}${status === 'completed' ? ' — completed' : ''}`}
              >
                <div
                  className={`
                    flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all
                    ${status === 'completed'
                      ? 'border-success bg-success text-white group-hover:bg-success/90'
                      : status === 'current'
                        ? 'border-electric bg-electric text-white shadow-md shadow-electric/25'
                        : 'border-border bg-white text-muted'
                    }
                  `}
                >
                  <StepIcon step={index} status={status} />
                </div>
                <span
                  className={`
                    text-xs font-medium whitespace-nowrap
                    ${status === 'completed'
                      ? 'text-success group-hover:text-success/80'
                      : status === 'current'
                        ? 'text-electric font-semibold'
                        : 'text-muted'
                    }
                  `}
                >
                  {t(key)}
                </span>
              </button>

              {/* Connector line between steps */}
              {index < STEP_KEYS.length - 1 && (
                <div
                  className={`
                    mx-2 h-0.5 flex-1 rounded-full transition-colors
                    ${index < currentStep ? 'bg-success' : 'bg-border'}
                  `}
                  aria-hidden="true"
                />
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
